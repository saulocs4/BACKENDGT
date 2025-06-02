const express = require('express');
const cartRoute = require('./src/routes/cartRoute')
const client = require('./db.js')

const port = 3000;
const app = express();

app.use(express.json())

app.get('/',  (req, res) => {
    res.send('Hello wolrd')
})

app.get('/boas-vindas',  (req, res) => {
    res.send('Seja bem-vindo')
})

app.use('/carrinho', cartRoute)

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`);
})