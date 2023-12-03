//?- 1.1 Basandote en el array siguiente, crea una lista ul > li 
//?- dinámicamente en el html que imprima cada uno de los paises.

document.addEventListener('DOMContentLoaded', function () {  //* importante DOMcontentLoaded, sera lo primnero que carga en el html y asi puedes acceder a los elementos del dom.
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
    const printElement = document.querySelector('[data-function="printHere"]');
    const ulElement = document.createElement('ul'); //* crear lista ul
    
    countries.forEach((country) => { //* iteramos sobre el arrya y crear elementos li
        const liElement = document.createElement('li');
        liElement.textContent = country; //* un nuevo elemento li, que establece el texto a traves de la variable
        ulElement.appendChild(liElement); //* agregamos el elemento al li
    });
    
    printElement.appendChild(ulElement); //* agregamos la lista ul al html
});





//?- 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelector(".fn-remove-me");

eliminar.remove();

//?- 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//?- en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];



//?- 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//?- h4 para el titulo y otro elemento img para la imagen.

const countries0 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


//?- 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//?- elemento de la serie de divs.



//?- 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//?- divs que elimine ese mismo elemento del html.
