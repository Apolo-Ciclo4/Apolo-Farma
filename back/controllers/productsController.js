const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const product = require("../models/products");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary=require("cloudinary")

//listado de productos//
//Ruta: localhost:4000/api/productos
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
//Ruta: localhost:4000/api/producto/poner-aca-el-id-del-producto
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
//Ruta: localhost:4000/api/producto/poner-aca-el-id-del-producto (es un put)
exports.updateProduct= catchAsyncErrors(async (req,res,next) =>{
    
    let producto= await product.findById(req.params.id) //Variable de tipo modificable

    if (!producto){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    
    let imagen=[]

    if (typeof req.body.imagen=="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }
    if (imagen!== undefined){
        //eliminar imagenes asociadas con el product
        for (let i=0; i<producto.imagen.lenght; i++){
            const result= await cloudinary.v2.uploader.destroy(producto.images[i].public_id)
        }

        let imageLinks=[]
        for (let i=0; i<imagen.lenght; i++){
            const result=await cloudinary.v2.uploader.upload(imagen[i],{
                folder:"products"
            });
            imageLinks.push({
                public_id:result.public_id,
                url: result.secure_url
            })
        }
        req.body.imagen=imageLinks
    }

    //Si el objeto si existia, entonces si ejecuto la actualización
    console.log("req.params ",req.params.id)
    console.log("req body", req.body)
    producto= await product.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    
    // if(res.status!==200){
    //     console.log("error al actualizar", error) 
    // }

    //Respondo Ok si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        producto
    })
})

//Eliminar un producto
//Ruta: localhost:4000/api/producto/poner-aca-el-id-del-producto (es un delete)
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
//Ruta: localhost:4000/api//producto/nuevo
exports.newProduct=catchAsyncErrors(async(req,res,next)=>{
    let imagen=[]
    if(typeof req.body.imagen==="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }

    let imagenLink=[]

    for (let i=0; i<imagen.length;i++){
        const result = await cloudinary.v2.uploader.upload(imagen[i],{
            folder:"products"
        })
        imagenLink.push({
            public_id:result.public_id,
            url: result.secure_url
        })
    }
    req.body.imagen=imagenLink
    
    const producto= await product.create(req.body);
    
    res.status(201).json({
        success:true,
        producto
    })
})
//JSON PARA CREAR UN PRODUCTO NUEVO:
/*{
            
    "nombre": "Crema Hidratante",
    "precio": 55555,
    "descripcion": "Crema hidratante para el cuidado de la piel",
    "imagen": [
        {
            "public_id": "productos/dsvbpny402gelwugv2le",
            "url": "../images/dermocuidado/40772-1-AGUA-TERMAL-AVENE-FCO-X-150ML.jpg",
            "_id": "636327306b1c1b38401d5cea"
        }
    ],
    "categoria": "Dermocosmeticos",
    "vendedor": "Lizeth Vega",
    "inventario": 1            
}*/


//listado de productos por stock
//Ruta: localhost:4000/api/admon/inventario 
//importante: se debe estar logueado para poder ver el producto
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

exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {

    const products = await product.find()

    res.status(200).json({
        products
    })

})
