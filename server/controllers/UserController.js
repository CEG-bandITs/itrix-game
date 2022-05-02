/* eslint-disable no-unreachable */
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const User = require('../db/UserModel')
const logger = require('../logger')
const validator = require('../lib/validation')
const crypto = require('crypto')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

/*
    @desc POST /api/users/auth/
    actions :verify user , generate token and set token as cookie
*/

async function Auth(req, res) {
  const email = req.body.email
  const password = req.body.password

  if (email === undefined || password === undefined)
    res.status(500).json({ message: 'Need all fields' })
  const data = { email, password }

  if (!validator.validEmail(data.email) || !validator.validEmail(data.email)) {
    res.status(400).json({ message: 'Invalid Email' })
    logger.info(
      `request from ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: invalid email or password : ${data} `,
    )
    return
  }

  try {
    const user = await User.findOne({ email: data.email })
    if (user) {
      const hash = crypto
        .createHash('sha256')
        .update(data.password)
        .digest('hex')
      const password = user.password + ''
      const valid = hash === password

      logger.info(
        `db request from user ip ${
          req.headers['x-forwarded-for'] || req.socket.remoteAddress
        }: validating password ${
          data.password
        } gen hash ${hash} passwordHash in db ${password} for ${
          data.email
        }, VALID: ${valid} `,
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
          }: validated password and generated jwt ${token}`,
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

const ValidateCaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: 'POST' },
  )

  const response = await res.json()
  return response.success
}

/*
    @desc POST /api/users/new
    actions :create new user , generate token and set token as cookie
*/
async function CreateUser(req, res) {
  const DateZero = Date.now(0)
  const body = req.body

  if (
    body.name === undefined ||
    body.clg === undefined ||
    body.password === undefined ||
    body.email === undefined ||
    body.token === undefined
  )
    return res.status(400).json({ message: 'Need all fields' })

  const validity = await ValidateCaptcha(body.token)

  if (validity === false)
    return res.status(500).json({ message: 'Captcha Failed , Reload!' })

  const data = {
    name: body.name,
    college: body.clg,
    password: body.password,
    phonenumber: body.tel,
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
    const hash = crypto.createHash('sha256').update(user.password).digest('hex')
    logger.info(
      `For users ${this.email} changing password from ${user.password} to ${hash} `,
    )
    user.password = hash

    await user.save()
    const token = JWTTokenGenerator({ name: user.name, email: user.email })
    res.status(200).json({ message: 'success', token })
    process.env.NUMBER_OF_USERS = parseInt(process.env.NUMBER_OF_USERS) + 1

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
        }: Account Already created`,
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
