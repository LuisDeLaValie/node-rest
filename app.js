const http = require('http');


const port = 80;


const servidor = http.createServer(function (req, res) {
    res.statusCode = 500;

    res.setHeader("content-type", 'text/plain');

    res.end("hola mundo");
});


servidor.listen(port, function () {
    console.log("Servidor corriendo en el http://localhost");
});