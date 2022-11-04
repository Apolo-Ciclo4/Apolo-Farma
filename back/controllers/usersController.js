const User = require("../models/users")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const tokenEnviado = require("../utils/jwtToken")
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

//Regitrar un nuevo usuario /api/users/new
exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {
    const { nombre, email, password,role,celular,departamento,ciudad,direccion} = req.body;
    const user = await User.create({
        nombre,
        email,
        password,
        photoPerfil: {
            public_id: "user6318008960720",
            url: "https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_960_720.png"
        },
        role,
        celular,
        departamento,
        ciudad,
        direccion
    })

    const token = user.getJwtToken();

    tokenEnviado(user, 201, res)
    res.status(201).json({
        success: true,
        token,
        user
    })
})