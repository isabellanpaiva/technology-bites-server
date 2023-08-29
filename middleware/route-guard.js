const isLoggedIn = (req, res, next) => {
	if (req.payload) {
		next()
	} else {
		res.redirect('/auth/login?err=Login to access')
	}
}

const checkRoles =
	(...admittedRoles) =>
	(req, res, next) => {
		const { role } = req.session.currentUser

		if (admittedRoles.includes(role)) {
			next()
		} else {
			res.redirect('/login?err=You are not authorized')
		}
	}

module.exports = {
	isLoggedIn,
	checkRoles,
}
