import express from 'express';
import { engine } from 'express-handlebars';

import { services } from './data/services.data.js';
import path from 'path'


const app = express();

const _dirname = import.meta.dirname;

//ejemplos
//console.log(_dirname + "/views/layouts/../main.hbs")
//console.log(path.join(dir_name, "/views/layouts/../partials/footer.hbs"))

// public directory 
app.use(express.static('public'))

app.use('/css', express.static(path.join('node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join('node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join('node_modules/jquery/dist')))

//handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(_dirname, './views'));

app.get('/', (req, res) => {
    res.render('home', { tittle: "Home Page 2.0" });
});

app.get('/services', (req, res) => {
    res.render('services', { services: services });
});

app.get('/services/:name', (req, res) => {

    const nameURL = req.params.name

    //Como buscar algo de un array? respuesta: find (/services/qa)

    const service = services.find((item) => item.url === `/services/${nameURL}`)


    //undefined

    if (!service) {
        return res.render('404', { title: "No se encuentra el servicio" })


    }

    return res.render('service', { service })
})


//404 para cualquier otra ruta
app.get('*', (req, res) => {
    return res.status(404).render('404', { title: 'Lo siento, la página que buscas no existe.' });
});


app.listen(5000, () => console.log(`Servidor encendido http://localhost:${5000}`))

