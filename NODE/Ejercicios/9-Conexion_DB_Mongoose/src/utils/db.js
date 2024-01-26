

const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {

    try {

        const db = await mongoose.connect(MONGO_URI, {
            
            useNewUrlParser: true, // parsea la url de MONGO
           
            useUnifiedTopology: true,  // convertir los caracteres especiales
          });

          const { name, host } = db.connection;

          console.log(
            `Conectados a la DB con el nombre: ${name} en el host: ${host} `
          );
        } catch (error) {
          console.log("Hay en un error en la conexión, ", error);
        }
      };
      
      module.exports = { connect };
      