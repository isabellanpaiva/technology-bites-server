const Dojo = require('../models/Dojo.model')

const getDojoCategories = (req, res, next) => {

	Dojo
		.distinct('category')
		.then(response => res.json(response))
		.catch(err => next(err))

}

const getDojoQuestions = (req, res, next) => {

	const { category } = req.params

	Dojo

		.aggregate([{ $match: { category: category } }, { $sample: { size: 5 } }])
		.then(response => res.json(response))
		.catch(err => next(err))

}

module.exports = {
	getDojoCategories,
	getDojoQuestions,
}
