const Users = require('../db/UserModel')

const leaderBoard = async (req, res) => {
  console.log(req.body.startRank)
  const rankArray = await Users.aggregate([
    {
      $project: {
        name: 1,
        level: { $arrayElemAt: ['$days.level', 0] },
        lastCompletedTimeStamp: {
          $arrayElemAt: ['$days.lastCompletedTimeStamp', 0],
        },
      },
    },
    { $sort: { level: -1, lastCompletedTimeStamp: 1 } },
  ])
  console.log(rankArray)
  res.json(rankArray)
}

module.exports = leaderBoard
/*
  const rankArray = await Users.aggregate([
    {
      $project: { _id: 0, name: 1, level: { $arrayElemAt: ['$days', 0] }.level },
    },
    { $sort: { 'days.level': 1, lastCompletedTimeStamp: -1 } },
  ])
*/

/*
// get all at index 0
db.users.find({}, { 'days': { '$arrayElemAt': [ "$days", 0]}})

db.users.find({}, { 'days': { '$arrayElemAt': [ "$days", 0]}}).sort({"days.level": 1, "lastCompletedTimeStamp": -1})

db.users.aggregate([
      {"$project": { 'days': { '$arrayElemAt': [ "$days", 0]}}},
      {"$sort": {"days.level": 1, "lastCompletedTimeStamp": -1}},
])

db.users.aggregate([
      {"$project": { name: 1 , 'days': { '$arrayElemAt': [ "$days", 0]}}},
]).sort({"days.level": 1, "lastCompletedTimeStamp": -1})


db.users.aggregate(
  [
    {"$project": { name: 1 , 'days': { '$arrayElemAt': [ "$days", 0]}}}
  ]
)

      {$rank: {}}


db.users.aggregate([
      {"$project": { 'days': { '$arrayElemAt': [ "$days", 0]}}},
      "$setWindowFields": {
        "sortBy": {"days.level": 1, "lastCompletedTimeStamp": -1}},
        "output": { "rank": { "$rank": {} } }
      }
])


//
IMPORTANT PROJECT
{ name: 1 , level: { '$arrayElemAt': ["$days.level", 0]}, lastCompletedTimeStamp: { '$arrayElemAt': ["$days.lastCompletedTimeStamp", 0]}}


db.users.aggregate([
      {
        $project: { name: 1 , level: { '$arrayElemAt': ["$days.level", 0]}, lastCompletedTimeStamp: { '$arrayElemAt': ["$days.lastCompletedTimeStamp", 0]}}
      },
      {$sort: {level: -1, lastCompletedTimeStamp: 1}}
])
*/
