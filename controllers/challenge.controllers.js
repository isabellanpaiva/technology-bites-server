const Challenge = require('../models/Challenge.model')
const challengeJson = require('../consts/challenges.json')

const createOneChallenge = (req, res, next) => {
	const challengeInfo = ({ category } = req.body)

	Challenge.create(challengeInfo)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const createManyChallenges = (req, res, next) => {
	Challenge.insertMany(challengeJson)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const getOneChallenge = (req, res, next) => {
	const { challenge_id } = req.params

	Challenge.findById(challenge_id)
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getOneRandomChallenge = (req, res, next) => {
	Challenge.aggregate([{ $sample: { size: 1 } }])
		.then(data => res.json(data[0]))
		.catch(err => next(err))
}

const saveResponse = (req, res, next) => {
	const { challenge_id, user_id, userResponse } = req.body

	let responseData = {
		$addToSet: { responses: { user: user_id, response: userResponse } },
	}

	Challenge.findByIdAndUpdate(challenge_id, responseData)
		.then(() => res.sendStatus(200))
		.catch(err => res.send(err))
}

module.exports = {
	createOneChallenge,
	createManyChallenges,
	getOneChallenge,
	getOneRandomChallenge,
	saveResponse,
}
