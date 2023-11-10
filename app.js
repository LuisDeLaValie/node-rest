

// Importar las dependencias
const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar el middleware body-parser
// app.use(bodyParser.json());

// Definir las rutas de la aplicación
app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

// Iniciar la aplicación
app.listen(3000, () => {
  console.log('Aplicación iniciada en el puerto 3000');
});