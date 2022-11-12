const mongoose = require("mongoose")

const ventasSchema = mongoose.Schema({
    date:{
        type: Date,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    statusConfirm:{
        type: Boolean,
        default: false,
        required: [true, "El estado de la compra es obligatorio"]
    },
    detalleCompra: [{
        producto:{
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
            ref: "products"
        },
        precioProducto:{
            type: Number,
            required: true,
            default: 0.0
        },
        cantidad:{
            type: Number,
            required: true,
            minLength: [1, "La cantidad minima es un producto"]
        }
    }],
    precioTotal:{
        type: Number, 
        default: 0
    }
})
module.exports=mongoose.model("ventas",ventasSchema)