const verifyauthBD = (req, res, next) => {
	let authPassword = process.env.BD_AUTH
	let password = getAuthFromHeaders(req)

	if (authPassword === password) {
		next()
	} else {
		res.status(403).json({ errorMessages: ['Unauthorized, incorrect password'] })
	}
}

function getAuthFromHeaders(req) {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Basic') {
		const password = req.headers.authorization.split(' ')[1]
		return password
	}
	return null
}

module.exports = { verifyauthBD }
