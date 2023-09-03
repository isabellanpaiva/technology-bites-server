const router = require('express').Router()

const {
	createOneChallenge,
	createManyChallenges,
	getOneChallenge,
	getOneRandomChallenge,
	saveResponse,
} = require('../controllers/challenge.controllers')

router.post('/createOneChallenge', createOneChallenge)
router.post('/createManyChallenges', createManyChallenges)
router.get('/getOneChallenge/:challenge_id', getOneChallenge)
router.get('/getOneRandomChallenge', getOneRandomChallenge)
router.put('/saveResponse', saveResponse)

module.exports = router
