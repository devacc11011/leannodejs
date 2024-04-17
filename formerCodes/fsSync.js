const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);


const option = {
    flag: 'a'
}
writeFileSync('./content/result-sync.txt',
    `Here is the result ${first}, ${second}`, option
)