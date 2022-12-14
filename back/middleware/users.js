const User = require("../models/users")
const jwt = require("jsonwebtoken")
const ErrorHandler = require ("../utils/errorHandler")
const catchAsyncErrors = require ("../middleware/catchAsyncErrors")

//Verificamossi estamos autenticados, existencia y vericidad token
exports.isAuthenticatedUser = catchAsyncErrors(async(req, res, next) => {
    const {token} = req.cookies
    if(!token){
        return next(new ErrorHandler("Debe iniciar sesión para acceder a este recurso", 401))
    }else{
        const decodificada = jwt.decode(token,process.env.JWT_SECRET)
        req.user = await User.findById(decodificada.id);
        next()
    }
})

//capturamos role 
exports.authorizeRoles= (...roles) =>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Rol (${req.user.role}) no esta autorizado a entrar a esta area`,403))
        }
        next()
    }
}