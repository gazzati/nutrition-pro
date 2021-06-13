const express = require('express')
const User = require('../model/User')
const Vacancy = require('../model/Vacancy')
const router = express.Router()

router.get('/', async (req, res) => {
    let vacancies = []

    const allVacancies = await Vacancy.find()
    if(!allVacancies) return res.send({message: 'Vacancies not found'})

    for(let i = 0; i < allVacancies.length; i++) {
        const user = await User.findById(allVacancies[i].userId)
        vacancies.push({...allVacancies[i]._doc, user})
    }

    res.status(200).send({
        message: 'OK',
        data: vacancies
    })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const baseVacancy = await Vacancy.findById(id)
    if(!baseVacancy) return res.send({message: 'Vacancy not found'})

    const user = await User.findById(baseVacancy.userId)

    const vacancy = {
        ...baseVacancy._doc,
        user
    }

    res.status(200).send({
        message: 'OK',
        data: vacancy
    })
})

router.post('/', async (req, res) => {
    const vacancy = new Vacancy(req.body)

    vacancy.save()

    try {
        await vacancy.save()

        res.status(200).json({
            message: 'Vacancy was created',
            data: vacancy
        })
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router
