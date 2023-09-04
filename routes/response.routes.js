const router = require('express').Router()

const {
	createOneResponse,
	getUserResponses,
	getUserResponsesToChallenge,
	getResponsesToChallenge,
	addResponseFav,
} = require('../controllers/response.controllers')

router.post('/createOneResponse', createOneResponse)
router.get('/getUserResponses/:user_id', getUserResponses)
router.get('/getUserResponsesToChallenge/:challenge_id/:user_id', getUserResponsesToChallenge)
router.get('/getResponsesToChallenge/:challenge_id', getResponsesToChallenge)
router.post('/addResponseFav/:response_id', addResponseFav)

module.exports = router
