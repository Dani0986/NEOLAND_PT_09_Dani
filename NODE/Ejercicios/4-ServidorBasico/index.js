

const http = require("http");

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hola</h1>");
});

app.listen(8080, () => {
    console.log("conectando al puerto 8080 http://localhost:8080");
});