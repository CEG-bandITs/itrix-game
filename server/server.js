const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001
const cors = require('cors')

//connecting to atlas
require('./db/dbConnections')

//cookie middleware
app.use(cookieParser())

//cors middleware
app.use(cors())

// Checking if Build folder from client side exists or not
let BuildExistence = fs.existsSync(
  path.join(__dirname, '..', 'client', 'build'),
)
if (BuildExistence === false) {
  console.log("WARN: Build Folder Doesn't exists")
  console.log('WARN: run `npm run build` in client folder\n')
}

// Enabling Express to read req body as json
app.use(express.json())

// Root ('/') Path
const client = require('./routes/client')
app.use('/', client)

// user route
app.use('/api/users/', require('./routes/userRoute'))

//game route
app.use('/api/game/', require('./routes/GameRoute'))

// Serving files from ../client/build
// Which can be created by running `npm run build` in client folder
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('/api/users/verify', (req, res) => {
  try {
    jwt.verify(req.headers.jwt, process.env.JWT_SECRET)
    res.send({
      msg: 'Validated',
    })
  } catch (e) {
    console.log('Error Occured In ' + req.path + ' ' + e)
    res.send({
      msg: 'Invalid Token',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Started Listening in PORT ${PORT}...`)
})
