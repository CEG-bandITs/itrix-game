const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const gameCntrl = require('../controllers/GameController')
const gameRateLimiter = require('../middleware/limiting').gameRateLimiter

router.use((req, res, next) => {
  if (req.path !== '/verify') {
    next()
  } else {
    res.setHeader('Content-type', 'application/json')
    return gameRateLimiter(req, res, next)
  }
})

// for getting question of user
router.get('/', asyncHandler(gameCntrl.getQuestion))

// verfying answer of question
router.post('/verify', asyncHandler(gameCntrl.verifyAnswer))

module.exports = router
