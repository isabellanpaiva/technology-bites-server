const router = require('express').Router()
const { generateResponse } = require('../controllers/openaiAPI.controllers')

router.post('/generateResponse', generateResponse)

module.exports = router
