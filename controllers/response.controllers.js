const Response = require('../models/Response.model')

const createOneResponse = (req, res, next) => {
	const { user_id: user, userResponse: response, challenge_id: relatedChallenge } = req.body

	const responseInfo = { user, response, relatedChallenge }

	Response.create(responseInfo)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getUserResponses = (req, res, next) => {
	const { user_id } = req.params

	Response.find({ user: user_id })
		.populate('relatedChallenge')
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getUserResponsesToChallenge = (req, res, next) => {
	const { user_id: user, challenge_id: relatedChallenge } = req.params

	Response.find({ user, relatedChallenge })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getResponsesToChallenge = (req, res, next) => {
	const { challenge_id } = req.params

	Response.find({ relatedChallenge: challenge_id })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const handleResponseFav = (req, res, next) => {
	const { response_id } = req.params
	const { user_id, action } = req.body

	let updateData =
		action === 'add' ? { $addToSet: { likes: user_id } } : { $pull: { likes: user_id } }

	Response.findByIdAndUpdate(response_id, updateData)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

module.exports = {
	createOneResponse,
	getUserResponses,
	getUserResponsesToChallenge,
	getResponsesToChallenge,
	handleResponseFav,
}
