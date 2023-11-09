
//?--- Iteración #1: Buscar el máximo ---
//!--- Completa la función que tomando dos números como argumento devuelva el más alto.
//*--- version 1 ---

function sum(numberOne, numberTwo) {      //* creamos una funcion con dos valores.
    console.log(numberOne > numberTwo ? numberOne : numberTwo);
}
sum(20, 10) //* ponemos los valores de la function sum (primero numberOne, segundo numberTwo)

//*--- version 2 ---

function sumar(A, B){
    console.log(Math.max(A, B));  //* usamos el metodo math.max (es una funcion que te permite hacer operaciones matematicas).
}                                 //* math.max devuelve el valor mas alto de la lista de valores.
sumar(20, 10)

//?--- Iteración #2: Buscar la palabra más larga ---
//?--- Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//*--- version 1 ---

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(marvel){              //* funcion buscar palabra mas larga
    let longestWord = '';                      //* creamos una variable con una cadena vacía. Esta variable se utiliza para almacenar la palabra más larga del array, se llena despues.
                                              //*  iniciamos el bucle. Comienza con i igual a 0, y se repetite hasta que i es menor que la longitud del array(siempre es menor asi que lo lee entero). luego i se incrementa en 1
    for (let i = 0; i < marvel.length; i++) { //*  creamos una variable llamada word que se utiliza para almacenar el elemento actual del array en la posición i.
      const word = marvel[i];                 //* En cada iteración, word contendrá un nombre de un personaje de los Vengadores.
      if (word.length > longestWord.length) { //* utilizamos una condicional verdadera para comparar la longitud de la palabra actual (word) esta variable guarda la palabra más larga hasta ese momento (longestWord). Si word es más largo que longestWord se seguira ejecutando el bucle.
        longestWord = word;                   //* Si la longitud de word es mayor que la longitud de longestWord, se actualiza longestWord para que sea igual a word. Esto significa que longestWord tiene la palabra más larga encontrada hasta el momento.        
      }                                       //* Después de que el bucle for haya iterado a través de todo el array, la función devuelve longestWord, que es la palabra más larga encontrada en el arreglo marvel.
    }                                         //* alfinal creamos una variable para mostrala por consola que contiene la palabra mas larga de avengers.
  
    return longestWord;
  }

const longestWord = findLongestWord(avengers);
console.log(longestWord); 

//*--- version 2 ---

function findLongestWord(marvel) {        //* este es igual al anterior usando un for of que es un metodo mas nuevo para bucles de object
  let longtWord = '';                     //* es una version mas compacta que un for
                                          //* creamos variable longtword que esta vacia y la llenamos despues
  for (const word of marvel) {            //* for of - creamos una variable con funcion y un parametro marvel que contiene el array, y guarda toda la informacion en la variable que es word
      if (word.length > longtWord.length){//* luego usamos una condicional que compara cual es el mas largo.
          longtWord = word;               //* word sumara todos los elementos del array usando length cuenta todas las letras y el numero mas alto o palabra mas larga la guarda en longtword  
      }                                   //* longtWord es igual a word asi contiene todo el array y como tiene una clave vacia lo llenamos. 
  }                                       //* luego con el return le decimos que nos devuelva longtWord que contiene el elemento mas alto ya que la emos llenado antes.
                                          
  return longtWord;
}

const longestAvenger = findLongestWord(avengers);
console.log(longestAvenger);

//?--- Iteración #3: Calcular la suma ---
//!--- Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//!--- Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 


const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(arr) {
    let result = 0;
    arr.forEach (num =>{ 
        result += num;
    });
    return result;

}

console.log(sumAll(numbers))

//?--- Iteración #4: Calcular el promedio
//!--- Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:


const numeros = [1, 2, 3, 5, 45, 37, 58];
function average(myArray) {    
    let sum = 0;
    for (let i = 0; i<myArray.length; i++){
        sum += myArray[i];
    }
    
    let A = sum / myArray.length;
    return A;
}
let result = average(numeros);
console.log(result);

//?--- Iteración #5: Calcular promedio de strings
//!--- Crea una función que reciba por parámetro un array y cuando es un valor 
//!--- number lo sume y de lo contrario cuente la longitud del string y lo sume.

//*--- version 1 ------

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(numLetras) {  
        let sumaNumeros = 0;
        let contar = 0;
      
        numLetras.forEach(elemento => {
          if (typeof elemento === "string") {
            sumaNumeros += elemento.length;
            contar++;
          }
        });
      
        if (contar === 0) {
          return 0; 
        }
      
        let totalMix = sumaNumeros / contar;
        return totalMix;
      }

let totalMix = averageWord(mixedElements);
console.log(totalMix);

//*--- version 2 -------

const mix = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(numLetras) {  
        let sumaNumeros = 0;
        let contar = 0;
      
        numLetras.forEach(elemento => {
          if (typeof elemento === "number") {
            sumaNumeros += elemento;
            contar++;
          }
        });
      
        if (contar === 0) {
          return 0; 
        }
      
        let tMix = sumaNumeros / contar;
        return tMix;
      }

let tMix = averageWord(mix);
console.log(tMix);

//?--- Iteración #6: Valores únicos
//!--- Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin 
//!--- los elementos duplicados.


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(comida) {
    const Food = new Set(comida);
    return Food;
}

const u = removeDuplicates(duplicates);
console.log(u);

//?--- Iteración #7: Buscador de nombres
//!--- Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
//!--- comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName (nombres, personas) {
    nombres.includes(personas)?
    console.log(`${nombres.includes(personas)} ${nombres.indexOf(personas)}`):
    console.log("false")
  }  

finderName(nameFinder,'Natasha')
finderName(nameFinder,'wanda')

//?--- Iteration #8: Contador de repeticiones
//!--- Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma 

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  //*--- version 1 ---

  function repeatCounter(contador) {
    let acc = {};
    for (let i = 0; i < contador.length; i++) {
      const codes = contador[i];   
      if (acc[codes]) {
        acc[codes]++;
      } else {
        acc[codes] = 1;
      }
    }
    
      return  acc;
    }

const P = repeatCounter(counterWords);
console.log(P)


//*--- version 2 ---

function repeatCounter(contador) {
  let acc = {};

  for (const codes of contador) {
      if (acc[codes]) {
          acc[codes]++;
      } else {
          acc[codes] = 1;
      }
  }

  return acc;
}

const P1 = repeatCounter(counterWords);
console.log(P1);
  
