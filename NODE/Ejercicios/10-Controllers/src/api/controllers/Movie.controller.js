
const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

//  metodo post: create

const createMovie = async (req, res, next) => {
    console.log(req.body);
    try {
        await Movie.syncIndexes();

        //creamos nueva instancia de Movie
        const newMovie = new Movie(req.body);

        //guardamos ese reguistro en la db
        const saveMovie = await newMovie.save();

        //si existe es que se ha guardado correctamente - 200
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
    

// creamos el patch(parche) - Toggle (permite cambiar estado visibilidad de elemtno html)

const toggleCharacter = async (req, res, next) => {
    try {
        // cogemos el id por los params
        const { id } = erq.params;

        // Recogemos los characters del body (es un array el body)
        const { characters } = req.body; // esto devuelve un arraqy por id
        console.log("characters", characters);

        // buscamos una pelicula para actualizar el id

        const movieById = await Movie.findById(id);

        // comprobamos si esta movie existe en la db y sino lanzamos 404

        if (movieById) {
            // cogemos lo traido por req.body y lo convertimos en array .split(",")
            // separando las posiciones de string

            // Separamos por comas y convertimos en array
            const arrayCharacters = characters.split(",");

            // recorremos el array de character qeu son id para comprobar si estan en la movie (sacarlos) o si no estan ( meterlos)

            // lo ponemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas

            promise.all(
                arrayCharacters.map(async (character) => {
                    if (movieById.characters.includes(character)) {
                        // si lo incluye hay que quitarlo ( character con el array de character movie)
                        // se elimina porque ya lo incluye
                        try {
                            // buscamos la movie que queremos actualizar
                            await Movie.findByIdAndUpdate(id, {
                                // quitamos el character del array de characters
                                $pull: { characters: character },
                            });

                        try {  // Buscamos el character y le quitasmos la pelicula
                            await Character.findByIdAndUpdate(character, {
                                $pull: { movies: id},
                            });
                        } catch (error) {
                            return res.status(409).json({
                               error: "Error al actualizar la movie, quitarle el character",
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
                            // si no lo incluye lo añadimos ( character al array de character de movie)
                            try { 
                                await Movie.findByIdAndUpdate(id, {
                                    $push: {character: character },
                                });
                            // actualizamos nuesto character metiendo en el campo de movies a la movie
                            try {
                                await Character.findByIdAndUpdate(character, {
                                    $push: { movies: id},
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
                // .then retorna una promesa que permoite encadenar metodos
            ).then(async () => {
                return res
                .status(200)
                .json(await Movie.findById(id).populate("characters"));
            });
        } else {
            // Lanzamos un 404 porque no existe la pelicula a actualizar
            return res.status(404).json("Movie no encontrada, prueba con otro id")
        }
    } catch (error) { 
        return res
        .status(409)
        .json({ error: "Error al actualizar la movie", message: error.mesage});
    }
};

module.exports = { createMovie, toggleCharacter };