const mongoose = require('mongoose')
const logger = require('../logger')

// atlas url
const mongooseUrl =
  'mongodb+srv://itrix:itrix@cluster0.ngqge.mongodb.net/itrix?retryWrites=true&w=majority'

// localURL
// const mongooseUrl = 'mongodb://localhost:27017/itrix'

// connecting
mongoose.connect(mongooseUrl)

const db = mongoose.connection

// error instance
db.on('error', () => logger.error('Error Connecting Database'))

// success instance
db.once('open', () => logger.info('Connected To DB'))
