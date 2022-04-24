const UserModel = require('../db/UserModel')
const moment = require('moment')
const Questions = require('../Questions')
require('dotenv').config()

const startDate = process.env.START_DATE

/*
  @desc : get /api/game/ ;  header => bearer <token>
  response : 
      if user level is less than 10 :
      {status:1,message:'sucess',data:<question_data>}
      else :
      {status:0,message:'you completed game',data:{}}
*/
async function getQuestion(req, res) {
  const email = req.data.email
  const data = await UserModel.findOne({ email: email })
  const today = moment().format('YYYY-MM-DD')
  const day = data['days'][today]

  if (day === undefined)
    res.send({ status: 0, message: 'you can only play between may 5,6,7' })
  else {
    const level = day.level
    let status = 0,
      message = 'success',
      data__ = {}
    if (level === 0) {
      //updating startTime
      data.days[today].startedAt = moment().format('HH:mm:ss')
      //updating end time (duration)
      data.days[today].EndedAt = '00:00:00'
      data.save()
      status = 1
    } else if (level < 9) {
      status = 1
    } else message = "you have completed the today's game"

    if (message === 'success') {
      let question = { ...Questions[level] }
      //removing answer from question data
      delete question['answer']
      data__['question'] = question
      data__['level'] = level
    }

    res.send({ status: status, message: message, data: data__ })
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
  const level = req.body.level
  const answer = Convert(req.body.answer)

  const question = Questions[`${level}`]

  const email = req.data.email

  if (level === 9) res.send({ status: 1, message: 'game ended' })
  //console.log(answer,question,question.answer);
  else {
    if (answer === question.answer) {
      const user = await UserModel.findOne({ email: email })
      const today = moment().format('YYYY-MM-DD')

      if (user.days[today] === undefined)
        res.send({ status: 0, message: 'you cannot submit today' })
      else {
        //update level
        user.days[today].level += 1
        //updating duration
        user.days[today].duration = TimeDifference(user.days[today].startedAt)
        await user.save()

        let data = { ...Questions[level + 1] }
        delete data['answer']
        console.log('updating level !!')
        res.send({
          status: 1,
          message: 'success',
          data: { question: data, level: level + 1 },
        })
      }
    } else res.send({ message: 'wrong answer' })
  }
}

function Convert(answer) {
  //removing paddings
  answer = answer.trim()

  //removing spaces between words
  answer = answer.split(' ').join('')
  //making everything to lower case
  answer = answer.toLowerCase()

  return answer
}

function TimeDifference(startTime) {
  let endTime = moment(moment().format('HH:mm:ss'), 'HH:mm:ss')
  startTime = moment(startTime, 'HH:mm:ss')
  console.log(endTime, startTime)

  let dif = moment.duration(endTime.diff(startTime))

  dif = [dif.hours(), dif.minutes(), dif.seconds()].join(':')

  return dif
}

module.exports = {
  getQuestion,
  verifyAnswer,
}
