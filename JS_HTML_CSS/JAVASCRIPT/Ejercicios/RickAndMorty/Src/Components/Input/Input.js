import { filterData } from "../../utils/filterData";
import { PrintArticle } from "../Article/Article";

const template = `
    <label>Introduzca un jugador a buscar: </label>
  <input type="text" id="inputBusqueda">

`;

export const listenersInput = () => {
  const inputElement = document.querySelector("#inputBusqueda");

  inputElement.addEventListener("input", (e) => {
    document.getElementById("containerGallery").innerHTML = "";
    const elementosFiltrados = filterData(e.target.value);

    elementosFiltrados.map((jugador) =>
      PrintArticle(jugador.name, jugador.age, jugador.gameMorePlayed)
    );
  });
};

export const PrintInput = () => {
  document.querySelector("#busquedaPage").innerHTML += template;
};
