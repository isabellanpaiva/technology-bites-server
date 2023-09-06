const Dojo = require('../models/Dojo.model')

const getDojoCategories = (req, res, next) => {
	Dojo.find()
		.distinct('category')
		.then(data => res.json(data))
		.catch(err => next(err))
}

const getDojoQuestions = (req, res, next) => {
	const { category } = req.params

	Dojo.aggregate([{ $match: { category: category } }, { $sample: { size: 3 } }])
		.then(response => res.json(response))
		.catch(err => next(err))
}

module.exports = {
	getDojoCategories,
	getDojoQuestions,
}
