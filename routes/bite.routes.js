const router = require('express').Router()

const {
	createOneBite,
	createManyBites,
	getOneRandomBite,
} = require('../controllers/bite.controllers')

router.post('/createOneBite', createOneBite)
router.post('/createManyBites', createManyBites)
router.get('/getOneRandomBite', getOneRandomBite)

module.exports = router
