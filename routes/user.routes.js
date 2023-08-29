const router = require('express').Router()

const { verifyToken } = require('../middleware/verifyToken.middleware')

const {
	getOneUser,
	deleteUser,
	editUser,
	favoritesHandler,
} = require('../controllers/user.controllers')

router.get('/getOne/:user_id', getOneUser)
router.delete('/delete/:user_id', deleteUser)
router.put('/edit/:user_id', editUser)
router.post('/favorite/:action', verifyToken, favoritesHandler)

module.exports = router
