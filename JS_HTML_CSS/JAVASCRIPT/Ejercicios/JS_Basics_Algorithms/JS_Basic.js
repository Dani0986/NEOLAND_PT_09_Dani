let myFavoriteHero = "Hulk"; 

console.log (myFavoriteHero)

let x = 50;

let h = 5;

let y = 10;

let z = h + y;

console.log (z)

const character = {name: 'Jack sparrow', age: 10};

character.age = 25; 

console.log(character.age)

firstname = 'Jon'
lastname = 'Snow'
age = 24;

console.log ("soy",  firstname, "tengo", lastname,  age + " y me gustan los lobos")

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log (toy1.price + toy2.price)

let globalBasePrice = 25000
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 75000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000};


10 * 5;

10 / 2;

15 / 9; // 1,6

p = 10, j = 5, o = p + j;

c = 10, m = 5, i = c * m;

console.log (10 * 5);

console.log(10 / 2);

console.log (15 / 9);

console.log(o);

console.log(i);

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[1] = "IRONMAN";

console.log(avengers[0]);

console.log(avengers[1]);

console.log(avengers.length)

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty" , "Summer");
console.log(rickAndMortyCharacters[4]);

const rickAndMorty = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMorty.splice(1,1);
console.log(rickAndMorty);

const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10) {
    console.log('number1 es estrictamente igual a 10')
}

if (number2 >= number1) {
  console.log("number2 dividido entre number1 es igual a 2");
  
}

if (number1 != number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
  console.log("number3 es distinto number1");
}

if (number3 <= number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 === number1 && number1 === number2); {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 === number1 && number1 === number3); {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

for (let a=0; a<=9; a++) {
  console.log(a)
} 

for (let b=0; b<= 9; b++) {
  if (b % 2 == 0);
  console.log(b);
}


let s = [];
let i = 0;

console.log(s);

while (i <= 10) {
  s.push(i);
  i++;

}

console.log(s)