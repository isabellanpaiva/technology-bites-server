const router = require('express').Router()

const uploaderMiddleware = require('../middleware/uploader.middleware')
const { uploadImage } = require('../controllers/upload.controllers')

router.post('/image', uploaderMiddleware.single('imageData'), uploadImage)

module.exports = router
