/* eslint-disable spaced-comment */
const mongoose = require('mongoose')
const logger = require('../logger')

require('dotenv').config()
//atlas url
// const mongooseUrl =
//   'mongodb+srv://itrix:itrix@cluster0.ngqge.mongodb.net/itrix?retryWrites=true&w=majority'

// localURL
const mongooseUrl = 'mongodb://localhost:27017/itrix'

// connecting
mongoose.connect(mongooseUrl)

const db = mongoose.connection

// error instance
db.on('error', () => logger.error('Error Connecting Database'))

// success instance
db.once('open', () => {
  // counting number of users and setting to env variable
  mongoose
    .model('User')
    .find()
    .count((err, count) => {
      if (!err) {
        process.env.NUMBER_OF_USERS = count
        logger.info(
          `Number of current users is : ${process.env.NUMBER_OF_USERS}`,
        )
      } else {
        logger.info('Error Fetching Number of Users')
      }
    })

  logger.info('Connected To DB')
})
