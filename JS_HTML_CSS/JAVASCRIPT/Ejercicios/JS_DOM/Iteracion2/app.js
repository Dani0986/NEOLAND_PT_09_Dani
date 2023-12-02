//?- 2.1 Inserta dinamicamente en un html un div vacio con javascript.

//*- version 1 -

const template =() => '<div></div>'; //* define una funcion, devuelve un string con un div vacio.
const divVacio0 = document.querySelector("body"); //* seleccionamos el elemento body en el documento.
divVacio0.innerHTML += template(); //* agrega el contenido del div al contenido html en el body.

//*- version 2 - 

const nuevoDiv = document.createElement('div');
const body = document.body; //* es una forma de acceder al elemento body
body.appendChild(nuevoDiv); //* agregar nuevos elementos a un documento existente o para mover un elemento de la página *//


//?- 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const templateP = () => `<div><p></p></div>`; //* creamos un div con un p dentro vacio
const agregarP = document.querySelector("body");
agregarP.innerHTML += templateP();


//?- 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const templates = () => '<div><ul class="list"></ul></div>'; //* creamos un div con una ul y le ponemos una clase para apuntar a ella.
const p6 = document.querySelector("body"); //* creamos variable y apuntamos al documento body
p6.innerHTML += templates(); //* agregamos los elementos al cuerpo del documento

const ul = document.querySelector(".list"); //* seleccionamos el elemento ul con la clase

for (let i=0; i< 6; i++) {  //* creamoos un bucle para crear 6 elementos li y los agreggamos al ul
    const parrafos = document.createElement("li"); //* creea un nuevo elemento li en cada iteracion.
    parrafos.textContent = `${i}`; //* agregamos texto a la cadena del elemento, al ponerle la variable i empieza el valor 0 y lo muestra en pantalla 
    ul.appendChild(parrafos); //* agrega cada elemento li al elemento ul
}


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

const Div2 = document.querySelectorAll("div"); //* apuntamos a los div
const segundoDiv = Div2[1]; //* asi seleccionamos el segundo div, esta enlazado al div2 que son los div.
const parrafo = document.createElement("p"); //*creamos el elemento parrafo
parrafo.textContent = 'Voy en medio!'; //* sirve para agregar texto
segundoDiv && segundoDiv.parentNode.insertBefore(parrafo, segundoDiv); //* se ejecuta si el segundoDiv es verdadero y se usa parentnode para que sea nodo padre y despues con el insterbefore se agrega.

//?- 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const template2 = () => `<p>'Voy dentro!</p>`; //* definimos una funcion con un parrafo y contenido
const insertar = document.querySelectorAll("div.fn-insert-here"); //* aqui ponemos los div con clase 

insertar.forEach((element, index) => {  //* iteramos sobre el elemento 
    element.innerHTML += template2(); //* agregamos el contenido del aprrafo a cada div
}); 