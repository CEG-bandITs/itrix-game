const UserModel = require('../db/UserModel')
// const moment = require('moment')
// const Questions = require('../Questions')
const config = require('../Questions')
const GetUserEmailFromJWt =
  require('../controllers/UserController').GetUserEmailFromJWt
require('dotenv').config()

const currentDate = config.currentDate

/*
  @desc : get /api/game/ ;  cookie jwt
  response : 
      if user level is less than 10 :
      {status:1,message:'sucess',data:<question_data>}
      else :
      {status:0,message:'you completed game',data:{}}
*/
async function getQuestion(req, res) {
  const email = GetUserEmailFromJWt(req)
  if (email === '') {
    res.status(400).json({ message: 'Email Not IN JWT' })
    return
  }

  try {
    const data = await UserModel.findOne({ email })
    const level = data.days[currentDate].level
    const questionData = {
      level,
      images: config.level[level].images,
      hints: config.level[level].hints,
    }
    res.json({ message: 'Success', questionData })
  } catch (e) {
    console.log('ERROR: Error in finding email of user')
    res.status(500).json({ message: 'Email Not IN JWT' })
  }
}

/*
   @desc :post /api/game/verfiy 
   request data :{level:n,answer:a}
   response data : 
      if level >10 
      {status:1,message:"game ended"}
      else 
      {status:1,data:<question_data>}
   action : verify answer and update the level relevantly 

*/

async function verifyAnswer(req, res) {
  const email = GetUserEmailFromJWt(req)
  if (email === '') {
    res.status(400).json({ message: 'Email Not IN JWT' })
    return
  }

  try {
    const data = await UserModel.findOne({ email })
    let level = data.days[currentDate].level
    console.log(config.level[level].answers)
    if (config.level[level].answers.includes(req.body.answer)) {
      data.days[currentDate].level += 1
      data.save()
      console.log(config.level.length)
      console.log(level + 2)
      if (level + 2 < config.level.length) {
        level++
        res.json({
          message: 'Success',
          data: {
            level,
            questions: config.level[level].images,
            hints: config.level[level].hints,
          },
        })
      } else {
        res.json({ message: 'Success', data: null })
      }
    } else {
      res.status(500).json({ message: 'Wrong Answer' })
    }
  } catch (e) {
    console.log('ERROR: Error in finding email of user', e)
    res.status(500).json({ message: 'Email Not IN JWT' })
  }
}

module.exports = {
  getQuestion,
  verifyAnswer,
}
