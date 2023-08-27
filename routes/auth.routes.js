const router = require('express').Router()

const User = require('../models/User.model')

const bcrypt = require('bcryptjs')
const saltRounds = 10

router.get('/hi', (req, res) => {
    res.json('HOLITA')
})

router.post('/signup', (req, res, next) => {
    const { firstName, lastName, email, password, } = req.body

    // if (password.length < 2) {
    //     res.status(400).json({ message: 'Password must have at least 3 characters' })
    //     return
    // }

    User.findOne({ email })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'User already exists.' })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ firstName, lastName, email, password: hashedPassword })
        })
        .then(() => res.sendStatus(201).json({ message: 'party!' }))
        .catch(err => next(err))
})


//coaster: Já! pensabas que ibas a encontrar algo no?

module.exports = router