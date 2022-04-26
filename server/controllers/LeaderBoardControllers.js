const Users = require('../db/UserModel')
const GetUserEmailFromJWt =
  require('../controllers/UserController').GetUserEmailFromJWt

const leaderBoard = async (req, res) => {
  const rankArray = await Users.aggregate([
    {
      $project: {
        name: 1,
        email: 1,
        level: { $arrayElemAt: ['$days.level', 0] },
        lastCompletedTimeStamp: {
          $arrayElemAt: ['$days.lastCompletedTimeStamp', 0],
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
        level: { $arrayElemAt: ['$days.level', 0] },
        lastCompletedTimeStamp: {
          $arrayElemAt: ['$days.lastCompletedTimeStamp', 0],
        },
      },
    },
    { $sort: { level: -1, lastCompletedTimeStamp: 1 } },
  ])
  console.log(rankArray.findIndex((e) => e.email === email))
  res.json({ rank: rankArray.findIndex((e) => e.email === email) })
}

module.exports = { leaderBoard, rank }
