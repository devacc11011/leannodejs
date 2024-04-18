const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    // res.json(products)
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProduucts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image };
    })
    res.json(newProduucts)
})
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params
    console.log(req);
    console.log(req.params);
    const findProduct = products.find((product) => product.id === Number(productId))
    if (!findProduct) {
        res.status(404).send()
        return
    }
    res.json(findProduct)
})
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
})
app.get('/api/v1/query', (req, res) => {
    console.log('--------------------------------------------------------------');
    console.log(req.query);
    console.log('--------------------------------------------------------------');
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search))
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        res.status(200).json({ sucess: true, data: sortedProducts })
        return
    }
    res.status(200).json(sortedProducts)
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})