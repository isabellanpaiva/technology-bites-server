const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    commentOwner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    commentedCard: {
      type: Schema.Types.ObjectId,
      ref: 'Card'
    },

    commentedMessage: {
      type: String,
    }
  },

  {
    timestamps: true
  }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment
