const express= require('express');
var bodyParser = require('body-parser');

const TemasController = require('./controllers/TemasControllers');
const AutoresController = require('./controllers/autoresControllers');
const EditorialesController = require('./controllers/editorialesControllers ');
const LibrosController = require('./controllers/librosControllers');
const app = express();
//Definimos el puerto 80
const puerto = 80;

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(' Prueba 2 hola mundo pasos 123456789 ');
});

app.get('/temas', TemasController.indexGet);
app.post('/temas', TemasController.agregar);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);

app.get('/libros', LibrosController.indexGet);
app.post('/libros', LibrosController.agregar);

app.get('/autores', AutoresController.indexGet);
app.get('/editorial', EditorialesController.indexGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");

});