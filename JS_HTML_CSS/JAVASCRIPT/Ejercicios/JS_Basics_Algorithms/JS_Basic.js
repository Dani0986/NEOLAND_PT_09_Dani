//?--- Iteración #1: Variables
//!--- 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
//!--- 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
//!--- 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
//!--- 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let myFavoriteHero = "Hulk";    //*-crear variable.

console.log (myFavoriteHero)  //*- mostra variable por consola.

let x = 50; //*- declarar valor a variable.

let h = 5;

let y = 10;

let z = h + y; //*- declarar variable y sumar variables con valores.

console.log (z)

//?--- Iteración #2: Variables avanzadas
//!--- 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
//!--- 1.2 Declara 3 variables con los nombres y valores siguientes 
//!--- 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
//!--- 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.

const character = {name: 'Jack sparrow', age: 10};  //*- crear variable con object y propiedades.

character.age = 25;  //*- usando la variable y el punto podemos entrar en la propiedad del object y modificarla.

console.log(character.age)

const firstname = 'Jon'   //*- declaramos varias variable 
const lastname = 'Snow'
const age = 24;

console.log ("soy",  firstname, "tengo", lastname,  age + " y me gustan los lobos") 
//*- usamos console.log para imprimir una cadena de texto que incluye las variables y el texto que nostros necesitemos.
//*- texto entre comillas predefinido y operador suma para concatenar.

const toy1 = {name: 'Buss myYear', price: 19}; //*- cramos variable con object y propiedades.
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log (toy1.price + toy2.price); //*- usamos las variables con . entramos en la propiedad y las sumammos.

let globalBasePrice = 25000; //*- variable con valor
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000}; //*- variables con varios valores.
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = car1.finalPrice + globalBasePrice; //*- utilimaos la variable y accedemos a la propiedad con el punto y le decimos  
car2.finalPrice = car2.finalPrice + globalBasePrice; //*- que sume la propiedad finalprice con globalprice que tambien tiene valor.

console.log(car1); 
console.log(car2);

//?--- Iteración #3: Operadores
//!--- 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
//!--- 1.2 Divide 10 por 2 y muestra el resultado en un console.
//!--- 1.3 Muestra mediante un console el resto de dividir 15 por 9.
//!--- 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
//!--- 1.5 Usa el correcto operador de asignación que resultará en i = 50,teniendo dos variables c = 10 y m = 5.

let multiplicar = 10 * 5; //*-variables con ooperadores

let dividir = 10 / 2; 

let resto = 15 % 9; 

let p = 10; let j = 5; o = p + j; //*- crear varias variables y luego crear otra variable y sumarlas 

let c = 10; let m = 5; i = c * m; //*- crear varias variables y luego crear otra variable y multiplicarlas

console.log (multiplicar); 

console.log(dividir);

console.log (resto);

console.log(o);

console.log(i);

//?--- Iteración #4: Arrays
//!--- 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
//!--- 1.2 Cambia el primer elemento de avengers a "IRONMAN"
//!--- 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
//!--- 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//!--- 1.5 Elimina el último elemento del array y muestra el primero y el último por consola
//!--- 1.6 Elimina el segundo elemento del array y muestra el array por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; //*- variable con array, con una lista de nombres.

console.log(avengers[0]); //*- mostramos por consola la propiedad de hulk, siempre empieza en cero, es la primera para eso usamos corcehtes dentro del nombre de la variable.

avengers[0] = "IRONMAN"; //*- de esta forma podemos cambiar el primer elemento del array por otro, dandole una condicion.
                         
console.log(avengers[0]);  //*- para que muestre hulk en el ejercicio anterior, debemos declar esta variable despues.  

console.log(avengers.length); //*- usando length nos cuenta los elementos del array. tambien podriamos hacer que nos contase letra a letra.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]; //*- constante con array de nombre.
rickAndMortyCharacters.push("Morty", "Summer"); //*- metodo push sirve para añadir elementos al array.
console.log(rickAndMortyCharacters); //*- ya tendriamos los elementos pusheados.
console.log(rickAndMortyCharacters[3]); //*- aqui nos muesta como los elementos ya estan dentro del array sin estar en el array original.
console.log(rickAndMortyCharacters[4]);

const rickAndMorty = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMorty.splice(1, 2); //*- esto significa que quieres eliminar 1 elemento a partir del índice 1, osea que seria beth ya que es el primer elemento
console.log(rickAndMorty); //*- (1 ,2) aqui eliminanos dos elementos (beth y jerry) y (0,2) eliminamos rick y beth
                           //*- (0,1) eliminamos solo a rick (numero a eliminar, y cuantos se eliminan)
//?--- Iteración #5: Condicionales
//!--- En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;  //*- constantes con valores y vamos a ver como se pueden usar las condiciones.
const number2 = 20;
const number3 = 2;

if(number1 === 10) {    //*- aqui decimos que si numero 1 es igual a 10 muestramelo por consola, (si no es igual no lo mostraria porque no es verdadero)
    console.log('number1 es estrictamente igual a 10')
}

if (number2 >= number1) {  //*- aqui decimos que si numero 2 es mayor que numero 1 me lo mestres por consola si es verdadero.
  console.log("number2 dividido entre number1 es igual a 2");
  
}

if (number1 !== number2) { //* aqui decimos si no es igual muestralo por consola. no igual estrico.
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) { //* aqui decimos que si no es igual muestalo por consola, np igual.
  console.log("number3 es distinto number1");
}

if (number3 <= number1) { //* aqui decimos que 3 es menor que 1 muestralo por consola.
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1 && number1 * 2 === number2) {  //* aqui decimos que 3x5 es igual a number 1 y con un operador and juntamos otra condicion.  
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 === number1 || number1 / 5 === number3) { //* aqui decimos que numero 2/2 es igual a numero 1 y usamos operador and para juntar otra condicion.
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//?--- Iteración #6: Bucles
//!--- 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
//!--- 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
//!--- 1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//!--- Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
//!--- y cambia el mensaje en la décima vuelta a 'Dormido!'.


for (let a=0; a<=9; a++) {  //* aqui creamos un bucle for antiguo que cuenta del 1 al 10. 
  console.log(a)            //* inicializacion, condicion, actualizacion
}                           //* Inicializas una variable llamada a con el valor 0. Esto se hace antes de que comience el bucle.
                            //* El bucle se ejecuta mientras la condición sea verdadera. el bucle continuará mientras "a" sea menor o igual a 9.
                            //* a++: Esto es la actualización. En cada iteración del bucle, la variable a se incrementa en 1. Esto lo al final de cada iteración.

for (let b=0; b<= 9; b++) {
  if(b % 2 == 0){
  console.log(b)
  }
}

/*for (let x=0; x< 10; x++) {
  if(x < 9) {
    console.log("intentando dormir 🐑") 
  } else {console.log ("dormir")
}
  
}
*/

