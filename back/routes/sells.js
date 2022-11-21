const express=require("express");
const { newSell, allSells, myOrders, confirmSell, updateInventario, deleteSell } = require("../controllers/ventasController");
const router=express.Router();
const { isAuthenticatedUser } = require("../middleware/users");

router.route('/sell/addCart').post(isAuthenticatedUser, newSell)
router.route('/sell/allSells').get(isAuthenticatedUser, allSells)
router.route('/sell/mysells').get(isAuthenticatedUser, myOrders)
router.route('/sell/confirmSell/:id').put(isAuthenticatedUser, confirmSell)
router.route('/sell/updateStock').put(isAuthenticatedUser, updateInventario)
router.route('/sell/deleteSell/:id').delete(isAuthenticatedUser, deleteSell)

module.exports=router;