
const {
    createMovie,
    toggleCharacters,
} = require("../controllers/Movie.controller");

const { upload } = require("../../middleware/file.middleware")
const MovieRouter = require("express").Router();

MovieRouter.post("/create", upload.single("image"), createMovie);
MovieRouter.patch("/toggle/:id", toggleCharacters);
module.exports = MovieRouter;
