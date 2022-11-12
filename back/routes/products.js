const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductsById, updateProduct, deleteProduct, getProductsStock} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/users");

//Probemos autenticación
router.route('/productos').get(getProducts);  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Creación de un producto nuevo
router.route('/producto/:id').get(getProductsById); //Ruta para consultar por id
router.route('/producto/:id').put(updateProduct);//Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct); //Creacion de la ruta de eliminacion por id
router.route('/admon/inventario').get(isAuthenticatedUser, getProductsStock)
 

module.exports=router;