const Bite = require('../models/Bite.model')
const bitesJson = require('../consts/bites.json')

const createOneBite = (req, res, next) => {
	const biteInfo = ({ category, definition } = req.body)
	Bite.create(biteInfo)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const createManyBites = (req, res, next) => {
	Bite.insertMany(bitesJson)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const getOneRandomBite = (req, res, next) => {
	Bite.aggregate([{ $sample: { size: 1 } }])
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createOneBite,
	createManyBites,
	getOneRandomBite,
}
