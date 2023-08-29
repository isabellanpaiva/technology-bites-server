const isOwner = (req, res, next) => {
	const { user_id: owner } = req.params
	const { _id } = req.payload
	if (user_id === _id) {
		next()
	} else {
		res.sendStatus(403)
	}
}

const checkRoles =
	(...admittedRoles) =>
	(req, res, next) => {
		const { role } = req.payload

		if (admittedRoles.includes(role)) {
			next()
		} else {
			res.sendStatus(403)
		}
	}

module.exports = {
	isOwner,
	checkRoles,
}
