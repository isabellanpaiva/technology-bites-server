const router = require('express').Router()

const {
	createOneChallenge,
	getOneChallenge,
	getOneRandomChallenge,
	getChallengeResponses,
	saveResponse,
	getDailyChallenge,
} = require('../controllers/challenge.controllers')

router.post('/createOneChallenge', createOneChallenge)
router.get('/getOneChallenge/:challenge_id', getOneChallenge)
router.get('/getOneRandomChallenge', getOneRandomChallenge)
router.post('/saveResponse/:challenge_id', saveResponse)
router.get('/getChallengeResponses/:challenge_id', getChallengeResponses)
router.get('/getDailyChallenge', getDailyChallenge)

module.exports = router
