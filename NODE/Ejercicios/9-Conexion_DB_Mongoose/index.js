

const dotenv = require("dotenv");
dotenv.config();


const express = require("express");

const { connect } = require("./src/utils/db");

connect();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    console.log(`servidor escucado en el puerto http://localhost:${PORT}`);
});