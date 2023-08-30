const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    content: {
      type: String,
      minlength: [5, 'Minimum length is 5 characters']
    }
  },

  {
    timestamps: true
  }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment
