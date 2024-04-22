const express = require('express')
const router = express.Router()
let { people } = require('../data')
const { getPeople, postPeople } = require('../contollers/people')
// router.get('/', getPeople)

// router.post('/', postPeople)
router.route('/')
    .get(getPeople)
    .post(postPeople)

router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({
                success: false,
                msg: 'please provide name'
            })
    }
    res.status(201).send({
        success: true,
        data: [...people, name]
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({
                success: false,
                data: `no person with id ${req.params.id}`
            })
    }
})

module.exports = router