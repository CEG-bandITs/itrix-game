/* eslint-disable spaced-comment */
const mongoose = require('mongoose')
const logger = require('../logger')
const { count } = require('./UserModel')

require('dotenv').config()
//atlas url
// const mongooseUrl =
//   'mongodb+srv://itrix:itrix@cluster0.ngqge.mongodb.net/itrix?retryWrites=true&w=majority'

// localURL
const mongooseUrl = 'mongodb://127.0.0.1:27017/itrix'

// connecting
mongoose.connect(mongooseUrl)

const db = mongoose.connection

// error instance
db.on('error', (e) => logger.error('Error Connecting Database' + e))

// success instance
db.once('open', () => {
  // counting number of users and setting to env variable
  mongoose
    .model('User')
    .find()
    .countDocuments().then(count => {

    })

  logger.info('Connected To DB')
})
