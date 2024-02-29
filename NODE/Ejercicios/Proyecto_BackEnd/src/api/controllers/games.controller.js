const Character = require("../models/Character.model");
const Comment = require("../models/Comment.model");
const Game = require("../models/Games.model");
const User = require("../models/User.model");
const { deleteImgCloudinary } = require("../../middleware/file.middleware");

//!--------------------- POST - CREATE 
/*
const createGame = async (req, res, next) => {
  console.log(req.body);
  try {
    await Game.syncIndexes();

    // Creamos nueva instancia de Movie
    const newGame = new Game(req.body);

    // Guardamos ese registro en la db
    const saveGame = await newGame.save();

    // Si existe es que ha guardado de forma correcta --> 200
    if (saveGame) {
      return res.status(200).json(saveGame);
    } else {
      // Sino existe es que no se ha guardado --> 409
      return res.status(409).json("No se ha podido crear game");
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error en la creación de nuevo game",
      message: error.message,
    });
  }
};*/
const createGame = async (req, res, next) => {
  // guardamos la url de la imagen que se sube a cloudinary
  // los archivos (imagen) --> req.file

  let catchImg = req.file?.path;

  console.log("req body", req.body);
  console.log("req file", req.file);

  try {
    //!-----> ACTUALIZAR INDEXES
    // Los indexes de forman cuando la clave es unica
    // Es importante por si es modificado posteriormente a la creacion del controlador
    await Game.syncIndexes();

    // Creamos una nueva instancia de Character con los datos del body

    const newGame = new Game(req.body);

    // Comprobamos si hay imagen para añadirla al Character creado
    if (catchImg) {
      newGame.image = catchImg;
    } else {
      // sino trae imagen la solicitud, le ponemos al character una imagen por defecto
      newGame.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    //!---------- GUARDAMOS EL CHARACTER CREADO
    const saveGame = await newGame.save();

    // Comprobamos si el character se ha guardado para lanzar una respuesta
    if (saveGame) {
      //Si se ha guardado lanzamos una respuesta correcta con los datos del Character generados
      return res.status(200).json(saveGame);
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
    return res.status(409).json("Error en el creado de Game");
  }
};


//!--------------------- PATCH - TOGGLE 


const toggleCharacters = async (req, res, next) => {
  try {
    // cogemos el id de los params
    const { id } = req.params;

    // Recogemos los characters del body
    const { characters } = req.body; // --> esto devuelve un array de id "12343432,72369469367"
    console.log("characters", characters);

    // Buscamos los games a actualizar por el id

    const gameById = await Game.findById(id);

    // Comprobamos si esta Games existe en la db y sino lanzamos un 404
    if (gameById) {
      // Cogemos lo traido por req.body y lo convertimos en array .split(",") --> js
      // Separando las posiciones del string

      // Separamos por comas y convertimos en array
      const arrayCharacters = characters.split(",") // -> ["12343432","72369469367"]

      console.log("array Characters", arrayCharacters);

      // Recorremos el array de characters que son Id para comprobar si estan en el game (sacarlos) o sino estan (meterlos)

      // Lo metemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas
      Promise.all(
        arrayCharacters.map(async (character) => {
          console.log("character", character);
          if (gameById.characters.includes(character)) {
            // Si lo incluye hay que quitarlo ( character al array de characters de Games)
            //** LO QUITAMOS PORQUE LO INCLUYE */
            try {
              // buscamos el game que queremos actualizar
              await Game.findByIdAndUpdate(id, {
                // quitamos el character del array de characters
                $pull: { characters: character },
              });

              try {
                // Buscamos el character y le quitamos a Games
                await Character.findByIdAndUpdate(character, {
                  $pull: { Games: id },
                });
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el character, quitarle el game",
                  message: error.message,
                });
              }
            } catch (error) {
              return res.status(409).json({
                error: "Error al actualizar el game, quitarle el character",
                message: error.message,
              });
            }
          } else {
            // Sino lo incluye lo añadimos ( character al array de characters de games)
            //** LO AÑADIMOS */
            try {
              // actualizamos game añadiendole el character
              await Game.findByIdAndUpdate(id, {
                $push: { characters: character },
              });

              try {
                // Actualizamos nuestro character metiendo en el campo de Games en el game

                await Character.findByIdAndUpdate(character, {
                  $push: { Games: id },
                });
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el character, añadirle el game",
                  message: error.message,
                });
              }
            } catch (error) {
              return res.status(409).json({
                error: "Error al actualizar la movie, al añadirle el character",
                message: error.message,
              });
            }
          }
        })
      ).then(async () => {
        return res
          .status(200)
          .json(await Game.findById(id).populate("characters"));
      });
    } else {
      // Lanzamos un 404 porque no existe games a actualizar
      return res.status(404).json("games no encontrada, prueba con otro id");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al actualizar games", message: error.message });
  }
};

//!------------------------ DELETE 

const deleteGame = async (req, res, next) => {
  try {
    // traemos el id de gamese a borrar mediante destructuring de req.params
    const { id } = req.params;

    // Buscamogames por id para ver si existe
    const gameId = await Game.findById(id);

    if (gameId) {
      // Procedemos a borrarla

      await Game.findByIdAndDelete(id);

      // Volvemos a buscar el game para ver si se ha borrado de forma correcta

      const existGame = await Game.findById(id);

      //Si  existGame no existe es correcto el borrado y procedemos a actualizar registros de datos

      if (!existGame) {
        // Hacemos actualizaciones
        try {
          // actualizamos Users los que tengan en su campo de gamesFav el id de este game borrado
          await User.updateMany(
            { gamesFav: id },
            { $pull: { gamesFav: id } }
          );

          // Actualizamos characters que tengan en su array de games el id de este game borrado
          await Character.updateMany({ Games: id }, { $pull: { Games: id } });

          try {
            // Borramos los comentarios que tengan en el campo de recipientGame este id
            await Comment.deleteMany({ recipientGames: id });

            // Debemos recorrer el array de comentarios de Games y por cada uno actualizar a su user creador
            // actualizando borrando de su array de postedComments el id de este comentario

            Promise.all(
              gameId.comments.map(async (comment) => {
                // Por cada comentario tengo que actualizar al dueño de este comentario
                // borrando de su campo de postedComments este id del comentario

                await User.updateOne(
                  { postedComments: comment },
                  { $pull: { postedComments: comment } }
                );
              })
            ).then(async () => {
              return res.status(200).json("Game y comentarios borrados");
            });
          } catch (error) {
            // Error en el borrado de comentarios
            return res.status(409).json({
              error: "Error al borrar los comentario de games",
              message: error.message,
            });
          }
        } catch (error) {
          // Error en la actualizacion de registros
          return res.status(409).json({
            error: "Error al actualizar los registros",
            message: error.message,
          });
        }
      } else {
        // Error al borrarse el game
        return res.status(409).json({
          error: "Error al borrarse el game",
          message: "Intentelo de nuevo",
        });
      }
    } else {
      // Error el game no existe
      return res.status(404).json({
        error: "Error al buscar el game",
        message: "El game no existe",
      });
    }
  } catch (error) {
    // Error general al borrar el game
    return res.status(409).json({
      error: "Error general al borral el game",
      message: error.message,
    });
  }
};

//!--------------------- GET - GET ALL 

const getAll = async (req, res, next) => {
  try {
    // Traemos todos los elementos de la coleccion
    const allGames = await Game.find();
    // Find nos devuelve un array con todos los elementos coincidentes

    if (allGames.length > 0) {
      // Si hay registros lanzamos una respuesta correcta
      return res.status(200).json(allGames);
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
    const gamesById = await Game.findById(id).populate("");

    // Comprobamos si se ha encontrado el character
    if (gamesById) {
      return res.status(200).json(gamesById);
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
    const gameByName = await Game.find({ name });
    console.log(gameByName);

    // Si la longitud del array es mayor a 0 hay character con ese name y la respuesta es 200
    if (gameByName.length > 0) {
      return res.status(200).json(gameByName);
    } else {
      return res.status(404).json("No se han encontrado registros");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "error durante la búsqueda", message: error.message });
  }
};



module.exports = { createGame, toggleCharacters, deleteGame, getAll, getById, getByName,  };
