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

	// let socials = []
	// if (typeof platform === 'object') {
	// 	platform.forEach((elm, idx) => {
	// 		let social = { platform: elm, link: link[idx] }
	// 		socials.push(social)
	// 	})
	// } else {
	// 	socials.push({ platform, link })
	// }

	//TODO avatar from cloudinary

	const userInfo = {
		firstName,
		lastName,
		email,
		jobPosition,
		description,
		socials,
	}

	User.findByIdAndUpdate(user_id, userInfo)
		.then(() => res.status(200).json({ message: 'User updated.' }))
		.catch(() => res.status(404).json({ message: 'User not found.' }))
}

const favoritesHandler = (req, res, next) => {
	const { action } = req.params
	const { friend_id } = req.body
	const { _id: user_id } = req.payload.loggedUser

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
