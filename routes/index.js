const router = require('express').Router()

const authRoutes = require('./auth.routes')
router.use('/auth', authRoutes)

const userRoutes = require('./user.routes')
router.use('/user', userRoutes)

const challengeRoutes = require('./challenge.routes')
router.use('/card', challengeRoutes)

const uploadRoutes = require('./upload.routes')
router.use('/upload', uploadRoutes)

module.exports = router
