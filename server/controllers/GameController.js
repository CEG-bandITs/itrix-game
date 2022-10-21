const UserModel = require('../db/UserModel')
const config = require('config-reloadable')
const path = require('path')
const logger = require('../logger')
const GetUserEmailFromJWt =
  require('../controllers/UserController').GetUserEmailFromJWt
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const currentDate = config().get('currentDate')

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

  try {
    const data = await UserModel.findOne({ email })

    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: finding one user ${data}`,
    )

    const level = data.days[currentDate].level
    if (level >= config().get('level').length) {
      res.json({ message: 'Success', data: null })
    }
    const questionData = {
      level,
      images: config().get('level')[level].images,
      hints: config().get('level')[level].hints,
    }
    res.json({ message: 'Success', questionData })
  } catch (e) {
    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: Error in getting Questions : Error : ${e}`,
    )
    res
      .status(200)
      .json({ message: 'Internal Server Error so logout and login' })
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

  try {
    const data = await UserModel.findOne({ email })
    let level = data.days[currentDate].level

    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: current date: ${currentDate} , level : ${
        data.days[currentDate].level
      }`,
    )

    if (config().get('level')[level].answers.includes(req.body.answer)) {
      data.days[currentDate].level += 1
      data.days[currentDate].lastCompletedTimeStamp = Date.now()
      data.save()
      if (level + 1 < config().get('level').length) {
        level++
        logger.info(
          `requested db for user ip ${
            req.headers['x-forwarded-for'] || req.socket.remoteAddress
          }: current date: ${currentDate} , level : ${
            data.days[currentDate].level
          }, Date: ${Date.now()}`,
        )
        return res.json({
          message: 'Success',
          data: {
            level,
            questions: config().get('level')[level].images,
            hints: config().get('level')[level].hints,
          },
        })
      } else {
        res.json({ message: 'Success', data: null })
      }
    } else {
      res.status(400).json({ message: 'Wrong Answer' })
    }
  } catch (e) {
    logger.info(
      `requested db for user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: Error occured ${e}`,
    )
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  getQuestion,
  verifyAnswer,
}
