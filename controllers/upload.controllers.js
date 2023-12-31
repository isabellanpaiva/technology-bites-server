const uploadImage = (req, res) => {
	if (!req.file) {
		res.status(500).json({ errorMessage: 'File load failed' })
		return
	}
	res.json({ cloudinary_url: req.file.path })
}

module.exports = {
	uploadImage,
}
