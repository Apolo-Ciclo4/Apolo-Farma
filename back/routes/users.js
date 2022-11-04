const express=require("express")
const router=express.Router();
const { registroUsuario } = require("../controllers/usersController");

router.route('/user/new').post(registroUsuario);
module.exports = router;