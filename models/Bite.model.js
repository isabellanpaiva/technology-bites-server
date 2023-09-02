const { Schema, model } = require('mongoose')

const biteSchema = new Schema(
	{
		category: {
			type: String,
		},

		definition: {
			type: String,
			minlength: [10, 'Minimum question length is 10 characters'],
		},
	},

	{
		timestamps: true,
	}
)

const Bite = model('Bite', biteSchema)

module.exports = Bite
