const openai = require('../config/openaiConfig')

const generateResponse = (req, res, next) => {
	const { user_response, question } = req.body
	openai.chat.completions
		.create({
			messages: [
				{
					role: 'system',
					content:
						'Provide feedback for the user response in a short and constructive way, technology related context',
				},
				{ role: 'system', content: question },
				{ role: 'user', content: user_response },
			],
			model: 'gpt-3.5-turbo',
		})
		.then(completion => res.json(completion.choices[0].message.content))
		.catch(err => next(err))
}

module.exports = { generateResponse }
