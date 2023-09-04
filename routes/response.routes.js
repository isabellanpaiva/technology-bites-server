const router = require('express').Router()

const {
	createOneResponse,
	getUserResponses,
	getUserResponsesToChallenge,
	getResponsesToChallenge,
} = require('../controllers/response.controllers')

router.post('/createOneResponse', createOneResponse)
router.get('/getUserResponses/:user_id', getUserResponses)
router.get('/getUserResponsesToChallenge/:challenge_id/:user_id', getUserResponsesToChallenge)
router.get('/getResponsesToChallenge/:challenge_id', getResponsesToChallenge)

module.exports = router
