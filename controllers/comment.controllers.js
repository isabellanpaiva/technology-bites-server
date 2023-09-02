const Comment = require('../models/Comment.model')
const Challenge = require('../models/Challenge.model')

const createComment = (req, res, next) => {

	const { user_id, commentContent, challenge_id } = req.body

	const commentData = {
		owner: user_id,
		content: commentContent,
		relatedChallenge: challenge_id
	}

	Comment
		.create(commentData)
		.then(newComment => res.json(newComment))
		.catch(err => next(err))
}

const getAllComments = (req, res, next) => {

	const { challenge_id } = req.params

	Comment
		.find({ relatedChallenge: challenge_id })
		.then(response => res.json(response))
		.catch(err => next(err))

}

const editComment = (req, res, next) => {

	const { comment_id } = req.params

	const { content } = req.body

	Comment
		.findByIdAndUpdate(comment_id, { content })
		.then(() => res.sendStatus(204))
		.catch(err => next(err))

}

const deleteComment = (req, res, next) => {

	const { comment_id } = req.params

	Comment
		.findByIdAndDelete(comment_id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err))

}

module.exports = {
	createComment,
	getAllComments,
	editComment,
	deleteComment
}
