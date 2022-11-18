const express = require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")

//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Importar rutas
const productos = require("./routes/products")
const usuarios = require("./routes/users")
const ventas = require("./routes/sells")

app.use('/api', productos)
app.use('/api', usuarios)
app.use('/api', ventas)

app.use(errorMiddleware)

module.exports=app;