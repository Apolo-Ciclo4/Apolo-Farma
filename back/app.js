const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const path = require('path')

///Seteamos archivo de configuracion
if (process.env.NODE_ENV !== "PRODUCTION") require('dotenv').config({ path: 'back/config/config.env' })

//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Importar rutas
const productos = require("./routes/products")
const usuarios = require("./routes/users")
const ventas = require("./routes/sells")

app.use('/api', productos)
app.use('/api', usuarios)
app.use('/api', ventas)


if(process.env.NODE_ENV === "PRODUCTION"){
    app.use(express.static(path.join(__dirname,'../front/build')))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname,'../front/build/index.html'))
    })
}


app.use(errorMiddleware)

module.exports = app;