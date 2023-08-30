const isOwner = (req, res, next) => {
	const { user_id: owner_id } = req.params
	const { _id: loggedUser_id } = req.payload

	if (owner_id === loggedUser_id) {
		next()
	} else {
		res.sendStatus(403).json({ message: 'Unauthorized, you are not the owner' })
	}
}

const checkRoles =
	(...admittedRoles) =>
	(req, res, next) => {
		const { role } = req.payload

		if (admittedRoles.includes(role)) {
			next()
		} else {
			res.sendStatus(403).json({
				message: 'You have not authorization to perform this action',
			})
		}
	}

module.exports = {
	isOwner,
	checkRoles,
}
