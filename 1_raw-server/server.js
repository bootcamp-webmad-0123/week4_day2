const http = require('http')

const server = http.createServer((req, res) => {

    console.log('HE DETECTADO UNA PETICIÓN...', req.url)

    if (req.url === '/') {
        res.write('<h1>ESTAMOS EN INCIO</h1>')
    }
    else if (req.url === '/nosotros') {
        res.write('<h1>ESTAMOS EN NOSOTROS</h1>')
    }
    else if (req.url === '/contacto') {
        res.write('<h1>ESTAMOS EN CONTACTO</h1>')
    }
    else {
        res.write('<h1>LA PÁGINA NO EXISTE</h1>')
    }

    res.end()

})

server.listen(5005, () => console.log('SERVIDOR LEVANTADO EN EL PUERTO 5005'))