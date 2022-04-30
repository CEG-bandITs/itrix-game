const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const gameCntrl = require('../controllers/GameController')

// for getting question of user
router.get('/', asyncHandler(gameCntrl.getQuestion))

// verfying answer of question
router.post('/verify', asyncHandler(gameCntrl.verifyAnswer))

module.exports = router
