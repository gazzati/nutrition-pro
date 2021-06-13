const express = require('express')
const User = require('../model/User')
const router = express.Router()

router.post('/register', async (req, res) => {

    const user = await User.find({ email: req.body.email })
    if (user.length) return res.send({ message: 'Email already exist', error: true })

    const newUser = new User(req.body)

    await newUser.save()

    res.status(200).send({
        message: 'Registration success!',
        data: newUser
    })
})

router.post('/login', async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.send({ message: 'Email not found', error: true })

    if (req.body.password !== user.password) return res.send({ message: 'Password is not correct', error: true })

    res.status(200).send({
        message: 'Login success!',
        data: user
    })
})

module.exports = router
