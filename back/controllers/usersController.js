const User = require("../models/users")
const errorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

//Regitrar un nuevo usuario /api/users/new
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password,role,celular,departamento,ciudad,direccion} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        },
        role,
        celular,
        departamento,
        ciudad,
        direccion
    })
    tokenEnviado(user,201,res)
})