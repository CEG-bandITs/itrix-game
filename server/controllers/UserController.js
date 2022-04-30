/* eslint-disable no-unreachable */
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const User = require('../db/UserModel')
const logger = require('../logger')
const validator = require('../lib/validation')
const DateZero = new Date(0)

/*
    @desc POST /api/users/auth/
    actions :verify user , generate token and set token as cookie
*/

async function Auth(req, res) {
  const email = req.body.email
  const password = req.body.password
  const data = { email, password }

  if (!validator.validEmail(data.email) || !validator.validEmail(data.email)) {
    res.status(400).json({ message: 'Invalid Email' })
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: inavlid email or password : ${data} `,
    )
    return
  }

  console.log(data)

  try {
    const user = await User.findOne({ email: data.email })
    if (user) {
      const valid = await user.ValidatePassword(data.password)

      logger.info(
        `db request from user ip ${
          req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }: validating password ${data.password} passwordHash ${
          user.password
        } for ${data.email}, VALID: ${valid} `,
      )

      if (!valid) {
        res.status(400).json({ message: 'Wrong Credentials' })
        return
      } else {
        const data = {
          name: user.name,
          email: user.email,
        }
        const token = JWTTokenGenerator(data)
        logger.info(
          `request from user ip ${
            req.headers['x-forwarded-for'] || req.socket.remoteAddress
          }: validated password and generated jwt ${jwt}`,
        )
        res.status(200).json({ message: 'success', token, data })
      }
    } else {
      logger.info(
        `db request from user ip ${
          req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }: user not found for email ${data.email}`,
      )
      res.status(400).send({ message: 'User Not Found' })
    }
  } catch (e) {
    logger.info(
      `request from user ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: Authentication Error: ${e}`,
    )
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const JWTTokenGenerator = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET)
}

/*
    @desc POST /api/users/new
    actions :create new user , generate token and set token as cookie
*/
async function CreateUser(req, res) {
  const body = req.body
  const data = {
    name: body.name,
    college: body.clg,
    password: body.password,
    email: body.email,
    days: [
      {
        level: 0,
        lastCompletedTimeStamp: DateZero,
      },
      {
        level: 0,
        lastCompletedTimeStamp: DateZero,
      },
      {
        level: 0,
        lastCompletedTimeStamp: DateZero,
      },
    ],
  }

  console.log(data)
  if (
    !validator.validEmail(data.email) ||
    !validator.validPassword(data.password)
  ) {
    res.status(400).json({ message: 'not valid email or password' })
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: invalid email or password : ${data} `,
    )
    return
  }

  try {
    const user = new User(data)
    await user.save()
    const token = JWTTokenGenerator({ name: user.name, email: user.email })
    res.status(200).json({ message: 'success', token })
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: User created , jwt generated ${jwt} `,
    )
  } catch (e) {
    if (e.code === 11000) {
      res.status(400).json({ message: 'Account already exists' })
      logger.info(
        `request from ${
          req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }: Account Aldready created`,
      )
      return
    }
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: Internal Server Error ${e}`,
    )
    res.status(500).json({ message: 'internal server error' })
  }
}

function GetUserEmailFromJWt(req) {
  if (req.cookies.jwt === undefined) {
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: unable to resolved jwt: ${req.cookies.jwt}`,
    )
    return ''
  } else {
    let data = {}
    try {
      data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
    } catch (e) {
      if (!req.cookies.jwt)
        logger.info(
          `request from ${
            req.headers['x-forwarded-for'] || req.socket.remoteAddress
          }: jwt is not avaliable: ${e}`,
        )
      else
        logger.info(
          `request from ${
            req.headers['x-forwarded-for'] || req.socket.remoteAddress
          }: jwt is tampered or unable to verify jwt Error: ${e}`,
        )
      return ''
    }
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: jwt verified and email ${data.email} extracted`,
    )
    return data.email
  }
}

module.exports = {
  Auth,
  CreateUser,
  GetUserEmailFromJWt,
}
