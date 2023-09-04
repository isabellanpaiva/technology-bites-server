const router = require('express').Router()

const {
	createOneChallenge,
	createManyChallenges,
	getOneChallenge,
	getOneRandomChallenge,
	getChallengeResponses,
	saveResponse,
} = require('../controllers/challenge.controllers')

router.post('/createOneChallenge', createOneChallenge)
router.post('/createManyChallenges', createManyChallenges)
router.get('/getOneChallenge/:challenge_id', getOneChallenge)
router.get('/getOneRandomChallenge', getOneRandomChallenge)
router.post('/saveResponse/:challenge_id', saveResponse)
router.get('/getChallengeResponses/:challenge_id', getChallengeResponses)

module.exports = router
