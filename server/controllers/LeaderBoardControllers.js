const Users = require('../db/UserModel')
const GetUserEmailFromJWt =
  require('../controllers/UserController').GetUserEmailFromJWt
const config = require('../Questions')
const logger = require('../logger')

const leaderBoard = async (req, res) => {
  logger.info(
    `request user ip ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }: startRank : ${req.body.startRank} : endRank : ${req.body.endRank}`,
  )

  // Checking validoty of start and end rank
  if (
    req.body.startRank === undefined ||
    req.body.endRank === undefined ||
    req.body.startRank < 1 ||
    req.body.endRank < 1 ||
    req.body.endRank <= req.body.startRank ||
    req.body.endRank - req.body.startRank < 1
  ) {
    req.body.startRank = 1
    req.body.endRank = 10
    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: converted startRank : ${req.body.startRank} : converted endRank : ${
        req.body.endRank
      }`,
    )
  }

  const rankArray = await Users.aggregate([
    {
      $project: {
        name: 1,
        email: 1,
        level: { $arrayElemAt: ['$days.level', config.currentDate] },
        lastCompletedTimeStamp: {
          $arrayElemAt: ['$days.lastCompletedTimeStamp', config.currentDate],
        },
      },
    },
    { $sort: { level: -1, lastCompletedTimeStamp: 1 } },
    { $skip: req.body.startRank - 1 },
    { $limit: req.body.endRank - req.body.startRank },
  ])

  logger.info(
    `requested db for user ip ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }: sent rank array of size ${rankArray.length}`,
  )

  res.json(rankArray)
}

const rank = async (req, res) => {
  const email = GetUserEmailFromJWt(req)
  if (email === '') {
    if (!req.cookies.jwt)
      res.status(400).json({ message: 'jwt not avaliable, logout and login' })
    else res.status(400).json({ message: 'jwt is tampered' })

    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: unable to resolved jwt:   ${req.cookies.jwt}`,
    )
    return
  }

  logger.info(
    `request from ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }: resolved jwt and got email ${email}`,
  )

  // Checking validoty of start and end rank
  if (
    req.body.startRank === undefined ||
    req.body.endRank === undefined ||
    req.body.startRank < 1 ||
    req.body.endRank < 1 ||
    req.body.endRank <= req.body.startRank ||
    req.body.endRank - req.body.startRank < 1
  ) {
    req.body.startRank = 1
    req.body.endRank = 10
    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: converted startRank : ${req.body.startRank} : converted endRank : ${
        req.body.endRank
      }`,
    )
  }

  const rankArray = await Users.aggregate([
    {
      $project: {
        name: 1,
        email: 1,
        level: { $arrayElemAt: ['$days.level', config.currentDate] },
        lastCompletedTimeStamp: {
          $arrayElemAt: ['$days.lastCompletedTimeStamp', config.currentDate],
        },
      },
    },
    { $sort: { level: -1, lastCompletedTimeStamp: 1 } },
  ])

  const rank = rankArray.findIndex((e) => e.email === email)

  logger.info(
    `request for user ip ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }: userrank found ${rank}`,
  )
  res.json({ rank })
}

module.exports = { leaderBoard, rank }
