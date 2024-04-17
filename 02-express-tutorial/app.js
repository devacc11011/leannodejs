const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        // "x-content-type-options": 'text/html'
        'Content-Type': 'text/html'
    })
    res.write('<h1>home</h1>')
    res.end()
    console.log('user hit the server');
})



server.listen(5000)