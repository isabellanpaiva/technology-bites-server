module.exports = app => {
	app.use((req, res, next) => {
		res.status(404).json({ message: 'This route does not exist' })
	})

	app.use((err, req, res, next) => {
		if (err.code && err.code === 11000) {
			res.status(409).json({
				errorMessages: ['This information already exists.'],
			})
		}

		if (err.name === 'ValidationError') {
			let errorMessages = Object.values(err.errors).map(el => el.message)
			res.status(400).json({ errorMessages })
		}

		if (!res.headersSent) {
			res.status(500).json({ errorMessages: ['Server error.'] })
		}
	})
}
