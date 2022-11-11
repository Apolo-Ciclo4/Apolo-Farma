const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Sells = require("../models/ventas");
const ErrorHandler = require("../utils/errorHandler");
const Product = require("../models/products")

//Crear una nueva venta/agregar al carrito
//Ruta: 
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

//Ver todas mis ordenes (usuario logueado)
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const sell = await Sells.find({ user: req.user._id })
    res.status(200).json({
        success: true,
        cantidad: sell.length,
        sell
    })
})

//Ver todas las ordenes admin
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
// const sell1 = await Sells.findById(req.params.id)
exports.updateInventario = catchAsyncErrors(async (req, res, next) => {
    const statusConfirmed = await Sells.find({ "statusConfirm": { $eq: true } });

    if (!statusConfirmed) {
        return next(new ErrorHandler("La venta no está confirmada", 406))
    }

    updateStock()

    res.status(200).json({
        success: true,
    })
})


// sell.forEach(venta =>{
//     updateStock({detalleCompra: {producto: req.producto._id}}, {detalleCompra: {cantidad: req.producto.cantidad}})
// })

async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    product.inventario = product.inventario - quantity;
    await product.save({ validateBeforeSave: false })
}
