const { Schema, model } = require("mongoose")

const cardSchema = new Schema(
  {
    // copy of API question
    cardQuestion: {
      type: String,
    },

    // copy of API answer
    cardAnswer: {
      type: String,
    },

    cardCategory: {
      type: String,
      enum: [],
    },

    // user response to an API question
    userResponse: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      response: {
        type: String,
      }
    }],

    likesCount: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },

  {
    timestamps: true
  }
)

const Card = model("Card", cardSchema)

module.exports = Card
