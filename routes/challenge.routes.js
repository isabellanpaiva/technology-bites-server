const router = require('express').Router()
const { verifyauthBD } = require('../middleware/verifyAuthBD.middleware')

const {
	createOne,
	createMany,
	getOne,
	getOneRandom,
	saveResponse,
} = require('../controllers/challenge.controllers')

router.post('/createOne', verifyauthBD, createOne)
router.post('/createMany', verifyauthBD, createMany)
router.put('/getOne', getOne)
router.get('/getOneRandom', getOneRandom)
router.put('/saveResponse', saveResponse)

module.exports = router
