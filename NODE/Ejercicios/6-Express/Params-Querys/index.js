
const express = require("express");
const PORT = 8080;

const app = express();


const router = express.Router();

const alumns = ["Dani", "Antonio", "Juliana", "Adrian"]; // simular datos

// crear diferentes endpoints

router.get("/buscar/:name", (req, res, next) => {

 const { name } = req.params;
 console.log(name);

})