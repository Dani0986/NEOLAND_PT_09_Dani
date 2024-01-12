

const itemsPerPage = 14; // variables para la paginacion, numero de elementos por pagina
let currentPage = 1;  // pagina actual
let globalData = []; // poner todos los datos globlaes


 export const displayData = () => {  // muestra los pokenmons en la pagina
  const startIndex = (currentPage - 1) * itemsPerPage;  // esta es la pagina donde empezamos y los elementos por pagina
  const endIndex = startIndex + itemsPerPage; // el principio y el fin de pagina
  const currentData = globalData.slice(startIndex, endIndex); // aqui tenemos los datos de inicio y fin de pagina
  printGallery(currentData); // lo pintamos en el currentdata
};

export const renderPagination = () => {  
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

export const handlePageChange = (newPage) => { //cambia la pagina
  currentPage = newPage;
  displayData();
  renderPagination();
};