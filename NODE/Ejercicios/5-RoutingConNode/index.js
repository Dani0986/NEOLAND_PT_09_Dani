

const http = require("http");

const app = http.createServer((req, res) => {

    console.log(req.url);
    const url = req.url;

    const method = req.method;

    switch (url) {
        case "/saludo":
            res.end("<h1>Saludos</h1>");
            break;
        case "/despedida":
            res.end("<h1>Chao</h1>");
            break;

        default:
          break;

    }

    if (method === "GET" && url === "/alumons") getAlumns(res)
});

const getAlumns = (res) => {
    const alumnos = [
        {
          name: "Jorge",
          age: 20,
        },
        {
          name: "Dani",
          age: 20,
        },
        {
          name: "Elena",
          age: 20,
        },
      ];

    const dataString = Json.stringify(alumnos);
    res.setHeader("Content-type", "application/json");
    res.end(dataString)
};

app.listen(8080, () => {
    console.log("concetado al puerto 8080 localhost:8080");
});
