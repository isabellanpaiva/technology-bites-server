const { Schema, model } = require("mongoose")

const biteSchema = new Schema(
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

const Bite = model("Bite", biteSchema)

module.exports = Bite
