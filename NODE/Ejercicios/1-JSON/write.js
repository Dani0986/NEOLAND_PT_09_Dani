
const fs = require('fs');


const movie = [
 {
    title: "Evil Dead",
    year: 1986,
    availables: false,
 },
 {
    title: "saw",
    year: 2004,
    availables: true,
 },
 { 
    title: "theConjuring",
    year: 2013,
    availables: true,

 },
];

const updateMovies = movie.map((pelicula) => {
    if (pelicula.year === 1986) {
        return {
            ...pelicula,
            view: false,
        };
    } else {
        return {
            ...pelicula,
        };
    }
});

console.log("updateMovies", updateMovies);

const stringifyMovies = JSON.stringify(updateMovies);

console.log("movies texto plano", stringifyMovies);


fs.writeFile("movies.json", stringifyMovies, () => 
    console.log("archivo correcto")
);

