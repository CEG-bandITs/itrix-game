const express = require('express')
const router = express.Router()
// const asyncHandler = require('express-async-handler')
const leaderBoard = require('../controllers/LeaderBoardControllers').leaderBoard
const rank = require('../controllers/LeaderBoardControllers').rank
require('dotenv').config()

// verfying answer of question
router.post('/leaderboard', leaderBoard)
router.get('/rank', rank)

module.exports = router
