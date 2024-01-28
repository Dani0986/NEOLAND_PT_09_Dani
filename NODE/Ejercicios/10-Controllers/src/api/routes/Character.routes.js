

// nos traemos UPLOAD - funcion multer para subir ficheros

const { upload } = require("../../middleware/file.middleware");

// importar controladores

const {
    create,
    getAll,
    getById,
    getByName,
    update,
    deleteCharacter,
    } = require("../controllers/Character.controller");


// creamos un router especifico para Character 
// al llamarlo disponemos de rutas -> sera llamado en el index

const express = require("express");

const CharacterRouter = express.Router();

// añadimos rutas

// en emedio de la ruta y el contolador usamos (fduncion create)
// se encuentra el middleware de subida y ficheros a cloudinary
// multer tiene el metodo SINGLE para suboir una sola imagen.

CharacterRouter.post("/create", upload.single("image"), create);
CharacterRouter.get("/getAll/", getAll);
CharacterRouter.get("/getById/:id", getById);
CharacterRouter.get("/getByName/:name", getByName);
CharacterRouter.patch("/update/:id", upload.single("image"), update);
CharacterRouter.delete("/delete/:id", deleteCharacter);

module.exports = CharacterRouter;

// por el req.file va a recibir una clave que se llama image y con esa
// clave quiero que el midddleware upload me lo suba a cloudinary para este disponible cuando entre
// al controlador mediante la req.file.path ===> esto es igual a la URL de la imagen en cloudinary

