const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello')
    }
    if (req.url === '/about') {
        res.end('about page')
    }
    res.end('deault')

})


server.listen(38080)