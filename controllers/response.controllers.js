const Response = require('../models/Response.model')

const createOneResponse = (req, res, next) => {
	const { user_id, userResponse, challenge_id } = req.body

	const responseInfo = { user: user_id, response: userResponse, relatedChallenge: challenge_id }

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
	const { user_id, challenge_id } = req.params

	Response.find({ user: user_id, relatedChallenge: challenge_id })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getResponsesToChallenge = (req, res, next) => {
	const { challenge_id } = req.params

	Response.find({ relatedChallenge: challenge_id })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createOneResponse,
	getUserResponses,
	getUserResponsesToChallenge,
	getResponsesToChallenge,
}
