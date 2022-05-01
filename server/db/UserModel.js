const mongoose = require('mongoose')
require('dotenv').config()
const Schema = mongoose.Schema

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
      maxlength: [35, 'too long  name'],
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'email is required'],
    },

    phonenumber: {
      type: String,
      trim: true,
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

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
