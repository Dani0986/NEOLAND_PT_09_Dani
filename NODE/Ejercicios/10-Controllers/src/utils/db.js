
// requerimos dotenv y mongoose

const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI; // nos traemos MONGO_URI de .env

const connect = async () => {
     // try: intentar hacer algo y siempre va con unb catch para capturar el error
    try {
        const db = await mongoose.connect(MONGO_URI, { // conecta base de datos
            useNewUrlParser: true, // parsea mongo uria
            useUnifiedTopology: true, // convertir caracteres especiales
        });

        //hacemos destructuring de nombre y host  de nuestra base de datos

        const { name, host } = db.connection;

        console.log(
            `conectamos a la DB con el nombre: ${name} en el host: ${host}`
        );
    } catch (error) {
        console.log("hay un error en la conexion, ", error);
    }
};

module.exports = { connect };
