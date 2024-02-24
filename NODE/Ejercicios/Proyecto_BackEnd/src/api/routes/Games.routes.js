const {
    createGames,
    toggleCharacters,
    deleteGames,
  } = require("../controllers/games.controller");
  
  const gamesRoutes = require("express").Router();
  
gamesRoutes.post("/create", createGames);
gamesRoutes.patch("/toggle/:id", toggleCharacters);
  
gamesRoutes.delete("/delete/:id", deleteGames);
  
module.exports = gamesRoutes;
  