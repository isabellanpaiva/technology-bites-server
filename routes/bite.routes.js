const router = require('express').Router()
const { createOne, createMany, getOneRandom } = require('../controllers/bite.controllers')
const { verifyauthBD } = require('../middleware/verifyAuthBD.middleware')

router.post('/createOne', verifyauthBD, createOne)
router.post('/createMany', verifyauthBD, createMany)
router.get('/getOneRandom', getOneRandom)

module.exports = router
