const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))
router.use('/challenge', require('./challenge.routes'))
router.use('/upload', require('./upload.routes'))
router.use('/bite', require('./bite.routes'))
router.use('/comment', require('./comment.routes'))
router.use('/response', require('./response.routes'))

module.exports = router
