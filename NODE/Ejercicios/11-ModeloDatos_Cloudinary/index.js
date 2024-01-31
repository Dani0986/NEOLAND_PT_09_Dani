//!------------- IMPORTACIONES

const dotenv = require("dotenv");

dotenv.config();

const express = require("express");

//!------------ TRAEMOS CLOUDINARY PARA PODR USARLO
const { configCloudinary } = require("./src/middleware/files.middleware");

// ejecutamos para que pueda ser usado
configCloudinary();

//!------------- CONECTAMOS CON BASE DE DATOS

const { connect } = require("./src/utils/db");

connect();

//!------------- VARIABLES DE ENTORNO

const PORT = process.env.PORT;

//!------------- CREAMOS EL SERVIDOR WEB

const app = express();

//!-------------- LIMITACIONES

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//!-------------- RUTAS -------------

const CharacterRouter = require("./src/api/routes/Character.routes");
app.use("/api/v1/character", CharacterRouter);

//!-------------- CUANDO NO ENCONTREMOS LA RUTA - GENERAMOS UN ERROR

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//!--------------- ERROR CUANDO EL SERVIDOR CRASHEA 500 --> recojo el error

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});
// Revela la tecnología con la que esta realizado el back

app.disabled("x-powered-by");

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
