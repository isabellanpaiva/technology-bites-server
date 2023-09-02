const Challenge = require('../models/Challenge.model')
const challengeJson = require('../consts/challenges.json')

const createOne = (req, res, next) => {
	const challengeInfo = ({ category } = req.body)

	Challenge.create(challengeInfo)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const createMany = (req, res, next) => {
	Challenge.insertMany(challengeJson)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const getOne = (req, res, next) => {
	const { challenge_id } = req.body

	Challenge.findById('64f1b94a89fd18e578e69df0')
		.project({ category: 1, question: 1, responses: 1 })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const getOneRandom = (req, res, next) => {
	Challenge.aggregate([{ $sample: { size: 1 } }])
		.project({ category: 1, question: 1, responses: 1 })
		.then(response => res.json(response))
		.catch(err => next(err))
}

const saveResponse = (req, res, next) => {
	const { challenge_id, user_id, userResponse } = req.body
	console.log(req.body)
	let responseData = {
		responses: { $push: [{ user: user_id }, { response: userResponse }] },
	}

	Challenge
		.findByIdAndUpdate(challenge_id, responseData)
		.then(() => res.sendStatus(200))
		.catch(err => res.send(err))
}

module.exports = {
	createOne,
	createMany,
	getOne,
	getOneRandom,
	saveResponse,
}
