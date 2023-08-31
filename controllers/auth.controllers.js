const User = require('../models/User.model')

const { DEFAULT_AVATAR } = require('./../consts/consts')

const signUp = (req, res, next) => {
	const userData = ({ firstName, lastName, email, password, jobPosition, description } = req.body)

	const avatar = req.body.avatar ?? DEFAULT_AVATAR

	User.create({ ...userData, avatar })
		.then(() => res.sendStatus(201))
		.catch(err => next(err))
}

const logIn = (req, res, next) => {
	const { email, password } = req.body

	if (email === '' || password === '') {
		res.status(400).json({ errorMessages: ['Provide email and password.'] })
		return
	}

	User.findOne({ email })
		.then(foundUser => {
			if (!foundUser) {
				res.status(401).json({ errorMessages: ['User not found.'] })
				return
			}

			if (foundUser.validatePassword(password)) {
				const authToken = foundUser.signToken()
				res.status(200).json({ authToken })
			} else {
				res.status(401).json({ errorMessages: ['Incorrect password'] })
			}
		})
		.catch(err => next(err))
}

const verify = (req, res, next) => {
	const loggedUser = req.payload
	res.json({ loggedUser })
}

//coaster: Já! pensabas que ibas a encontrar algo no?

module.exports = {
	signUp,
	logIn,
	verify,
}
