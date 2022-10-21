/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
const Users = require('../db/UserModel')
const GetUserEmailFromJWt =
  require('../controllers/UserController').GetUserEmailFromJWt
const config = require('config')
const logger = require('../logger')
require('dotenv').config()

const leaderBoard = async (req, res) => {
  logger.info(
    `request user ip ${
      req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }: startRank : ${req.body.startRank} : endRank : ${req.body.endRank}`,
  )

  req.body.currentDay = Number(req.body.currentDay)

  // Checking validity of start and end rank
  if (
    req.body.startRank === undefined ||
    req.body.endRank === undefined ||
    isNaN(req.body.currentDay) ||
    req.body.startRank < 1 ||
    req.body.endRank < 1 ||
    req.body.endRank <= req.body.startRank ||
    req.body.endRank - req.body.startRank < 1 ||
    parseInt(process.env.NUMBER_OF_USERS) < req.body.startRank ||
    !config.get('days').includes(req.body.currentDay) ||
    req.body.endRank - req.body.startRank !== 10
  ) {
    req.body.startRank = 1
    req.body.endRank = 10
    req.body.currentDay = config.get('currentDate')

    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: converted startRank : ${req.body.startRank} : converted endRank : ${
        req.body.endRank
      } and day requested is ${req.body.currentDay} (0 for first day) )`,
    )
  }

  let rankArray = await Users.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        level: { $arrayElemAt: ['$days.level', req.body.currentDay] },
        lastCompletedTimeStamp: {
          $arrayElemAt: ['$days.lastCompletedTimeStamp', req.body.currentDay],
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

  let end = false
  if (req.body.endRank > parseInt(process.env.NUMBER_OF_USERS)) {
    end = true
  }
  // to decide whether to disable other days are not
  if (
    req.body.startRank === 1 &&
    req.body.endRank === 11 &&
    req.body.currentDay === config.get('currentDate')
  ) {
    return res.json({
      rankArray,
      end,
    })
  }

  res.json({
    rankArray,
    end,
  })
}

// Rank Function
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
  console.log('INFO:requesting for day ', req.query.currentDay)
  const rankArray = await Users.aggregate([
    {
      $project: {
        name: 1,
        email: 1,
        level: { $arrayElemAt: ['$days.level', Number(req.query.currentDay)] },
        lastCompletedTimeStamp: {
          $arrayElemAt: [
            '$days.lastCompletedTimeStamp',
            Number(req.query.currentDay),
          ],
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
