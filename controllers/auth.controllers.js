const User = require('../models/User.model')

const signUp = (req, res, next) => {
	const { firstName, lastName, email, password } = req.body

	User.create({ firstName, lastName, email, password })
		.then(() => res.sendStatus(201))
		.catch(err => next(err))
}

const logIn = (req, res, next) => {
	const { email, password } = req.body

	if (email === '' || password === '') {
		res.status(400).json({ message: 'Provide email and password.' })
		return
	}

	User.findOne({ email })
		.then(foundUser => {
			if (!foundUser) {
				res.status(401).json({ message: 'User not found.' })
				return
			}
			if (foundUser.validatePassword(password)) {
				const authToken = foundUser.signToken()
				res.status(200).json({ authToken })
			} else {
				res.status(401).json({ message: 'Incorrect password' })
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
