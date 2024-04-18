// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         // "x-content-type-options": 'text/html'
//         'Content-Type': 'text/html'
//     })
//     res.write('<h1>home</h1>')
//     res.end()
//     console.log('user hit the server');
// })



// server.listen(5000)

const express = require('express')
const app = express()
const path = require('path')


app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     // console.log('user hit the resource');
//     // res.send('Home Page')
//     console.log(__dirname);
//     // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('/about', (req, res) => {
    console.log('user hit the resource');
    res.send('Home Page')
})


app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found</h1>')

})

app.listen(5000, () => {
    console.log('server listen port 5000');
})