const express = require('express')
const app = express()
const loggerImported = require('./logger')

function logger(req, res, next) {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
}
function testing(req, res, next) {
    console.log('test2');
    next()
}
const chain = [logger, testing]
app.get('/', loggerImported, (req, res) => {
    console.log('call get');
    res.send('Home')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})