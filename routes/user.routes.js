const router = require('express').Router()

const { verifyToken } = require('../middleware/verifyToken.middleware')
const { isOwner } = require('../middleware/route-guard')

const {
	getOneUser,
	deleteUser,
	editUser,
	favoritesHandler,
} = require('../controllers/user.controllers')

router.get('/getOne/:user_id', verifyToken, getOneUser)
router.delete('/delete/:user_id', verifyToken, isOwner, deleteUser)
router.put('/edit/:user_id', verifyToken, isOwner, editUser)
router.post('/favorite/:action', verifyToken, favoritesHandler)

module.exports = router
