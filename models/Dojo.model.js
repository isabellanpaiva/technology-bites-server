const { Schema, model } = require("mongoose")

const dojoSchema = new Schema(

  {

    category: {
      type: String
    },

    //verify if user have replied a dojo (quantity based)

    attendees: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],

    questions: [{

      definition: {
        type: String
      },

      validation: {
        type: Boolean,
      },

      //verify if user have replied with correct answer (quality based)
      approvedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],

    }],

  },

  {
    timestamps: true
  }
)

const Dojo = model("Dojo", dojoSchema)

module.exports = Dojo
