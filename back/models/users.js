const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const usersSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Ingrese el nombre"],
        maxLength: [50, "No puede exceder los 50 caracteres"]
    },
    email: {
        type: String,
        required: [true, "Ingrese el Correo Electronico"],
        unique: true,
        validate: [validator.isEmail, "Ingrese un correo electronico valido"]
    },
    password: {
        type: String,
        required: [true, "Ingrese la Contraseña "],
        minLength: [8, "tu contraseña debe contener minimo 8 caracteres"],
        select: false
    },
    photoPerfil: [{
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    }],
    role: {
        type: String,
        required: [true, "Seleccione el Rol de Usuario"],
        enum: {
            values: [
                "user",
                "admin"
            ]
        }
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    celular: {
        type: String,
        required: [true, "Ingrese su número de celular"],
        maxLength: [10, "El número celular debe contener 10 dígitos"]
    },
    departamento: {
        type: String,
        required: [true, "Ingrese su departamento"]
    },
    ciudad: {
        type: String,
        required: [true, "Ingrese su ciudad"]
    },
    direccion: {
        type: String,
        required: [true, "Ingrese su dirección"]
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date 
})

//Encriptamos contraseña antes de guardarla
usersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//Decodificados contraseñas y comparamos
usersSchema.methods.compararPass = async function (passDada){
    return await bcrypt.compare(passDada, this.password)
}

//Retornar un JWT token
usersSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRACION
    })
}

//Generar un token para reset de contraseña
usersSchema.methods.genResetPasswordToken = function () {
    const resetToken= crypto.randomBytes(20).toString('hex')

    //Hashear y setear resetToken
    this.resetPasswordToken= crypto.createHash("sha256").update(resetToken).digest('hex')

    //Setear fecha de expiracion del token
    this.resetPasswordExpire= Date.now() + 30*60*1000 //el token dura solo 30 min

    return resetToken
}
module.exports = mongoose.model("users", usersSchema)