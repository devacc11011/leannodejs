const { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).send({ success: true, date: people })
}

const postPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide name' })
    }
    res.status(201).send({ success: true, person: name });
}
module.exports = { getPeople, postPeople }