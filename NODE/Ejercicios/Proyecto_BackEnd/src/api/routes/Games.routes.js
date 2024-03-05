const {
    createGame,
    toggleCharacters,
    deleteGame,
    getAll,
    getById,
    getByName,
    updateGame,
  } = require("../controllers/games.controller");
  
  const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
  const { upload } = require("../../middleware/file.middleware")
  const gamesRoutes = require("express").Router();
  
gamesRoutes.post("/create/", upload.single("image"), createGame);
gamesRoutes.patch("/toggle/:id", toggleCharacters);
gamesRoutes.get("/getAll/", getAll);
gamesRoutes.get("/getById/:id", getById);
gamesRoutes.get("/getByName/:name", getByName);  
gamesRoutes.delete("/delete/:id", deleteGame);
gamesRoutes.patch("/update/:id", [isAuth], upload.single("image"), updateGame);
  
module.exports = gamesRoutes;
  