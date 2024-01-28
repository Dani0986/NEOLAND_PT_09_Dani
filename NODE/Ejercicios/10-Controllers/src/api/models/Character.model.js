

// traemos mongoose

const mongoose = require("mongoose");

// nos traemos de mongoose los esquemas de datos

const Schema = mongoose.Schema;

// creamos el modelo de datos

const CharacterSchema = new Schema(
    {
        name: { type: String, required: false, unique: false},
        gender: {
            type: String,
            enum: ["hombre", "mujer", "otro"],
            required: false,
        },
        image: { type: String, reqired: false},
        // arraqy de object id que hace referencia a mi Model movie
        movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie"}],
    },
    // para que salga la fecha de creadcion 
    {
        timestamps: true,
    }
);

// con la deficinicion de datos y su esquema vamos a definir nuestro MODELO CHARACTER

const Character = mongoose.model("Character", CharacterSchema);

// exportamos el moudlo

module.exports = Character;