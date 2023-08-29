const { Schema, model } = require('mongoose')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: [true, 'First name is required.'],
		},

		lastName: {
			type: String,
			required: [true, 'Last name is required.'],
		},

		email: {
			type: String,
			required: [true, 'Email is required.'],
			unique: true,
			lowercase: true,
			trim: true,
		},

		password: {
			type: String,
			required: [true, 'Password is required.'],
			minlength: [4, 'The password needs to be at least 4 characters'],
		},

		avatar: {
			type: String,
			default: 'DEFAULTAVATAR',
		},

		jobPosition: {
			type: String,
		},

		description: {
			type: String,
			minlength: [20, 'Description must be 20 characters minimum'],
		},

		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],

		role: {
			type: String,
			enum: ['USER', 'ADMIN'],
			default: 'USER',
		},

		socials: [
			{
				platform: {
					type: String,
					enum: ['LinkedIn', 'Github', 'Instagram', 'Facebook', 'X'],
				},
				link: {
					type: String,
				},
			},
		],
	},

	{
		timestamps: true,
	}
)

userSchema.pre('save', function (next) {
	const saltRounds = 10
	const salt = bcrypt.genSaltSync(saltRounds)
	const hashedPassword = bcrypt.hashSync(this.password, salt)
	this.password = hashedPassword

	next()
})

userSchema.methods.validatePassword = function (candidatePassword) {
	return bcrypt.compareSync(candidatePassword, this.password)
}

userSchema.methods.signToken = function () {
	const { _id, email, firstName, lastName, avatar, jobPosition, description, friends, socials } =
		this
	const payload = {
		_id,
		email,
		firstName,
		lastName,
		avatar,
		jobPosition,
		description,
		friends,
		socials,
	}

	const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
		algorithm: 'HS256',
		expiresIn: '6h',
	})

	return authToken
}

const User = model('User', userSchema)

module.exports = User
