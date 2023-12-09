//?- 1.1 Basandote en el array siguiente, crea una lista ul > li 
//?- dinámicamente en el html que imprima cada uno de los paises.

// document.addEventListener('DOMContentLoaded', function () {   importante DOMcontentLoaded, sera lo primnero que carga en el html y asi puedes acceder a los elementos del dom.*/
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
    const printElement = document.querySelector('[data-function="printHere"]');
    const ulElement = document.createElement('ul'); //* crear lista ul
    
    countries.forEach((country) => { //* iteramos sobre el arrya y crear elementos li
        const liElement = document.createElement('li');
        liElement.textContent = country; //* un nuevo elemento li, que establece el texto a traves de la variable
        ulElement.appendChild(liElement); //* agregamos el elemento al li
    });
    
    printElement.appendChild(ulElement); //* agregamos la lista ul al html






//?- 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelector(".fn-remove-me"); 

eliminar.remove();

//?- 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//?- en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const unorderItem = document.createElement('ul');
cars.forEach((car, index) => {
    const listItems = document.createElement('li');
    listItems.textContent = car;
    unorderItem.appendChild(listItems);
});

const printCar = document.querySelector('[data-function="printHere"]');
printCar.appendChild(unorderItem);

//?- 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//?- h4 para el titulo y otro elemento img para la imagen.

const countries0 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const contenedoresDiv = document.createElement("div"); //* creo un contenedoer con el div
contenedoresDiv.id = "ContenedorDinamico"; 
document.body.appendChild(contenedoresDiv);

countries0.forEach((country, index) => {              //*itero sobre el array y luego creo divs y h4
    const divElemento = document.createElement("div");
    const h4Elemento = document.createElement("h4");
    h4Elemento.textContent = country.title;
    const imgElemento = document.createElement("img"); // * creo los elementos de la imagen y el src para mostrarla
    imgElemento.src = country.imgUrl;
    imgElemento.alt = country.title;
    divElemento.appendChild(h4Elemento); //* agregamos el h4 y las imgenes al div
    divElemento.appendChild(imgElemento);
    contenedoresDiv.appendChild(divElemento); //* agregart el div al contenedor
});




//?- 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//?- elemento de la serie de divs.

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar último elemento";
botonEliminar.addEventListener("click", function() {
    const contenedoresDiv = document.getElementById("ContenedorDinamico");
    const divs = contenedoresDiv.querySelectorAll("div");
    const ultimoDiv = divs[divs.length - 1];
    if (ultimoDiv) {
        contenedoresDiv.removeChild(ultimoDiv);
    }
});

document.body.appendChild(botonEliminar);


//?- 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//?- divs que elimine ese mismo elemento del html.


const contenedorDinamico = document.getElementById("ContenedorDinamico");
const divs = contenedorDinamico.querySelectorAll("div");


divs.forEach((div, index) => {
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar este elemento";
    botonEliminar.addEventListener("click", function() {
        contenedorDinamico.removeChild(div);
    });
    
    div.appendChild(botonEliminar);
});






/*const botonAEliminar = document.createElement("button");
botonAEliminar.textContent = "Eliminar último elemento";
botonAEliminar.addEventListener("click", function() {
    const contenedoresDiv0 = document.getElementById("ContenedorDinamico");
    const divs0 = contenedoresDiv.querySelectorAll("div");
    const ultimoDiv0 = divs0[divs0.length - 1];
    if (ultimoDiv0) {
        contenedoresDiv0.removeChild(ultimoDiv0);
    }
});

document.body.appendChild(botonAEliminar);*/