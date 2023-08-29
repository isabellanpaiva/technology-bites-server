const User = require('../models/User.model')

const getOneUser = (req, res, next) => {
	const { user_id } = req.params

	User.findById(user_id)
		.then(response => res.json(response))
		.catch(() => res.status(404).json({ message: 'User not found' }))
}

const deleteUser = (req, res, next) => {
	const { user_id } = req.params

	User.findByIdAndDelete(user_id)
		.then(() => res.status(200).json({ message: 'User deleted.' }))
		.catch(() => res.status(404).json({ message: 'User not found.' }))
}

const editUser = (req, res, next) => {
	const { user_id } = req.params
	const { firstName, lastName, email, jobPosition, description } = req.body

	const userInfo = {
		firstName,
		lastName,
		email,
		jobPosition,
		description,
	}

	User.findByIdAndUpdate(user_id, userInfo)
		.then(() => res.status(200).json({ message: 'User updated.' }))
		.catch(() => res.status(404).json({ message: 'User not found.' }))
}

//TODO router para añadir amigos
const favoritesHandler = (req, res, next) => {
	const { action } = req.params
	const { friend_id } = req.body

	//* friend_id tiene que venir del cliente
	//* user_id es el usuario conectado

	let updateData

	if (action === 'add') {
		updateData = { $push: { friends: friend_id } }
	} else if (action === 'remove') {
		updateData = { $pull: { friends: friend_id } }
	}

	User.findByIdAndUpdate(user_id, updateData)
		.then(() => {
			res.status(200)
		})
		.catch(err => next(err))
}

module.exports = {
	getOneUser,
	deleteUser,
	editUser,
	favoritesHandler,
}
