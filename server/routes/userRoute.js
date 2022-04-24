const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const userCntrl = require('../controllers/UserController')
const moment = require('moment')
require('dotenv').config()

router.get('/details', asyncHandler(userCntrl.Details))

router.use(function (req, res, next) {
  const t = new Date().toLocaleDateString().split('/')
  let month, date
  if (parseInt(t[1]) < 10) {
    month = '0' + t[1]
  } else month = t[1]
  if (parseInt(t[0]) < 10) {
    date = '0' + t[0]
  } else {
    date = t[0]
  }
  let today = `${t[2]}-${month}-${date}`
  console.log(today)
  today = moment(today)
  console.log(process.env.START_DATE)
  const startDate = moment(process.env.START_DATE)
  const diffDays = today.date() - startDate.date()
  if (!(diffDays >= 0 && diffDays < 3)) {
    res.send({ message: 'can not register or login today!' })
  } else next()
})

router.post('/new', asyncHandler(userCntrl.CreateUser))

router.post('/auth', asyncHandler(userCntrl.Auth))

module.exports = router
