const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const leaderBoard = require('../controllers/LeaderBoardControllers').leaderBoard
const rank = require('../controllers/LeaderBoardControllers').rank

// verfying answer of question
router.post('/leaderboard', asyncHandler(leaderBoard))
router.get('/rank', asyncHandler(rank))

module.exports = router
