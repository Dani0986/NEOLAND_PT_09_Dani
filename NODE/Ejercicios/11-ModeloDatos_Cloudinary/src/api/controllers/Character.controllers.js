//! traemos la funcion de borrado de imagenes por si el usuario al subir un nuevo character tiene un error que esa imagen se borre
const { deleteImgCloudinary } = require("../../middleware/files.middleware");

//!------- Nos traemos el modelo
const Character = require("../models/Character.model");

//!--------------------- POST - CREATE --------------------

const create = async (req, res, next) => {
  // guardamos la url de la imagen que se sube a cloudinary
  // los archivos (imagen) --> req.file

  let catchImg = req.file?.path;

  console.log("req body", req.body);
  console.log("req file", req.file);

  try {
    //!-----> ACTUALIZAR INDEXES
    // Los indexes de forman cuando la clave es unica
    // Es importante por si es modificado posteriormente a la creacion del controlador
    await Character.syncIndexes();

    // Creamos una nueva instancia de Character con los datos del body

    const newCharacter = new Character(req.body);

    // Comprobamos si hay imagen para añadirla al Character creado
    if (catchImg) {
      newCharacter.image = catchImg;
    } else {
      // sino trae imagen la solicitud, le ponemos al character una imagen por defecto
      newCharacter.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    //!---------- GUARDAMOS EL CHARACTER CREADO
    const saveCharacter = await newCharacter.save();

    // Comprobamos si el character se ha guardado para lanzar una respuesta
    if (saveCharacter) {
      //Si se ha guardado lanzamos una respuesta correcta con los datos del Character generados
      return res.status(200).json(saveCharacter);
    } else {
      // si no se ha guardado hay un error y lo lanzamos en la respuesta
      return res
        .status(404)
        .json("No se ha podido guaradar en la base de datos");
    }
  } catch (error) {
    //! -----> solo entramos aqui en el catch cuando ha habido un error
    /** SI HA HABIDO UN ERROR -----
     * Tenemos que borrar la imagen en cloudinary porque se sube antes de que nos metamos en
     * el controlador---> porque es un middleware que esta entre la peticion del cliente y el controlador
     */
    // comprobar si hay imagen en req.file porqe si es asi se ha subido a cloudinary y hay borrarla

    req.file?.path && deleteImgCloudinary(catchImg);
    next(error);
    return res.status(409).json("Error en el creado del Character");
  }
};

module.exports = { create };
