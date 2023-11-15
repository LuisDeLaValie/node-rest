const express= require('express');
const TemasController = require('./controllers/TemasControllers');
const AutoresController = require('./controllers/autoresControllers');
const EditorialesController = require('./controllers/editorialesControllers ');
const LibrosController = require('./controllers/librosControllers');
const app = express();
//Definimos el puerto 80
const puerto = 80;


app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(' Prueba 2 hola mundo pasos 123456789 ');
});

app.get('/temas', TemasController.indexGet);
app.get('/autores', AutoresController.indexGet);
app.get('/libros', LibrosController.indexGet);
app.get('/editorial', EditorialesController.indexGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");

});