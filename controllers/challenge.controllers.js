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

const getDailyChallenge = (req, res, next) => {
	let challengesCount
	Challenge.count()
		.then(response => {
			challengesCount = response
			const currentTimestamp = Math.floor(Date.now() / 1000)
			let unixTimeInDays = Math.floor(currentTimestamp / (24 * 60 * 60))
			const randomSeed = 726236523627
			return Challenge.findOne().skip((unixTimeInDays * randomSeed) % challengesCount)
		})
		.then(reponse => {
			res.json(reponse)
		})
		.catch(err => {
			console.log(err)
			next(err)
		})
}

const getChallengeResponses = (req, res, next) => {
	console.log(req.params)
	const { challenge_id } = req.params

	Challenge.findById(challenge_id)
		.then(challenge => res.json(challenge.responses))
		.catch(err => next(err))
}

const saveResponse = (req, res, next) => {
	const { challenge_id } = req.params
	const { response_id } = req.body
	console.log(response_id)
	Challenge.findByIdAndUpdate(challenge_id, { $push: { responses: response_id } })
		.then(() => res.sendStatus(204))
		.catch(err => next(err))
}

module.exports = {
	createOneChallenge,
	createManyChallenges,
	getOneChallenge,
	getOneRandomChallenge,
	getChallengeResponses,
	getDailyChallenge,
	saveResponse,
}
