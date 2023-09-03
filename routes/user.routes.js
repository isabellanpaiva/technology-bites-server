const router = require('express').Router()

const { verifyToken } = require('../middleware/verifyToken.middleware')
const { isOwner } = require('../middleware/route-guard')

const {
	getOneUser,
	getAllUsers,
	deleteUser,
	editUser,
	favoritesHandler,
	getCompletedChallenges,
} = require('../controllers/user.controllers')

router.get('/getOneUser/:user_id', verifyToken, getOneUser)
router.get('/getAllUsers', verifyToken, getAllUsers)
router.delete('/deleteUser/:user_id', verifyToken, isOwner, deleteUser)
router.put('/editUser/:user_id', verifyToken, isOwner, editUser)
router.post('/favorite/:action', verifyToken, favoritesHandler)
router.get('/getCompletedChallenges/:user_id', getCompletedChallenges)

module.exports = router
