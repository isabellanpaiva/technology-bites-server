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

const getOneRandom = (req, res, next) => {
	Challenge.aggregate([{ $sample: { size: 1 } }])
		.project({ category: 1 })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createOne,
	createMany,
	getOneRandom,
}
