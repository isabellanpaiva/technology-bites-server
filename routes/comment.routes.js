const router = require('express').Router()
const { verifyToken } = require('../middleware/verifyToken.middleware')

const {
	createComment,
	getAllComments,
	editComment,
	deleteComment,
} = require('../controllers/comment.controllers')

router.post('/createComment', verifyToken, createComment)
router.get('/getAllComments/:response_id', getAllComments)
router.post('/editComment/:comment_id', editComment)
router.delete('/deleteComment/:comment_id', deleteComment)

module.exports = router
