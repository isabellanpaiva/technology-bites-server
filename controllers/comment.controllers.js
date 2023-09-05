const Comment = require('../models/Comment.model')

const createComment = (req, res, next) => {
	const { commentInfo } = req.body

	Comment.create(commentInfo)
		.then(newComment => res.json(newComment))
		.catch(err => next(err))
}

const getAllComments = (req, res, next) => {
	const { response_id } = req.params

	Comment.find({ relatedChallenge: response_id })
		.sort({ createdAt: -1 })
		.populate('owner')
		.then(response => res.json(response))
		.catch(err => next(err))
}

const editComment = (req, res, next) => {
	const { comment_id } = req.params
	const { commentContent } = req.body

	Comment.findByIdAndUpdate(comment_id, { content: commentContent })
		.then(() => res.sendStatus(204))
		.catch(err => next(err))
}

const deleteComment = (req, res, next) => {
	const { comment_id } = req.params

	Comment.findByIdAndDelete(comment_id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err))
}

module.exports = {
	createComment,
	getAllComments,
	editComment,
	deleteComment,
}
