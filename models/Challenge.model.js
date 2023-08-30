const { Schema, model } = require('mongoose')

const challengeSchema = new Schema(
	{
		category: {
			type: String,
		},

		question: {
			type: String,
		},

		responses: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
				response: {
					type: String,
					minlength: [1, `Response can't be empty`]
				},
			},
		],

		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],

		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},

	{
		timestamps: true,
	}
)

const Challenge = model('Challenge', challengeSchema)

module.exports = Challenge
