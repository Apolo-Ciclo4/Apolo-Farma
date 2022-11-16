const express=require("express")
const router=express.Router();
const { registroUsuario, loginUser, logOut, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile, getAllUsers, deleteUser } = require("../controllers/usersController");
const { isAuthenticatedUser } = require("../middleware/users");

router.route('/user/new').post(registroUsuario);
router.route('/login').post(loginUser)
router.route('/user/logout').get(logOut)
router.route('/user/forgotpassword').post(forgotPassword)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/profile').get( isAuthenticatedUser, getUserProfile)
router.route('/user/updatepassword').put( isAuthenticatedUser, updatePassword)

//administrador rutas
router.route('/admon/updateprofile').put( isAuthenticatedUser, updateProfile)
router.route('/admon/viewusers').get(isAuthenticatedUser, getAllUsers)
router.route('/admon/deleteuser/:id').delete(isAuthenticatedUser,deleteUser)




module.exports = router;