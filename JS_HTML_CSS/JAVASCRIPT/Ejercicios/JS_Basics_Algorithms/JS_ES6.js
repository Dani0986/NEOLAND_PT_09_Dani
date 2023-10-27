
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

//!--- 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log(`${title}`);
console.log(`${gender}`); 
console.log(`${year}`);



//!--- 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente, imprimelo por consola.

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

//!--- 2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

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


//!--- 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const newCities = cities.map(city => {
   if (city.isVisited === true) {
    return {...city, name: city.name + '(visitado)'};
   } else {
    return city;
   }
    
    
});
    
 

console.log(newCities);

//---- revisarlo ------