const router = require('express').Router()

const { createOneBite, getOneRandomBite } = require('../controllers/bite.controllers')

router.post('/createOneBite', createOneBite)
router.get('/getOneRandomBite', getOneRandomBite)

module.exports = router
