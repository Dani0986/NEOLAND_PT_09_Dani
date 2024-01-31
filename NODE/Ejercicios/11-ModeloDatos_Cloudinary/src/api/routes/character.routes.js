//!-------- nos traemos UPLOAD (función de multer para subida de ficheros)

const { upload } = require("../../middleware/files.middleware");

//!-------- IMPORTAMOS LOS CONTROLADORES

const { create } = require("../controllers/Character.controllers");

//!--------- CREAMOS UN ROUTER ESPECIFICO PARA CHARACTER --- al llamarlo disponemos de todas las rutas ---> será llamado en el index

const express = require("express");

const CharacterRouter = express.Router();

//!--------- AÑADIMOS NUESTRAS RUTAS

// En medio de la ruta y del controlador (funión create)
// Se encuentra el middleware de subida de ficheros a cloudinary
// multer tiene el metodo SINGLE para subir una sola imagen
//* por el req.file va a recibir una clave que se llama image y con esa
//  * clave quiero que el midddleware upload me lo suba a cloudinary para este disponible cuando entre
//  * al controlador mediante la req.file.path ===> esto es igual a la URL de la imagen en cloudinary
CharacterRouter.post("/create", upload.single("image"), create);

module.exports = CharacterRouter;
