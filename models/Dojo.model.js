const { Schema, model } = require('mongoose')

const dojoSchema = new Schema(
	{
		category: {
			type: String,
		},

		attendees: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],

		questions: [
			{
				definition: {
					type: String,
				},
				validation: {
					type: Boolean,
				},
				approvedUsers: [
					{
						type: Schema.Types.ObjectId,
						ref: 'User',
					},
				],
			},
		],
	},

	{
		timestamps: true,
	}
)

const Dojo = model('Dojo', dojoSchema)

module.exports = Dojo
