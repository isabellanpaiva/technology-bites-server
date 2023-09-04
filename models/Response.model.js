const { Schema, model } = require('mongoose')

const responseSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},

		response: {
			type: String,
			minlength: [1, `Response can't be empty`],
			maxlength: [250, 'Ops...maximum response length is 250 characters'],
		},

		relatedChallenge: {
			type: Schema.Types.ObjectId,
			ref: 'Challenge',
		},

		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
	}
)

const Response = model('Response', responseSchema)

module.exports = Response
