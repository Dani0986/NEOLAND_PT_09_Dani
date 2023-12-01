//?- 1.1 Usa querySelector para mostrar por consola el botón con 
//?- la clase .showme

const button = document.querySelector(".showme");
console.log("🚀 ~ file: main.js:6 ~  button:", button);

//?- 1.2 Usa querySelector para mostrar por consola el h1 con el id 
//?- #pillado

const pillado = document.getElementById("pillado");
console.log("🚀 ~ file: main.js:10 ~ pillado:", pillado);

//?- 1.3 Usa querySelector para mostrar por consola todos los p

const allP = document.querySelectorAll("p");
console.log("🚀 ~ file: app.js:16 ~ allP:", allP);

//?- 1.4 Usa querySelector para mostrar por consola todos los 
//?- elementos con la clase.pokemon

const pokemon = document.querySelectorAll(".pokemon");
console.log("🚀 ~ file: app.js:22 ~ pokemon:", pokemon);

//?- 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//?- data-function="testMe".

const data = document.querySelectorAll('[data-function="testMe"]');
console.log("🚀 ~ file: app.js:28 ~ data:", data);

//?- 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//?- data-function="testMe".

const data3 = document.querySelectorAll('[data-function="testMe"]');
console.log(data3[2]);

