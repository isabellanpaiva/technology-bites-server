const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    content: {
      type: String,
    }
  },

  {
    timestamps: true
  }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment
