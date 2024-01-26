

const express = require("express"); // importaciones y configurar dotenv
const dotenv = require("dotenv");
dotenv.config();

const { connect } = require("./src/utils/db"); // traemos la conexion base de datos
connect();

const { configCloudinary } = require("./src/middleware/file.middleware");
configCloudinary(); // configuramos cloudinary

const app = express(); // creamos servidor

const cors = require("cors");
app.use(cors()); // damos las cors al servidor -  es la seguridad de la web

app.use(express.json({ limit: "5mb"})); // limitaciones 
app.use(express.urlencoded({ limit: "5mb", extended: false}));

// rutas

const CharacterRouter = require("./src/api/routes/Character.routes");
app.use("/api/v1/character", CharacterRouter);

const MovieRouter = require("./src/api/routes/movie.routes");
app.use("/api/v1/movie", MovieRouter);

app.use("*", (req, res, next) => { // generamos error cuando no encuentra ruta
    const error = new Error("Ruta no encontrada");
    error.status = 404;
    return next(error);
});

app.use((error, req, res) => { //cogemos el error que crashea el servidor
    return res
        .status(error.status || 500)
        .json(error.status || "Error inesperado");
});

app.disable("x-powered-by");

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto http://localhost:${PORT}`);
});

