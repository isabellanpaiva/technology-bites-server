const router = require('express').Router()
const User = require('../models/User.model')

router.get('/getOne/:user_id', (req, res, next) => {
	const { user_id } = req.params

	User.findById(user_id)
		.then(response => res.json(response))
		.catch(() => res.status(404).json({ message: 'User not found' }))
})

router.delete('/delete/:user_id', (req, res, next) => {
	const { user_id } = req.params

	User.findByIdAndDelete(user_id)
		.then(() => res.status(200).json({ message: 'User deleted.' }))
		.catch(() => res.status(404).json({ message: 'User not found.' }))
})

router.put('/edit/:user_id', (req, res, next) => {
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
})

//TODO router para añadir amigos
router.post('/favorite/:action', (req, res, next) => {
	const { _id: user_id } = req.session.currentUser
	const { recipe_uri } = req.body
	const { action } = req.params
	const recipe_id = recipe_uri.split('_')[1]

	recipesApi.getOneRecipe(recipe_id).then(response => {
		let { recipe } = response.data
		const calories = Math.round(recipe.calories / recipe.yield)

		let updateData

		if (action === 'add') {
			updateData = { $push: { friends: friend_id } }
		} else if (action === 'remove') {
			updateData = { $pull: { friends: friend_id } }
		}

		User.findByIdAndUpdate(user_id, updateData)
			.then(() => {
				res.status()
			})
			.catch(err => next(err))
	})
})

module.exports = router
