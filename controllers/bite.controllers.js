const Bite = require('../models/Bite.model')

const createOne = (req, res, next) => {
	const biteInfo = ({ category, definition } = req.body)

	Bite.create(biteInfo)
		.then(() => res.sendStatus(200))
		.catch(err => next(err))
}

const createMany = (req, res, next) => {
	res.send('AIUDA')
	// const { bitesJson } = req.file
	// Bite.insertMany(bitesJson)
	// 	.then(() => res.sendStatus(200))
	// 	.catch(err => next(err))
}

const getOneRandom = (req, res, next) => {
	Bite.aggregate([{ $sample: { size: 1 } }])
		.project({ category: 1, definition: 1 })
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	createOne,
	createMany,
	getOneRandom,
}
