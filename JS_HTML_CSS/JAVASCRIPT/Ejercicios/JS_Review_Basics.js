
//?--- Iteración #1: Mix for e includes
//!--- Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola 
//!--- el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let newMovies = [];

for (const mov of movies) {
    const categories = mov.categories;
    for (const category of categories) {
        if (!newMovies.includes(category)) {
            newMovies.push(category);
        }
    }
}

console.log(newMovies)

//?--- Iteración #2: Mix Fors
//!--- Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumenTotal = 0;
let longitud = [];

for (let user of users) {
    const {favoritesSounds} = user;   
    for(let sonidos in favoritesSounds) {
//   console.log(favoritesSounds[sonidos].volume);   
    volumenTotal += favoritesSounds[sonidos].volume;
    longitud.push(sonidos);
    }
}

let promedio = volumenTotal / longitud.length;
console.log(promedio); 





//?--- Iteración #3: Mix Fors
//!--- Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios
//!--- y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//!--- Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

const users0 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let mp3 = {};

for (let wave of users0) {
    for (let sonidos in  wave.favoritesSounds)  {
        if (mp3[sonidos]) {
            mp3[sonidos]++; 
        } else {
            mp3[sonidos] = 1;
        }
    }
}

console.log(mp3); 

//*-- version 2 -- 

// 1) Conseguir un array con todos los nombre repetidos de los sonidos
const allSoundFavortie = []

for ( let usuario of users0){
    for ( let clave in usuario.favoritesSounds){
        allSoundFavortie.push(clave)
    }
}
console.log("🚀 ~ file: app.js:124 ~ allSoundFavortie:", allSoundFavortie)
// 2) hacer un array con los elementos contados 
// este array tiene objetos con la forma { name: 'waves', repeticiones: 3 }
const results = []

for (let sound of allSoundFavortie){
    // aqui recorremos el array original de nombre y me paro en un nombre
    acc = 0
    // recorro el array dde resultados para comprobar que el nombre donde estoy parado "sound" no este contado
    results.forEach((elementoContado, index)=>{
        // si esta contado porque lo encuentre incrementa el contador
        elementoContado.name === sound && acc++
    })
    // si el contador es igual a 0 eso quiere decir que en el array no esta contado el sound en el estamos parados
    if(acc== 0){
        // me pongo a contarlo con un segundo bucle recorriendo el array de nombres de nuevo y
        // compruebo cuando el primer nombre el cual esto parado "sound" coincide con el segundo nombre del bucle segundo "soundCound"
        for (let soundCound of  allSoundFavortie ){

            // si tenemos una coincidencia-- incrementamos el contador que previammente se ha reinicializado arriba al entrar al bucle principal
            soundCound == sound && acc++}

        results.push({name: sound, repeticiones: acc })

    }
}

console.log("🚀 ~ file: app.js:124 ~ results:", results)




//?--- Iteración #4: Métodos findArrayIndex
//!--- Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array 
//!--- sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const insectos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for(let i=0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
}

const indiceCaracol = findArrayIndex(insectos, 'Caracol')
const indiceMosquito = findArrayIndex(insectos, 'Mosquito');
const indiceSalamandra = findArrayIndex(insectos, 'Salamandra');
const indiceAJolote = findArrayIndex(insectos, 'Ajolote');

console.log(`'Caracol' posicion: ${indiceCaracol}`);
console.log(`'Mosquito' posicion: ${indiceMosquito}`);
console.log(`'Salamandra' posicion: ${indiceSalamandra}`);
console.log(`'Ajolote' posicion: ${indiceAJolote}`);


//*--- version 2 --- 

function findArrayIndex (array, text) {
    let i=0;
    for(const insectos of array) {
        if (insectos === text) {
            return i;
        } i++;
    }
}

const indiceCaracol1 = findArrayIndex(insectos, 'Caracol')
const indiceMosquito2 = findArrayIndex(insectos, 'Mosquito');
const indiceSalamandra3 = findArrayIndex(insectos, 'Salamandra');
const indiceAJolote4 = findArrayIndex(insectos, 'Ajolote');

console.log(`'Caracol' posicion: ${indiceCaracol1}`);
console.log(`'Mosquito' posicion: ${indiceMosquito2}`);
console.log(`'Salamandra' posicion: ${indiceSalamandra3}`);
console.log(`'Ajolote' posicion: ${indiceAJolote4}`);

//?--- Iteración #5: Función rollDice
//!--- Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo 
//!--- dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre 
//!--- como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random();

function rollDice (numeros) {
    const dado = Math.floor(Math.random() * numeros) + 1;
    return dado;
}

const numeroDeCaras = 6;
const aleatorios = rollDice(numeroDeCaras)
console.log(`'dado' tirada : ${aleatorios}`);




//?--- Iteración #6: Función swap
//!--- Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los 
//!--- valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
const arr = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swapArray (arr, param1, param2) {
    const newArray = [...arr];
    const posicionArray = newArray[param1];
    const posicionArray2 = newArray[param2];
    newArray.splice(param1, 1, posicionArray2);
    newArray.splice(param2, 1, posicionArray);
    return newArray;
}

console.log(swapArray(arr,1,2));



