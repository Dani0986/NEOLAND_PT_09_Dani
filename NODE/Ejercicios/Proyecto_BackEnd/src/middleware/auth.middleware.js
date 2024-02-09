// es un midleware que su funcion es comprobar que la persona que entra a las rutas autenticadas
// este autorizado oara hacerlo.
// el etodo que utiliza para ello es un token que lo genera la libreria json web token


//! Importaciones

// nos traemos el model de user para buscar al usuario que hace la solicitud mediante el id que trae el token -> decodificacion

const user = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");

const dotenv = require("dotenv");
dotenv.config();

//! esta funcion es para ver si estas autenticado (TOKEN VALIDO)

const isAuth = async (req, res, next) => {
    // tenemos que quedarnos con el token que viene en el encabezado de la solicitud
    // hay que quitar el la palabra bearer que viene donde el token

    //remplazamos bearer y ponemos un string vacio ""
    const token = req.headers?.replace("Bearer ", "");
    console.log("Cabeceras", req.headers.authorization);

    // comprobamos si hay un token y sino lanzamos un error

    if (!token) {
        return next(new Error("No autorizado"));
    }

    try {
        // si hay token le pedimos que nos de la info con la que se creo (id, email)
        // Hay que decodificar usando una libreria

        const decoded = verifyToken(token, process.env.JWT_SECRET);

        console.log("decoded", decoded);

        // creamos el req.user con todos los datos del usuario -> en la solicitud tenemo los datos del user

        req.user = await User.findByID(decoded.id);

        // como no hemos puesto return le decimos que continue
        next();
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Problemas con el token", message: error.message});
    }
};

//! vamos a crear otra autorizacion solo para admin, sino eres admin no tienes permiso

const isAuthAdmin = async (req, res, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    // comprobamos si hay token y sino lanzamos un error
    if (!token) {
        return next(new Error("No autorizado"));
    }

    try {
        const decoded = verifyToken(token, process.env.JWT_SECRET);

        console.log("decoded", decoded);

        // creamos el req.user con todos los datos del usuario -> en la solicitud tenemos los datos del user

        req.user = await User.findById(decoded.id);

        //comprobamos que el rol sea admin
        if(req.user.rol !== "admin") {
            return next(new Error("No autorizado, no eres admin"));
        } else {
            next();
        }
        //next -> se puede poner fuera del else
        //si eres admin continuamos
    } catch (error) {
        return res
        .status(409)
        .json({ error: "Problema con el token", message: error.message})
    }
};

module.exports = { isAuth, isAuthAdmin };