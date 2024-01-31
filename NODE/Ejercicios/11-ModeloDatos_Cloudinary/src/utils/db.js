//!------------ REQUERIMOS DOTENV Y MONGOOSE --------------

const dotenv = require("dotenv");

const mongoose = require("mongoose");

// usamos dotenv
dotenv.config();

//!---------- NOS TRAEMOS MONGO_URI DE .ENV

const MONGO_URI = process.env.MONGO_URI;

//!----------- CREAMOS FUNCIÓN QUE CONECTA CON NUESTRA BASE DE DATOS

const connect = async () => {
  // --------- try : intenta hacer algo ..... y sino lo capturas catch
  try {
    // conectamos con nuestra base de datos

    const db = await mongoose.connect(MONGO_URI, {
      // parsea la url de MONGO
      useNewUrlParser: true,
      // convertir los caracteres especiales
      useUnifiedTopology: true,
    });

    // Hacemos destructuring de nombre y host de nuestra base de datos

    const { name, host } = db.connection;

    console.log(
      `Conectados a la DB 👌🏾 con el nombre: ${name} en el host: ${host} `
    );
  } catch (error) {
    console.log("Hay en un error en la conexión ❌, ", error);
  }
};

module.exports = { connect };
