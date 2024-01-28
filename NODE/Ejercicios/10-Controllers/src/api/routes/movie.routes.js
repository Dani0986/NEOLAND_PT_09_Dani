
const {
    createMovie,
    toggleCharacters,
} = require("../controllers/Movie.controller");

const MovieRouter = require("express").Router();

MovieRouter.post("/create", createMovie);
MovieRouter.patch("/toggle/:id", toggleCharacters);
module.exports = MovieRouter;
