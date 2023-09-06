const router = require('express').Router()

const { verifyToken } = require('../middleware/verifyToken.middleware')
const { isOwner } = require('../middleware/route-guard')

const {
	getOneUser,
	getAllUsers,
	deleteUser,
	editUser,
	updateFollowers,
	getCompletedChallenges,
} = require('../controllers/user.controllers')

router.get('/getOneUser/:user_id', verifyToken, getOneUser)
router.get('/getAllUsers/:filter', verifyToken, getAllUsers)
router.delete('/deleteUser/:user_id', verifyToken, isOwner, deleteUser)
router.put('/editUser/:user_id', verifyToken, isOwner, editUser)
router.post('/updateFollowers/:action', verifyToken, updateFollowers)
router.get('/getCompletedChallenges/:user_id', getCompletedChallenges)

module.exports = router
