const Dojo = require('../models/Dojo.model')

const getDojoCategories = (req, res, next) => {

	Dojo
		.find()
		.select({ category: 1 })
		.then(data => res.json(data))
		.catch(err => next(err))

}

const getDojoQuestions = (req, res, next) => {

	const { category } = req.params

	Dojo
		.aggregate([
			{ $match: { category: category } },
			{ $sample: { size: 10 } }
		])
		.then(data => res.json(data))
		.catch(err => next(err))
}

module.exports = {
	getDojoCategories,
	getDojoQuestions,
}
