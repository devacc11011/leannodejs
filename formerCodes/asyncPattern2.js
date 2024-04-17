const { readFile, writeFile } = require('fs').promises
// const util = require('util')
const getText = readFile
// const getText = util.promisify(readFile)
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, result) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

getText('./content/first.txt', 'utf8')
    .then((result) => {
        console.log(result);
    })
    .catch((err) => console.log(err))