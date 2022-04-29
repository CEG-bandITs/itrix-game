const Users = require('../db/UserModel')
const GetUserEmailFromJWt =
  require('../controllers/UserController').GetUserEmailFromJWt
const config = require('../Questions')

const leaderBoard = async (req, res) => {
  if (req.body.startRank > req.body.endRank || req.body.startRank < 1) {
    req.body.startRank = 1
    req.body.endRank = 10
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
    { $limit: req.body.endRank - req.body.startRank - 1 },
  ])
  res.json(rankArray)
}

const rank = async (req, res) => {
  const email = GetUserEmailFromJWt(req)
  if (email === '') {
    res.status(400).json({ message: 'Email Not IN JWT' })
    return
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
  console.log(rankArray.findIndex((e) => e.email === email))
  res.json({ rank: rankArray.findIndex((e) => e.email === email) })
}

module.exports = { leaderBoard, rank }
