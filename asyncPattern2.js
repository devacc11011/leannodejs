const { readFile, writeFile } = require('fs')

const first = readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(first, second);

        const option = { flag: 'a' }
        writeFile('./content/result-async.txt',
            `Here is the result ${first}, ${second}`, option, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            })
    })
})