const { Schema, model } = require('mongoose')

const biteSchema = new Schema(
	{
		category: {
			type: String,
		},

		definition: {
			type: String,
		},
	},

	{
		timestamps: true,
	}
)

const Bite = model('Bite', biteSchema)

module.exports = Bite
