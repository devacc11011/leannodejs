const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDepth(items)
console.log(newItem)