//?- 2.1 Inserta dinamicamente en un html un div vacio con javascript.

//*- version 1 -

const template =() => '<div></div>';
const divVacio0 = document.querySelector("body");
divVacio0.innerHTML += template();

//*- version 2 - 

const nuevoDiv = document.createElement('div');
const body = document.body;
body.appendChild(nuevoDiv); //* agregar nuevos elementos a un documento existente o para mover un elemento de la página *//


//?- 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const templateP = () => `<div><p></p></div>`
const agregarP = document.querySelector("body");
agregarP.innerHTML += templateP();


//?- 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const templates = () => '<div><ul></ul></div>';
const p6 = document.querySelector("body");


//?- 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const template0 =() => `<div><p>Soy dinámico!</p></div>`;
const dinamico = document.querySelector("body");
body.innerHTML += template0();


//?- 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const template1 =() => "Wubba Lubba dub dub";
const dub = document.querySelector("h2.fn-insert-here");
dub.innerHTML += template1();


//?- 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const redesSociales = document.createElement('ul') //* creo elemento
const redes = document.body; //* apunto al documento body
for(const app of apps) {  //* recorro el array con for of
    const lista = document.createElement("li"); //* creo elemento li
    lista.textContent = app; //* devuelve el contenido de texto y lo agrega a app
    redesSociales.appendChild(lista); //* agrega nuevos elementos, agrega los li al los ul 
}

redes.appendChild(redesSociales); //*agrega la lista ul al documento

//?- 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll(".fn-remove-me");
eliminar.forEach((element, index)=> {
    element.remove();
});

//?- 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//?-	Recuerda que no solo puedes insertar elementos con .appendChild.

const Div2 = document.querySelectorAll("div");
const segundoDiv = Div2[1];
const parrafo = document.createElement("p");
parrafo.textContent = 'Voy en medio!'; //* sirve para agregar texto
segundoDiv && segundoDiv.parentNode.insertBefore(parrafo, segundoDiv);

//?- 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const template2 = () => `<p>'Voy dentro!</p>`
const insertar = document.querySelectorAll("div.fn-insert-here");

insertar.forEach((element, index) => {
    element.innerHTML += template2();
}); 