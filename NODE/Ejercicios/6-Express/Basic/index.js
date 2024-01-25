
const express = require("express");

const PORT = 8080;

const app = express();

const router = express.Router();

router.get("/saludo", (req, res, next) => {
    res.send("<h1>Hola</h1>");
});

router.get("/movies", (req, res, next) => {
    const movies = ["Star trek", "Pacific rim", "Guerra del mañana"];
    res.send(movies);

});

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`servidor en en el puerto http://localhost:${PORT}`);
});