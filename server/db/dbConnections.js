const mongoose = require('mongoose')

// atlas url
const mongooseUrl =
  'mongodb+srv://itrix:itrix@cluster0.ngqge.mongodb.net/itrix?retryWrites=true&w=majority'

// connecting
mongoose.connect(mongooseUrl)

const db = mongoose.connection

// error instance
db.on('error', console.error.bind('ERROR: error connecting to database'))

// success instance
db.once('open', () => {
  console.log('INFO: connected to atlas sucessfully')
})
