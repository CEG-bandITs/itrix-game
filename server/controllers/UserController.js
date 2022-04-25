const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../db/UserModel')
const DateZero = new Date(0)

/*
    @desc POST /api/users/auth/
    actions :verify user , generate token and set token as cookie
*/

async function Auth(req, res) {
  const email = req.body.email
  const password = req.body.password
  const data = { email, password }

  try {
    const user = await User.findOne({ email: data.email })
    if (!user) res.send({ message: 'User not found' })
    else {
      const valid = await user.ValidatePassword(data.password)

      if (valid) {
        const data = {
          name: user.name,
          email: user.email,
        }
        const token = JWTTokenGenerator(data)
        res.json({ message: 'success', token, data })
      } else res.status(400).json({ message: 'wrong credentials' })
    }
  } catch (e) {
    console.log('ERROR: error in finding user')
    res.status(500).json({ message: 'internal server error' })
  }
}

const JWTTokenGenerator = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET)
}

/*
    @desc POST /api/users/new
    actions :create new user , generate token and set token as cookie
*/
async function CreateUser(req, res) {
  const body = req.body
  const data = {
    name: body.name,
    college: body.clg,
    password: body.password,
    email: body.email,
    days: [
      {
        level: 0,
        lastCompletedTimeStamp: DateZero,
      },
      {
        level: 0,
        lastCompletedTimeStamp: DateZero,
      },
      {
        level: 0,
        lastCompletedTimeStamp: DateZero,
      },
    ],
  }

  try {
    const user = new User(data)
    await user.save(function (err, results) {
      if (err) {
        console.log('Error: In saving user while creating', err)
        res.status(500).json({ message: err._message })
      } else {
        const token = JWTTokenGenerator({ name: user.name, email: user.email })
        res.status(200).json({ message: 'success', token })
      }
    })
  } catch (e) {
    console.log('ERROR: in creating user', e)
    res.status(500).json({ message: 'internal server error' })
  }
}

function GetUserEmailFromJWt(req) {
  try {
    const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
    return data.email
  } catch (e) {
    console.log('ERROR: in verifing JWT', e)
    return ''
  }
}

module.exports = {
  Auth,
  CreateUser,
  GetUserEmailFromJWt,
}
