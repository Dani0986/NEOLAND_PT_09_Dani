import {PrintFigurePokemon, 
       PrintSelectTypePokemon,
        PrintSpinner,        
    } from "../../Components";
import {
        filterDataPokemon,
        getDataPokemonBucle,
        typePokemon,
} from "../../utils/Pokemon";

 
import "./pokemon.css";

export const template = () => `
    <div id="pokemon">
     <div id="containerFilter">
     <div id="spinnerButtonFilter"></div>
     <div id="filterButton"></div>
     <div id="container">
     <input
        type="text"
        id="inputpokemon"
        placeholder="Busca a tu Pokémon favorito" />
     <div id="favorito">Haz doble click para seleccionar tus Pokémon favoritos ★</div>    
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
    </div>
`;


const itemsPerPage = 14; // variables para la paginacion, numero de elementos por pagina
let currentPage = 1;  // pagina actual
let globalData = []; // poner todos los datos globlaes


const displayData = () => {  // muestra los pokenmons en la pagina
  const startIndex = (currentPage - 1) * itemsPerPage;  // esta es la pagina donde empezamos y los elementos por pagina
  const endIndex = startIndex + itemsPerPage; // el principio y el fin de pagina
  const currentData = globalData.slice(startIndex, endIndex); // aqui tenemos los datos de inicio y fin de pagina
  printGallery(currentData); // lo pintamos en el currentdata
};

const renderPagination = () => {  
  const totalPages = Math.ceil(globalData.length / itemsPerPage); // calcula el numero de paginas total para mostrar
  const paginationElement = document.getElementById('paginacion'); // id de paginacion
  paginationElement.innerHTML = ''; // limpiar html

  for (let i = 1; i <= totalPages; i++) { // iterar sobre las paginas
    const pageLink = document.createElement('a'); // crea un elemento de enlace
    pageLink.href = '#'; //crear atributo href
    pageLink.textContent = i; // establecer en numero de la pagina 

    
    pageLink.addEventListener('click', () => {  // hacer el evento de clic en la página
      handlePageChange(i); // se vincula a la pagina
    });

    paginationElement.appendChild(pageLink);
  }
};

const handlePageChange = (newPage) => { //cambia la pagina
  currentPage = newPage;
  displayData();
  renderPagination();
};

const getDataService = async () => { //llamamos a l funcion async
  PrintSpinner();
  globalData = await getDataPokemonBucle(); // aqui tenemos todos los pokemon en la llamada
  const types = typePokemon(globalData);
  PrintSelectTypePokemon(types, globalData);

  listeners();
  console.log(globalData);
  displayData();
  renderPagination(); // funciones de llamada

  document.getElementById('spinner').innerHTML = ''; // esto es que salga un spinner mientras carga
};


export const printGallery = (dataprint) => { // eportamos los datos en la galleria 
  document.getElementById('galleryPokemon').innerHTML = ''; // lo inyectamos en html
  dataprint.forEach((pokemon) => { // iteramos el array con sus id
    PrintFigurePokemon(pokemon.name, pokemon.id, pokemon.image, pokemon.type, pokemon.hp, pokemon.weight,);
  });
};

const listeners = () => { 
  const inputPokemon = document.getElementById('inputpokemon');

  inputPokemon.addEventListener('input', (e) => {
    const filterPokemon = filterDataPokemon(globalData, e.target.value); //poner un input para filtrar y su valor
    currentPage = 1; // Reinicia la página al buscar
    displayData();
    renderPagination();
    printGallery(filterPokemon);
  });
};

export const PrintPokemonPage = () => {
  document.querySelector("#buttonDashboard").style.display = "block";
  document.querySelector('main').innerHTML = template();
  getDataService();
};