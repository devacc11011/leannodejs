const express = require('express')
const app = express()

let { people } = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/api/people', (req, res) => {
    res.status(200).send({ success: true })
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Post')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})