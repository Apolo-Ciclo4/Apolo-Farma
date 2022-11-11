const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese el nombre del producto. "],
        trim: true,
        maxLength: [120, "El nombre del producto no debe exceder los 120 caracteres. "]
    },
    precio: {
        type: Number,
        required: [true, "Por favor ingrese el precio del producto"],
        maxLength: [8, "El precio no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    descripcion: {
        type: String,
        required: [true, "Por favor ingrese el nombre del producto. "]
    },
    imagen: [{
        public_id: { type: String, required: false },
        url: { type: String, required: false }
    }],
    categoria: {
        type: String,
        required: [true, "Selecciona la categoria del producto"],
        enum: {
            values: [
                "Medicamentos",
                "Dermocosmeticos",
                "Salud Sexual",
                "Bebe y Maternidad",
                "Cuidado Personal"
            ]
        }

    },
    vendedor: {
        type: String,
        required: [
            true, "Ingrese el nombre del Vendedor"
        ]
    },
    inventario: {
        type: Number,
        required: [true, "Ingrese el inventario del producto"],
        maxLength: [5, "La cantidad maxima es de 99'999"],
        default: 0
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

})
module.exports = mongoose.model("products", productsSchema )