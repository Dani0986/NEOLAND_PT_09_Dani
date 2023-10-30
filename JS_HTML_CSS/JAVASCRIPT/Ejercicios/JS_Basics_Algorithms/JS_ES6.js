
//?--- Iteración #1: Arrows
//?--- Crea una arrow function que tenga dos parametros a y b y 
//?--- que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
//?--- por consola la suma de los dos parametros.

//!--- 1.1 Ejecuta esta función sin pasar ningún parametro
//!--- 1.2 Ejecuta esta función pasando un solo parametro
//!--- 1.3 Ejecuta esta función pasando dos parametros

const arrowSum = (a = 10, b = 5) => {const suma = a + b; console.log(`${suma}`);}

arrowSum ();

arrowSum(10);

arrowSum(10, 5);



//?--- Iteración #2: Destructuring

//!--- 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, 
//!--- no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log(`${title}`);
console.log(`${gender}`); 
console.log(`${year}`);



//!--- 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente, 
//!--- imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//!--- 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {names: 'Bengal Tiger', race: 'Tiger'}
};

const {names, race} = animalFunction(); 

console.log(names);
console.log(race);

//!--- 2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando
//!--- igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;

console.log(name, itv[0]);
console.log(name, itv[1]);
console.log(name, itv[2]);

//?--- Iteración #3: Spread Operator

//!--- 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]

const newPointList = [...pointsList];

console.log(newPointList);

//!--- 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const newToy = {...toy};

console.log(newToy);

//!--- 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const doublePointList = [...pointsList1, ...pointsLis2];

console.log(doublePointList);

//!--- 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [...colors];
newColors.splice(2,1);

console.log(newColors);


//?--- Iteración #4: Map

//!--- 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const newUsers = users;
newUsers.map((name, index) => {
    console.log(name);
});


//!--- 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users00 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const cambioNombre = users00.map(user00 => {
    const letraA = user00.name.charAt(0);
    if (letraA === 'A') {
        return {id: user00.id, name: 'Anacleto'};
    } else {
        return user00;
    }

});

console.log(cambioNombre);



//!--- 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//!--- cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const newCities = cities.map(city => {
   if (city.isVisited === true) {
    return {...city, name: city.name + ' is Visited'};
   } else {
    return city;
   }
    
    
});


console.log("🚀 ~ file: JS_ES6.js:160 ~ newCities ~ newCities:", newCities);
    
 
//?--- Iteración #5: Filter 
//!--- 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges = ages.filter(number => number > 18);
console.log("🚀 ~ file: JS_ES6.js:171 ~ newAges:", newAges);



//!--- 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages0 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges0 = ages0.filter(number => number % 2 === 0);
console.log("🚀 ~ file: JS_ES6.js:179 ~ newAges0:", newAges0);



//!--- 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const theStreamers = streamers.filter(stream => stream.gameMorePlayed === 'League of Legends');
console.log("🚀 ~ file: JS_ES6.js:192 ~ theStreamers:", theStreamers);



//!--- 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name.
//!--- Recomendamos usar la funcion .includes() para la comprobación.

const streamers0 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const twitch = streamers0.filter(names => names.name.includes('u'));
console.log("🚀 ~ file: JS_ES6.js:206 ~ twitch:", twitch);


//!--- 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//!--- el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//!--- .includes() para la comprobación.
//!--- Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//!--- .age sea mayor que 35.

const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const mayores = streamers1.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends') || streamer.age > 35) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});

console.log("🚀 ~ file: JS_ES6.js:239 ~ mayores ~ mayores:", mayores);



//?--- Iteración #6: Find

//!--- 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

const numero100 = numbers.find(num => num === 100);
console.log("🚀 ~ file: JS_ES6.js:278 ~ numero100:", numero100);


//!--- 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const añoPelis = movies.find(fecha => fecha.date === 2010);
console.log("🚀 ~ file: JS_ES6.js:290 ~ añoPelis:", añoPelis);

//!--- 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
//!--- 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
//!--- spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
//!--- lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutacion = { mutacion: 'Porompompero'} ;

const alienfusion = aliens.find(alien => alien.name === 'Cucushumushu');

const fusedAlien = { ...alienfusion, ...mutacion };
console.log(fusedAlien);
console.log("🚀 ~ file: JS_ES6.js:309 ~ fusedAlien:", fusedAlien)


//?--- Iteración #7: Reduce

//!--- 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
//!--- los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


const Alumnos = exams.reduce((total, exam) => total + exam.score, 0);
console.log("🚀 ~ file: JS_ES6.js:332 ~ Alumnos:", Alumnos);


//!--- 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//!--- alumnos que esten aprobados usando la función .reduce().

const exams0 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const aprobados = exams0.filter(exam => exam.score >= 5);
const totalAprobados = aprobados.reduce((acc, exam) => acc + exam.score, 0);

console.log(aprobados);
console.log("🚀 ~ file: JS_ES6.js:355 ~ aprobados:", aprobados);

//!--- 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const exams1 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const mediaAprobados = exams1.reduce((acc, exam) => acc + exam.score, 0);
const media = mediaAprobados / exams1.length;
console.log(media);
console.log("🚀 ~ file: JS_ES6.js:375 ~ media:", media)


//?--- Iteración #8: Bonus

//!--- 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
//!--- .filter() y usa .reduce() para conseguir la media de sus .score. 
//!--- La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
//!--- array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const rpgGames = videogames.filter((game, index) =>
  game.genders.includes("RPG")
);
console.log("🚀 ~ file: app.js:26 ~ rpgGames:", rpgGames);

const suma = rpgGames.reduce((acc, game) => acc + game.score, 0);
console.log("🚀 ~ file: app.js:30 ~ suma:", suma);

const newMedia = suma / rpgGames.length;
console.log("🚀 ~ file: app.js:34 ~ media:", media);