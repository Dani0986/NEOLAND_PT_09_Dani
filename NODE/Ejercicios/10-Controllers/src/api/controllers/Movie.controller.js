
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

                        
                        } catch (error) {
                            
                        }

                    }

                })
            )

        }


    } catch (error) {

    }
    
}