const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()
const Schema = mongoose.Schema

// generating salt for hashing
const salt = bcrypt.genSaltSync(9)

// day schema
const DaySchema = {
  level: {
    type: Number,
    default: 0,
  },
  lastCompletedTimeStamp: {
    type: Number,
  },
}

// main user schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
      unique: false,
      minlength: [1, 'too short  name'],
      maxlength: [25, 'too long  name'],
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'email is required'],
    },

    password: {
      type: String,
    },

    college: {
      type: String,
      trim: true,
      required: false,
    },

    days: {
      type: [DaySchema],
      required: true,
    },
  },
  { timestamps: true },
)

// hashing password just before saving instance
// this is not working !!
UserSchema.pre('save', async function (next) {
  // hashed password
  const hash = await bcrypt.hash(this.password, salt)

  // storing hashed password
  this.password = hash
  next()
})

// method for validating plain password against hashed one
UserSchema.methods.ValidatePassword = async function (plainPassword) {
  const validPassword = await bcrypt.compare(plainPassword, this.password)
  return validPassword
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
