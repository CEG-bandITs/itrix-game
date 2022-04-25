const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const userCntrl = require('../controllers/UserController')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Creating new user
router.post('/new', asyncHandler(userCntrl.CreateUser))

// Taking in username and password and giving back JWt
router.post('/auth', asyncHandler(userCntrl.Auth))

// Verify JWT token
router.get('/verify', (req, res) => {
  try {
    jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
    res.send({
      msg: 'Validated',
    })
  } catch (e) {
    console.log('Error Occured In ' + req.path + ' ' + e)
    res.send({
      msg: 'Invalid Token',
    })
  }
})

module.exports = router
