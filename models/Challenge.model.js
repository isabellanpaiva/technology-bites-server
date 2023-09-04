const { Schema, model } = require('mongoose')

const challengeSchema = new Schema(
	{
		category: {
			type: String,
		},

		question: {
			type: String,
			minlength: [10, 'Minimum question length is 10 characters'],
		},
	},

	{
		timestamps: true,
	}
)

const Challenge = model('Challenge', challengeSchema)

module.exports = Challenge
