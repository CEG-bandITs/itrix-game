const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()
const schema = mongoose.Schema
const moment = require('moment')

//day schema

const DaySchema = {
  level: {
    type: Number,
    default: 0,
    required: false,
  },
  startedAt: {
    type: String,
    default: '',
  },
  duration: {
    type: String,
    default: '',
  },
}

//Days
let days = {}

const t = new Date().toLocaleDateString().split('/')
let month, date
if (parseInt(t[1]) < 10) {
  month = '0' + t[1]
} else month = t[1]
if (parseInt(t[0]) < 10) {
  date = '0' + t[0]
} else {
  date = t[0]
}
let today = `${t[2]}-${month}-${date}`
today = moment(today)

const startDate = moment(process.env.START_DATE)
const diffDays = today.date() - startDate.date()

console.log('differnce in date', diffDays)

if (diffDays >= 0 && diffDays < 3) {
  var b = 0
  for (var k = diffDays; k < 3; k++) {
    var date__ = moment().add(b, 'days')
    days[date__.format('YYYY-MM-DD')] = DaySchema
    b++
  }
}

//main user schema
const UserSchema = new schema(
  {
    name: {
      firstName: {
        type: String,
        required: 'first name is required',
        trim: true,
        unique: false,
        minlength: [3, 'too short first name'],
        maxlength: [20, 'too long first name'],
      },
      lastName: {
        type: String,
        required: 'last name is required',
        trim: true,
        unique: false,
        minlength: [3, 'too short last name'],
        maxlength: [20, 'too long last name'],
      },
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },

    password: String,

    college: {
      type: String,
      trim: true,
      required: 'college is required !!',
    },

    days,
  },
  { timestamps: true },
)

// hashing password just before saving instance
UserSchema.pre('save', async function (next) {
  let user = this

  //generating salt for hashing
  const salt = await bcrypt.genSalt(10)

  //hashed password
  const hash = await bcrypt.hash(this.password, salt)

  //storing hashed password
  this.password = hash
  next()
})

//method for validating plain password against hashed one
UserSchema.methods.ValidatePassword = async function (plainPassword) {
  const validPassword = await bcrypt.compare(plainPassword, this.password)
  return validPassword
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
