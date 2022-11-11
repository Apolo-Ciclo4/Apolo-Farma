const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const product = require("../models/products");
const ErrorHandler = require("../utils/errorHandler");

//listado de productos//
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
    const productos = await product.find();
    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrado", 404))
    }
    res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    })
})

// VER PRODUCTO POR ID
exports.getProductsById = catchAsyncErrors(async (req, res, next) => {
    const producto = await product.findById(req.params.id)
    if (!producto) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    res.status(200).json({
        success: true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        producto
    })
})

//Update un producto

exports.updateProduct= catchAsyncErrors(async (req,res,next) =>{
    let producto= await product.findById(req.params.id) //Variable de tipo modificable
    if (!producto){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    
    //Si el objeto si existia, entonces si ejecuto la actualización
    producto= await product.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        producto
    })
})

//Eliminar un producto
exports.deleteProduct= catchAsyncErrors(async (req,res,next) =>{
    const producto= await product.findById(req.params.id) //Variable de tipo modificable
   
    if (!producto){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await producto.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
})

//Crear nuevo producto /api/productos
exports.newProduct=catchAsyncErrors(async(req,res,next)=>{
    //req.body.user=req.user.id;
    const producto= await product.create(req.body);
    res.status(201).json({
        success:true,
        producto
    })
})

//listado de productos por stock
exports.getProductsStock = catchAsyncErrors(async (req, res, next) => {
    const productos = await product.find({ "inventario" : { $gt: 0}});
    if (!productos) {
        return next(new ErrorHandler("No hay productos en Stock", 404))
    }
    res.status(200).json({
        success: true,
        cantidad: productos.length,       
        productos
    })
})
