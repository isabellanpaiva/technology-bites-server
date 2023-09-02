const User = require('../models/User.model')

const getOneUser = (req, res, next) => {
	const { user_id } = req.params

	User.findById(user_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const deleteUser = (req, res, next) => {
	const { user_id } = req.params

	User.findByIdAndDelete(user_id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err))
}

const editUser = (req, res, next) => {
	const { user_id } = req.params
	const userInfo = ({ firstName, lastName, email, jobPosition, description } = req.body)

	User.findByIdAndUpdate(user_id, userInfo)
		.then(() => res.sendStatus(204))
		.catch(err => next(err))
}

const favoritesHandler = (req, res, next) => {
	const { action } = req.params
	const { friend_id } = req.body
	const { _id: user_id } = req.payload.loggedUser

	let updateData =
		action === 'add' ? { $push: { friends: friend_id } } : { $pull: { friends: friend_id } }

	User.findByIdAndUpdate(user_id, updateData)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

module.exports = {
	getOneUser,
	deleteUser,
	editUser,
	favoritesHandler,
}
