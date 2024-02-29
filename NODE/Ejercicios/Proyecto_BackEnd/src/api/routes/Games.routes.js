const {
    createGame,
    toggleCharacters,
    deleteGame,
    getAll,
    getById,
    getByName,
  } = require("../controllers/games.controller");
  
  const { upload } = require("../../middleware/file.middleware")
  const gamesRoutes = require("express").Router();
  
gamesRoutes.post("/create/", upload.single("image"), createGame);
gamesRoutes.patch("/toggle/:id", toggleCharacters);
gamesRoutes.get("/getAll/", getAll);
gamesRoutes.get("/getById/:id", getById);
gamesRoutes.get("/getByName/:name", getByName);  
gamesRoutes.delete("/delete/:id", deleteGame);

  
module.exports = gamesRoutes;
  