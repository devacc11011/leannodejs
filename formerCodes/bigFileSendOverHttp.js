let http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    // console.time()
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)
    // res.end('')
    // console.timeEnd()

    //
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (er) => {
        res.end(er)
    })
})
    .listen(19999)