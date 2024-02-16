
//! importar configuracion dotenv

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

//! conexion base de datos y ejecucion

const { connect } = require("./src/utils/db");

connect();

//! configurar cloudinary

const { configCloudinary } = require("./src/middleware/file.middleware");

//! creamos servidor

const app = express();

//! damos las cors al server

const cors = require("cors");

app.use(cors());

//! importaciones limitaciones

app.use(express.json({ limit: "5mb"}));
app.use(express.urlencoded({ limit: "5mb", extended: false}));

//! rutas

const UserRoutes = require("./src/api/routes/User.routes");
app.use("/api/v1/user", UserRoutes);

//! capturamos el error cuando el server crashea

app.use((error, req, res) => {
    return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});

app.disable("x-powered-by");

//! traemos variable de entorno

const PORT = process.env.PORT;

//! escuchamos en el puerto el servidor web

app.listen(PORT, () => 
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
)