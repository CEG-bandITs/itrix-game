/* eslint-disable no-unused-vars */
const express = require('express')
const path = require('path')
const app = express()
const https = require('https')
const fs = require('fs')
const cookieParser = require('cookie-parser')

const PORT = 443

const privateKey = fs.readFileSync('privkey.pem', 'utf8')
const certificate = fs.readFileSync('./cert.pem', 'utf8')
const cafile = fs.readFileSync('./chain.pem', 'utf8')

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: cafile,
}

// connecting to atlas
require('./db/dbConnections')

// cookie middleware
app.use(cookieParser())

const userAgentValidator = require('./middleware/cancelling')
app.use(userAgentValidator)

const adminRoutes = require('./routes/admin')
app.use('/admin/reload/', adminRoutes)

// Enabling Express to read req body as json
app.use(express.json())

// Root ('/') Path
const client = require('./routes/client')
const logger = require('./logger')
app.use('/', client)

// user route
app.use('/api/users/', require('./routes/userRoute'))

// game route
app.use('/api/game/', require('./routes/GameRoute'))

// leaderboard
app.use('/api/', require('./routes/LeaderBoardRoute'))

// Serving files from ../client/build
// Which can be created by running `npm run build` in client folder
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

https.createServer(credentials, app).listen(PORT, (err) => {
  if (err) {
    logger.fatal('unable to to listen to port, Error:', err)
    throw err
  }
  logger.info(`listening in ${PORT}`)
})

// app.listen(3001,(err)=>{
//   if(!err) console.log("INFO : Listening at port ",3001)
//   else console.log('unable to to listen to port, Error:', err)
// })
