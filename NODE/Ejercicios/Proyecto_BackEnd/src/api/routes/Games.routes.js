const {
    createGame,
    toggleCharacters,
    deleteGame,
  } = require("../controllers/games.controller");
  
  const { upload } = require("../../middleware/file.middleware")
  const gamesRoutes = require("express").Router();
  
gamesRoutes.post("/create/", upload.single("image"), createGame);
gamesRoutes.patch("/toggle/:id", toggleCharacters);
  
gamesRoutes.delete("/delete/:id", deleteGame);
  
module.exports = gamesRoutes;
  