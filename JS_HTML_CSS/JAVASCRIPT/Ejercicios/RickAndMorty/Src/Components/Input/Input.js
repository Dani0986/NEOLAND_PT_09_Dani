import { filterData } from "../../utils/filterData";
import { PrintArticle } from "../Article/Article";

const template = `
    <label>Busca tu personaje: </label>
  <input type="text" id="inputBusqueda">

`;

export const listenersInput = () => {
  const inputElement = document.querySelector("#inputBusqueda");

  inputElement.addEventListener("input", (e) => {
    document.getElementById("containerGallery").innerHTML = "";
    const elementosFiltrados = filterData(e.target.value);

    elementosFiltrados.map((jugador) =>
      PrintArticle(jugador.name, jugador.species, jugador.gender)
    );
  });
};

export const PrintInput = () => {
  document.querySelector("#busquedaPage").innerHTML += template;
};
