const User = require("../models/users")
const errorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto");
const ErrorHandler = require("../utils/errorHandler");

//Regitrar un nuevo usuario /api/users/new
//Ruta: localhost:4000/api/users/new
exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {
    const { nombre, email, password, celular, departamento, ciudad, direccion } = req.body;
    const user = await User.create({
        nombre,
        email,
        password,
        celular,
        departamento,
        ciudad,
        direccion
    })
    tokenEnviado(user, 201, res)
})
/*JSON PARA CREAR UN USUARIO NUEVO:
{
    "nombre": " Carlos Perez",
    "email": "perez@gmail.com",
    "password": "123456789",	
    "photoPerfil": [{
        "public_id": "123456789sertyu",
        "url" : "https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318008_960_720.png"
       }],
    "role": "admin",
    "celular": "3105675256",
    "departamento": "boyaca",
    "ciudad": "belen",
    "direccion": "calle 8#6-28"	
}
*/


//Iniciar Sesion - Login
//Ruta: localhost:4000/api/user/login
//Se debe enviar el user y la pass
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const { email, password} =  req.body;

    //revisar si los campos estan completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & Contraseña", 400))
    }

    //Buscar al usuario en nuestra base de datos
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }

    //Comparar contraseñas, verificar si está bien
    const contrasenaOK= await user.compararPass(password);

    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña invalida",401))
    }

    tokenEnviado(user,200,res)

})

//Cerrar Sesion (logout)
//Ruta: localhost:4000/api/user/logout
exports.logOut = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Cerró sesión"
    })
})

//Olvide mi contraseña, recuperar contraseña
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new errorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken = user.genResetPasswordToken();

    await user.save({ validateBeforeSave: false })

    //Crear una url para hacer el reset de la contraseña
    const resetUrl = `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

    const mensaje = `Hola!\n\nTu link para ajustar una nueva contraseña es el 
    siguiente: \n\n${resetUrl}\n\n
    Si no solicitaste este link, por favor comunicate con soporte.\n\n Att:\n Apolo-Farma`

    try {
        await sendEmail({
            email: user.email,
            subject: "Apolo-Farma Recuperación de la contraseña",
            mensaje
        })
        res.status(200).json({
            success: true,
            message: `Correo enviado a: ${user.email}`
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new errorHandler(error.message, 500))
    }
})

//Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //Hash el token que llego con la URl
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscamos al usuario al que le vamos a resetear la contraseña
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })
    //El usuario si esta en la base de datos?
    if (!user) {
        return next(new errorHandler("El token es invalido o ya expiró", 400))
    }
    //Diligenciamos bien los campos?
    if (req.body.password !== req.body.confirmPassword) {
        return next(new errorHandler("Contraseñas no coinciden", 400))
    }

    //Setear la nueva contraseña
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    tokenEnviado(user, 200, res)
})

//ver datos de usuario estando logueado
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})
//Update Contraseña (usuario logueado)
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    //Revisamos si la contraseña vieja es igual a la nueva
    const sonIguales = await user.compararPass(req.body.oldPassword)

    if (!sonIguales) {
        return next(new errorHandler("La contraseña actual no es correcta", 401))
    }

    user.password = req.body.newPassword;
    await user.save();
    tokenEnviado(user, 200, res)
})

//Update perfil de usuario (logueado)
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    //Actualizar el email por user a decisiòn de cada uno
    const newUserData = {
        nombre: req.body.nombre,
        email: req.body.email
    }

    //updata Avatar: pendiente

    //Actualizar datos estando logueado

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        user
    })
})

//Ver todos los usuarios
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})
//Eliminar usuario (admin)
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new errorHandler(`Usuario con id: ${req.params.id} 
        no se encuentra en nuestra base de datos`))
    }

    await user.remove();

    res.status(200).json({
        success: true,
        message: "Usuario eliminado correctamente"
    })
})
