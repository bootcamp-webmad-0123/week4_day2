const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    const studentInfo = {
        name: 'Yadmina Moreno',
        campus: 'Madrid',
        bootcamp: 'Web dev',
        subjects: ['HTML', 'CSS', 'JS', 'Node', 'React'],
        confirmed: true,
        debt: 400,
        address: {
            street: 'Paseo de la Chopera, 14, <em>Matadero</em>',
            postalcode: 8764,
            city: 'Madrid'
        },
        teacher: undefined
    }

    res.render('index-page', studentInfo)
})

app.listen(5005, () => console.log('Servidor levantado en puerto 5005'))