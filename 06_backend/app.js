/*
    MODULO QUE IMPLEMENTA LA CONFIGURACION DE EXPRESS:
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*/

'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de RUTAS

//MIDDLEWARES: metodo que se ejecuta antes que la capa del controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Esto convierte todo lo que llegue a la url a formato JSON

//CORS

// RUTAS
app.get('/',(req, res) => {
    res.status(200).send(
       "<h1>HOME</h1>"
    );
});

app.get('/test',(req, res) => {
    res.status(200).send({
        message: "Test superado"
    });
});


// EXPORTAR 
module.exports = app;