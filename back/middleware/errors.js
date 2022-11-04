const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        success: false,
        message: err.stack
    })
    //error de clave duplicada ene mongoose
    if (err.code === 11000) {
        const message = `Clave duplicada ${Object.keys(err.keyValue)}`
        error = new ErrorHandler(message, 400)
    }
    //error jwt token
    if (err.name === "JsonWebTokenError") {
        const message = "Token de jsonweb es invalido, intentelo de nuevo"
        error = new ErrorHandler(message, 400)
    }
    //error jwt token expiado
    if (err.name === "TokenExpiredError") {
        const message = "El token ha expirado. Genere un nuevo"
        error = new ErrorHandler(message, 400)
    }
}
