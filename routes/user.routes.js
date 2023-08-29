const router = require('express').Router()

const {
	getOneUser,
	deleteUser,
	editUser,
	favoritesHandler,
} = require('../controllers/user.controllers')

router.get('/getOne/:user_id', getOneUser)
router.delete('/delete/:user_id', deleteUser)
router.put('/edit/:user_id', editUser)
router.post('/favorite/:action', favoritesHandler)

module.exports = router
