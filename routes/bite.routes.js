const router = require('express').Router()
const { createOne, createMany, getOneRandom } = require('../controllers/bite.controllers')
const Bite = require('../models/Bite.model')
const bitesJson = require('./../consts/bites.json')

router.post('/createOne', createOne)
router.post('/createMany', createMany)
router.get('/getOneRandom', getOneRandom)

module.exports = router
