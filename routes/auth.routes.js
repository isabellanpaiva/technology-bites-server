const router = require('express').Router()
const User = require('../models/User.model')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middleware/verifyToken')

router.post('/signup', (req, res, next) => {
	const { firstName, lastName, email, password } = req.body

	User.create({ firstName, lastName, email, password })
		.then(() => res.sendStatus(201))
		.catch(err => next(err))
})

router.post('/login', (req, res, next) => {
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

			if (bcrypt.compareSync(password, foundUser.password)) {
				const { _id, email, username } = foundUser
				const payload = { _id, email, username }

				const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
					algorithm: 'HS256',
					expiresIn: '6h',
				})

				res.status(200).json({ authToken })
			} else {
				res.status(401).json({ message: 'Incorrect password' })
			}
		})
		.catch(err => next(err))
})

router.get('/verify', verifyToken, (req, res, next) => {
	const loggedUser = req.payload

	res.json({ loggedUser })
})

//coaster: Já! pensabas que ibas a encontrar algo no?

module.exports = router
