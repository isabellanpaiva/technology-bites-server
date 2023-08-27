const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {

    firstName: {
      type: String,
      required: [true, 'First name is required.']
    },

    lastName: {
      type: String,
      required: [true, 'First name is required.']
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: [true, 'Password is required.']
    },

    profilePicture: {
      type: String,
      // default: 
    },

    position: {
      type: String,
    },

    description: {
      type: String,
    },

    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },

    social: [{
      platform: {
        type: String,
        enum: ['LinkedIn', 'Github'],
      },
      link: {
        type: String,
      }
    }],
  },

  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User
