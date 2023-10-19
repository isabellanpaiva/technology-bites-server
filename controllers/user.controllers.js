const User = require('../models/User.model')
const Challenge = require('../models/Challenge.model')

const getOneUser = (req, res, next) => {
	const { user_id } = req.params

	User.findById(user_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}
const getAllUsers = (req, res, next) => {
	const { _id: user_id } = req.payload
	const { filter, page } = req.params

	const query = filter === 'true' ? { followers: user_id } : {}

	User.find(query)
		.limit(6)
		.skip(6 * page)
		.then(response => {
			res.json(response)
		})
		.catch(err => next(err))
}

const getTotalUsers = (req, res, next) => {
	const { _id: user_id } = req.payload
	const { filter } = req.params

	const query = filter === 'true' ? { followers: user_id } : {}
	User.count(query)
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

const updateFollowers = (req, res, next) => {
	const { action } = req.params
	const { follower_id } = req.body
	const { _id: user_id } = req.payload

	let updateData =
		action === 'add' ? { $addToSet: { followers: user_id } } : { $pull: { followers: user_id } }

	User.findByIdAndUpdate(follower_id, updateData)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const getCompletedChallenges = (req, res, next) => {
	const { user_id } = req.params

	Challenge.find({ responses: { $elemMatch: { user: user_id } } })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	getOneUser,
	getAllUsers,
	getTotalUsers,
	deleteUser,
	editUser,
	updateFollowers,
	getCompletedChallenges,
}
