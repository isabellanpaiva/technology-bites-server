const Challenge = require('../models/Challenge.model')
const challengeJson = require('../consts/challenges.json')

const getRandomUsingDate = require('../utils/getRandomUsingDate')

const createOneChallenge = (req, res, next) => {
	const challengeInfo = ({ category } = req.body)

	Challenge.create(challengeInfo)
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

const getDailyChallenge = (req, res, next) => {
	let challengesCount
	Challenge.count()
		.then(response => {
			challengesCount = response
			const randomValue = getRandomUsingDate()
			return Challenge.findOne().skip(randomValue % challengesCount)
		})
		.then(reponse => res.json(reponse))
		.catch(err => next(err))
}

const getChallengeResponses = (req, res, next) => {
	const { challenge_id } = req.params

	Challenge.findById(challenge_id)
		.then(({ responses }) => res.json(responses))
		.catch(err => next(err))
}

const saveResponse = (req, res, next) => {
	const { challenge_id } = req.params
	const { response_id } = req.body

	Challenge.findByIdAndUpdate(challenge_id, { $push: { responses: response_id } })
		.then(() => res.sendStatus(204))
		.catch(err => next(err))
}

module.exports = {
	createOneChallenge,
	getOneChallenge,
	getOneRandomChallenge,
	getChallengeResponses,
	getDailyChallenge,
	saveResponse,
}
