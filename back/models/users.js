const mongoose = require("mongoose")
const validator = require("validator")


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
    }
})
module.exports = mongoose.model("users", usersSchema)