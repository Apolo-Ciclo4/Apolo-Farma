const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Sells = require("../models/ventas");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/products")

//Crear una nueva venta/agregar al carrito
//Ruta: localhost:4000/api/sell/addCart
exports.newSell = catchAsyncErrors(async (req, res, next) => {
    const { detalleCompra, precioTotal } = req.body;

    const sell = await Sells.create({
        detalleCompra,
        precioTotal,
        date: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success: true,
        sell
    })
})
/*JSON para añadir al carrito:
{
    "detalleCompra":{
        "producto": "636d76ab6a30c14828836e32",
        "precioProducto": 20000,
        "cantidad": 1
    },
    "precioTotal": 20000
}
*/

//Ver todas mis ordenes (usuario logueado)
//Ver el valor total de la compra
//Ruta: localhost:4000/api/sell/mysells'
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const sell = await Sells.find({ user: req.user._id })
    res.status(200).json({
        success: true,
        cantidad: sell.length,
        sell
    })
})

//Ver todas las ordenes admin
//Ruta: localhost:4000/api/sell/allSells
exports.allSells = catchAsyncErrors(async (req, res, next) => {
    const sell = await Sells.find()

    let totalCompra = 0;
    sell.forEach(venta => {
        totalCompra = totalCompra + venta.precioTotal
    })

    res.status(200).json({
        success: true,
        cantidad: sell.length,
        totalCompra,
        sell
    })
})

//Confirmar la compra
//Ruta: localhost:4000/api/sell/confirmSell/:id en :id se debe enviar el id de la compra que se desea confirmar
exports.confirmSell = catchAsyncErrors(async (req, res, next) => {
    const sell = await Sells.findById(req.params.id)

    if (!sell) {
        return next(new ErrorHandler("Venta no encontrada", 404))
    }

    sell.statusConfirm = req.body.statusConfirm;
    await sell.save()

    res.status(200).json({
        success: true,
        sell
    })
})

//Actualizar stock luego de confirmar la compra
//Ruta: localhost:4000/api/sell/updateStock
exports.updateInventario = catchAsyncErrors(async (req, res, next) => {
    const statusConfirmed = await Sells.find({ "statusConfirm": { $eq: true } });

    if (!statusConfirmed) {
        return next(new ErrorHandler("La venta no está confirmada", 406))
    }

    updateStock(req.body.id, req.body.cantidad);

    res.status(200).json({
        success: true,
    })
})


/*Funcion para actualizar stock*/
async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    product.inventario = product.inventario - quantity;
    await product.save({ validateBeforeSave: false })
}
