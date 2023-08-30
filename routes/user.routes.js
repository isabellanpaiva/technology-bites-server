const router = require('express').Router()

const { verifyToken } = require('../middleware/verifyToken.middleware')

const {
	getOneUser,
	deleteUser,
	editUser,
	favoritesHandler,
} = require('../controllers/user.controllers')

router.get('/getOne/:user_id', verifyToken, getOneUser)
router.delete('/delete/:user_id', verifyToken, deleteUser)
router.put('/edit/:user_id', verifyToken, editUser)
router.post('/favorite/:action', verifyToken, favoritesHandler)

module.exports = router