
const Character = require("../models/Character.model");
const Games = require("../models/Games.model");
const User = require("../models/User.model");


//!--------------------- POST - CREATE --------------------


const createGames = async (req, res, next) => {
    console.log(req.body);
    try {
      await Games.syncIndexes();
  
      // Creamos nueva instancia de Games
      const newGame = new Games(req.body);
  
      // Guardamos ese registro en la db
      const saveGame = await newGame.save();
  
      // Si existe es que ha guardado de forma correcta --> 200
      if (saveGame) {
        return res.status(200).json(saveGame);
      } else {
        // Sino existe es que no se ha guardado --> 409
        return res.status(409).json("No se ha podido crear el Game");
      }
    } catch (error) {
      return res.status(409).json({
        error: "Error en la creación de nuevo Game",
        message: error.message,
      });
    }
  };
  

  //!--------------------- PATCH - TOGGLE --------------------

  
  const toggleCharacters = async (req, res, next) => {
    try {
      // cogemos el id de los params
      const { id } = req.params;
  
      // Recogemos los characters del body
      const { characters } = req.body; // --> esto devuelve un array de id ["12343432", "72369469367"]
      console.log("characters", characters);
  
      // Buscamos el Game a actualizar por el id
  
      const GamesById = await Games.findById(id);
  
      // Comprobamos si este Game existe en la db y sino lanzamos un 404
      if (GamesById) {
        // Cogemos lo traido por req.body y lo convertimos en array .split(",") --> js
        // Separando las posiciones del string
  
        // Separamos por comas y convertimos en array
        const arrayCharacters = characters.split(",");
  
        console.log("array characters", arrayCharacters);
  
        // Recorremos el array de characters que son Id para comprobar si estan en el Game (sacarlos) o sino estan (meterlos)
  
        // Lo metemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas
        Promise.all(
          arrayCharacters.map(async (character) => {
            console.log("character", character);
            if (GamesById.characters.includes(character)) {
              // Si lo incluye hay que quitarlo ( character al array de characters de games)
              //** LO QUITAMOS PORQUE LO INCLUYE */
              try {
                // buscamos el Game que queremos actualizar
                await Games.findByIdAndUpdate(id, {
                  // quitamos el character del array de characters
                  $pull: { characters: character },
                });
  
                try {
                  // Buscamos el character y le quitamos el Game
                  await Character.findByIdAndUpdate(character, {
                    $pull: { Games: id },
                  });
                } catch (error) {
                  return res.status(409).json({
                    error: "Error al actualizar el character, quitarle el Game",
                    message: error.message,
                  });
                }
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el Game, quitarle el character",
                  message: error.message,
                });
              }
            } else {
              // Sino lo incluye lo añadimos ( character al array de characters de games)
              //** LO AÑADIMOS */
              try {
                // actualizamos el game añadiendole el character
                await Games.findByIdAndUpdate(id, {
                  $push: { characters: character },
                });
  
                try {
                  // Actualizamos nuestro character metiendo en el campo de games el game
  
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
                  error: "Error al actualizar el game, al añadirle el character",
                  message: error.message,
                });
              }
            }
          })
        ).then(async () => {
          return res
            .status(200)
            .json(await Games.findById(id).populate("characters"));
        });
      } else {
        // Lanzamos un 404 porque no existe el game a actualizar
        return res.status(404).json("game no encontrado, prueba con otro id");
      }
    } catch (error) {
      return res
        .status(409)
        .json({ error: "Error al actualizar el game", message: error.message });
    }
  };
  
  module.exports = { createGames, toggleCharacters };