

const fs = require("fs");

const movie = [];


fs.readFile("./src/data/movies.json", (error, data) => {
    if (error) {
        console.log('error readinng file');
    } else {
        const parseMovie = JSON.parse(data);
        console.log(parseMovie, "ok");
    }
});

