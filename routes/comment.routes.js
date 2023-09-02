const router = require('express').Router()
const { verifyToken } = require('../middleware/verifyToken.middleware')
const { isOwner } = require('../middleware/route-guard')

const {
    createComment,
    getAllComments,
    editComment,
    deleteComment
} = require('../controllers/comment.controllers')

router.post('/createComment', createComment)
router.get('/getAllComments/:challenge_id', getAllComments)
router.put('/editComment/:comment_id', editComment)
router.delete('/deleteComment/:comment_id', deleteComment)

module.exports = router
