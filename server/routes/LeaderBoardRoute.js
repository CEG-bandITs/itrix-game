const express = require('express')
const router = express.Router()
// const asyncHandler = require('express-async-handler')
const leaderBoard = require('../controllers/LeaderBoardControllers')
require('dotenv').config()

// verfying answer of question
router.post('/leaderboard', leaderBoard)

module.exports = router
