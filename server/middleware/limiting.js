const rateLimit = require('express-rate-limit')
const loginLogoutRateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 25,
  message: '{"message":"Exceeded Request Limit"}',
  headers: true,
})
const gameRateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 500,
  message: '{"message":"Exceeded Request Limit"}',
  headers: true,
})

module.exports = {
  loginLogoutRateLimiter,
  gameRateLimiter,
}
