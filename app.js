import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';

dotenv.config();

////////////////////Workaround to solve the __dirname is not defined////////////////////
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
//console.log('directory-name 👉️', __dirname);

// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
//console.log(path.join(__dirname, '/public', 'index.html'));
////////////////////Workaround to solve the __dirname is not defined////////////////////


const app = express()
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');
const port = process.env.PORT;

app.use('/', express.static('public'));


//este contenido se sirve para el home '/'
app.get('/',(re, res) =>{
    res.render('home', {
        nombre:'Bily Gomez',
        titulo:'Curso de node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre:'Bily Gomez',
        titulo:'Curso de node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre:'Bily Gomez',
        titulo:'Curso de node'
    });
});

app.get('*', function (req, res) {
    res.sendFile( path.join(__dirname, '/public', '404.html'));
});

app.listen(port, () =>{
    console.log(`port listening on: ${port}`);
});