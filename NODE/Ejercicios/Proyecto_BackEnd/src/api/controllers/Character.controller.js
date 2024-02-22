//! traemos la funcion de borrado de imagenes por si el usuario al subir un nuevo character tiene un error que esa imagen se borre

const { deleteImgCloudinary } = require("../../middleware/file.middleware");
const enumOk = require("../../utils/enumOk");

//!------- Nos traemos el modelo
const Character = require("../models/Character.model");
const Comment = require("../models/Comment.model");
const Games = require("../models/Games.model");
const User = require("../models/User.model");


//!--------------------- POST - CREATE 


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


//!--------------------- GET - GET ALL 

const getAll = async (req, res, next) => {
  try {
    // Traemos todos los elementos de la coleccion
    const allCharacter = await Character.find();
    // Find nos devuelve un array con todos los elementos coincidentes

    if (allCharacter.length > 0) {
      // Si hay registros lanzamos una respuesta correcta
      return res.status(200).json(allCharacter);
    } else {
      // si no hay registros lanzamos una respuesta 404
      return res.status(404).json("No se han encontrado personajes");
    }
  } catch (error) {
    // capturtamos el error
    return res
      .status(409)
      .json({ error: "Error al buscar personajes", message: error.message });
  }
};


//!--------------------- GET - GET By ID --------------------


const getById = async (req, res, next) => {
  try {
    // Hacemos destructuring del id traido por params
    const { id } = req.params;

    // Encontramos al character que tenga ese ID
    //! POPULATE Nos permite obtener los datos de los campos populados
    const characterById = await Character.findById(id).populate("movies");

    // Comprobamos si se ha encontrado el character
    if (characterById) {
      return res.status(200).json(characterById);
    } else {
      return res.status(404).json("No se ha encontrado el character");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al buscar por Id", message: error.message });
  }
};


//!--------------------- GET - GET By NAME --------------------


const getByName = async (req, res, next) => {
  console.log(req);
  try {
    // Hacemos destructuring del name traido por params
    const { name } = req.params;

    // Buscamos al character que coincida en el name
    const charactersByName = await Character.find({ name });
    console.log(charactersByName);

    // Si la longitud del array es mayor a 0 hay character con ese name y la respuesta es 200
    if (charactersByName.length > 0) {
      return res.status(200).json(charactersByName);
    } else {
      return res.status(404).json("No se han encontrado registros");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "error durante la búsqueda", message: error.message });
  }
};


//!--------------------- PATCH - UPDATE --------------------


const update = async (req, res, next) => {
  try {
    // comprobamos si en la solicitud hay una imagen (si hay nos van a cambiar la imagen del character)
    let catchImage = req.file?.path;
    await Character.syncIndexes();

    // Traemos el ID de los params de este character a actualizar
    const { id } = req.params;

    // buscamos el character
    const characterById = await Character.findById(id);

    if (characterById) {
      // guardamos la imagen que tiene el character en base de datos
      const oldImage = characterById.image;

      // Creamos un body custom con los datos , si los hay, del body
      const bodyCustom = {
        _id: characterById._id,
        image: req.file?.path ? catchImage : oldImage,
        name: req.body?.name ? req.body?.name : characterById.name,
      };

      // comprobamos si recibimos por el body el genero
      if (req.body?.gender) {
        // Si lo recibimos llamamos a la función de utils que valida el genero
        const resultEnumOk = enumOk(req.body?.gender);
        bodyCustom.gender = resultEnumOk.check
          ? req.body?.gender
          : characterById.gender;
      }

      try {
        // busque por id el Character y lo actualize con el customBody
        await Character.findByIdAndUpdate(id, bodyCustom);

        // Miramos si han actualizado la imagen por si esto es asi, borrar la antigua
        if (req.file?.path) {
          // Si la imagen antigua es diferente a la que ponemos por defecto la borramos
          oldImage !==
            "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
            deleteImgCloudinary(oldImage);
        }

        //** TESTEAMOS EN TIEMPO REAL QUE ESTO SE HAYA REALIZADO CORRECTAMENTE */
    

        // Buscamos el elemento character YA actualizado mediante el id
        const characterByIdUpdate = await Character.findById(id);

        // Cogemos el req.body y le sacamos las CLAVES para saber que elementos han actualizado
        const elementUpdate = Object.keys(req.body);

        // Creamos un objeto vacío donde vamos a meter este test
        let test = {};

        // Recorremos las claves del body y rellenamos el objeto test

        elementUpdate.forEach((item) => {
          // Compruebo el valor de las claves del body con los valores del character actualizado
          if (req.body[item] === characterByIdUpdate[item]) {
            test[item] = true;
          } else {
            test[item] = false;
          }
        });

        // Comprobamos que la imagen del caracter Actualizado coincide con la imagen nueva si la hay
        // Si coinciden creamos una copia de test con una nueva clave que será file en true y sino estará en false
        if (catchImage) {
          characterByIdUpdate.image === catchImage
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }

        //** Comprobamos que ninguna clave del test este en false, si hay alguna lanzamos un 409 porque alguna
        //**  clave no se ha actualizado de forma correcta , si estan todas en true lanzamos un 200 que esta todo correcto*/

        let acc = 0;

        for (const key in test) {
          // si esto es false añadimos uno al contador
          test[key] === false && acc++;
        }

        // si acc es mayor que 0 lanzamos error porque hay alguna clave en false y eso es que no se ha actualizado

        if (acc > 0) {
          return res.status(409).json({ dataTest: test, update: false });
        } else {
          return res
            .status(200)
            .json({ dataTest: test, update: characterByIdUpdate });
        }
      } catch (error) {
        return res.status(409).json({
          error: "No se ha podidio actualizar",
          message: error.message,
        });
      }
    } else {
      // si el character con ese id no existe
      return res.status(404).json("El character no ha sido encontrado");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "No se ha podidio actualizar", message: error.message });
  }
};


//!--------------------- DELETE --------------------


// Borramos el character cuyo ID traemos por params --> 
//! INCONISTENCIA --> borrar el registro de este id en los campos donde aparece
//! en este caso aparece en ele array de characters en movie

const deleteCharacter = async (req, res, next) => {
  try {
    // cogemos el id de los params
    const { id } = req.params;
    // buscamos el character

    const character = await Character.findById(id);

    if (character) {
      // si el character existe lo eliminamos
      await Character.findByIdAndDelete(id);

      const findCharacter = await Character.findById(id);

      if (!findCharacter) {
        character.image !==
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
          deleteImgCloudinary(character.image);

        try {
          // Actualizar movies que en su campo de characters tengan el id de este character borrado
          await Games.updateMany(
            { characters: id },
            { $pull: { characters: id } }
          );

          // Actualizamos los users que hayan dado a me gusta al character
          await User.updateMany(
            { charactersFav: id },
            { $pull: { charactersFav: id } }
          );

          try {
            // Borrar comentarios que van dirigidos al character
            await Comment.deleteMany({ recipientCharacter: id });

            // Recorremos el array de comments del character y por cada comentario debemos actualizar al user creador del comentario
            // y borrar de su array de postedComments el id de este comentario

            // Como recorremos y hay asincornia hacemos un promise
            Promise.all(
              character.comments.map(async (comment) => {
                // Por cada comentario actualizo al user creador del comentario
                await User.updateOne(
                  { postedComments: comment },
                  { $pull: { postedComments: comment } }
                );
              })
            ).then(async () => {
              return res.status(200).json("Character borrado");
            });
          } catch (error) {
            // error borrar comentarios
            return res.status(409).json({
              error: "Error al borrar los comentarios",
              message: error.message,
            });
          }
        } catch (error) {
          // error al actualizar modelos
          return res.status(409).json({
            error: "Error al actualizar el User y el Character",
            message: error.message,
          });
        }
      } else {
        // no se ha borrado
        return res.status(409).json({
          error: "Error al borrar el character",
          message: "Character no borrado",
        });
      }
    } else {
      // Error no existe el character
      return res.status(409).json({
        error: "Error al encontrar el character",
        message: "El character no existe",
      });
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error al borrar el character",
      message: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  getByName,
  update,
  deleteCharacter,
};
