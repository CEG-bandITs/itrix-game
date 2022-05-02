/* eslint-disable no-unused-vars */
const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const userCntrl = require('../controllers/UserController')
const jwt = require('jsonwebtoken')
const loginLogoutRateLimiter =
  require('../middleware/limiting').loginLogoutRateLimiter
const logger = require('../logger')
require('dotenv').config()

router.use((req, res, next) => {
  if (req.path === '/verify') {
    next()
  } else {
    res.setHeader('Content-type', 'application/json')
    return loginLogoutRateLimiter(req, res, next)
  }
})

// Creating new user
router.post('/new', asyncHandler(userCntrl.CreateUser))

// Taking in username and password and giving back JWt
router.post('/auth', asyncHandler(userCntrl.Auth))

// Verify JWT token
router.get('/verify', (req, res) => {
  if (!req.cookies.jwt) {
    logger.info(
      `request from ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: Token not Provided`,
    )
    res.json({
      msg: 'Invalid Token',
    })
    return
  }

  try {
    jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
    logger.info(
      `request from ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: JWT Validated jwt : ${jwt}`,
    )
    res.json({
      msg: 'Validated',
    })
  } catch (e) {
    logger.info(
      `request from ip ${
        req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }: Error Occured Error: ${e}`,
    )
    res.json({
      msg: 'Internal Server Error',
    })
  }
})

module.exports = router
