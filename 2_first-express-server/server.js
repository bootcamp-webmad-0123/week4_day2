const exp = require('constants')
const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index-page.html`)
})

app.get('/popino-gallery', (req, res) => {
    res.sendFile(`${__dirname}/views/popino-page.html`)
})

app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN PUERTO 5005'))