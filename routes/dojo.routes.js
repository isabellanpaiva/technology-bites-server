const router = require('express').Router()

const {
	getDojoCategories,
	getDojoQuestions
} = require('../controllers/dojo.controllers')

router.get('/getDojoCategories', getDojoCategories)

router.get('/getDojoQuestions/:category', getDojoQuestions)

module.exports = router