
const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");


//!--------------------- POST - CREATE --------------------


const createMovie = async (req, res, next) => {
    console.log(req.body);
    try {
      await Movie.syncIndexes();
  
      // Creamos nueva instancia de Movie
      const newMovie = new Movie(req.body);
  
      // Guardamos ese registro en la db
      const saveMovie = await newMovie.save();
  
      // Si existe es que ha guardado de forma correcta --> 200
      if (saveMovie) {
        return res.status(200).json(saveMovie);
      } else {
        // Sino existe es que no se ha guardado --> 409
        return res.status(409).json("No se ha podido crear la Movie");
      }
    } catch (error) {
      return res.status(409).json({
        error: "Error en la creación de nueva Movie",
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
  
      // Buscamos la pelicula a actualizar por el id
  
      const movieById = await Movie.findById(id);
  
      // Comprobamos si esta movie existe en la db y sino lanzamos un 404
      if (movieById) {
        // Cogemos lo traido por req.body y lo convertimos en array .split(",") --> js
        // Separando las posiciones del string
  
        // Separamos por comas y convertimos en array
        const arrayCharacters = characters.split(",");
  
        console.log("array characters", arrayCharacters);
  
        // Recorremos el array de characters que son Id para comprobar si estan en la movie (sacarlos) o sino estan (meterlos)
  
        // Lo metemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas
        Promise.all(
          arrayCharacters.map(async (character) => {
            console.log("character", character);
            if (movieById.characters.includes(character)) {
              // Si lo incluye hay que quitarlo ( character al array de characters de movie)
              //** LO QUITAMOS PORQUE LO INCLUYE */
              try {
                // buscamos la movie que queremos actualizar
                await Movie.findByIdAndUpdate(id, {
                  // quitamos el character del array de characters
                  $pull: { characters: character },
                });
  
                try {
                  // Buscamos el character y le quitamos la pelicula
                  await Character.findByIdAndUpdate(character, {
                    $pull: { movies: id },
                  });
                } catch (error) {
                  return res.status(409).json({
                    error: "Error al actualizar el character, quitarle la movie",
                    message: error.message,
                  });
                }
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar la movie, quitarle el character",
                  message: error.message,
                });
              }
            } else {
              // Sino lo incluye lo añadimos ( character al array de characters de movie)
              //** LO AÑADIMOS */
              try {
                // actualizamos la movie añadiendole el character
                await Movie.findByIdAndUpdate(id, {
                  $push: { characters: character },
                });
  
                try {
                  // Actualizamos nuestro character metiendo en el campo de movies la movie
  
                  await Character.findByIdAndUpdate(character, {
                    $push: { movies: id },
                  });
                } catch (error) {
                  return res.status(409).json({
                    error: "Error al actualizar el character, añadirle la movie",
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
            .json(await Movie.findById(id).populate("characters"));
        });
      } else {
        // Lanzamos un 404 porque no existe la pelicula a actualizar
        return res.status(404).json("Movie no encontrada, prueba con otro id");
      }
    } catch (error) {
      return res
        .status(409)
        .json({ error: "Error al actualizar la movie", message: error.message });
    }
  };
  
  module.exports = { createMovie, toggleCharacters };
  