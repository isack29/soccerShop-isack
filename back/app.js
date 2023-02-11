const express = require("express");
const app =  express();

app.use(express.json());

//Importar rutas

const productos = require("./routes/product");

//sujeto a decisión (ruta del navegador)
app.use('/api',productos);

module.exports = app;