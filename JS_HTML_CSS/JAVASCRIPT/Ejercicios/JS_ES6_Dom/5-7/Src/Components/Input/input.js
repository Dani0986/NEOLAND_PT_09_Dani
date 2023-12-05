import { filterData } from "../../utils/filterData";
import { PrintArticle } from "../Article/article";


const template = `
    <label>Introduzca un jugador a buscar: </label>
  <input type="text" id="inputBusqueda">
  <button id="toShowFilterStreamers">Filter</button>
`;

export const listenersInput = () => {
  const inputElement = document.querySelector("#inputBusqueda");
  const filterStream = document.getElementById("toShowFilterStreamers");
  filterStream.addEventListener("click", (e) => {
    const valueInput = inputElement.value;
    document.getElementById("containerGallery").innerHTML = "";
    const elementosFiltrados = filterData(valueInput);
    console.log(inputElement.value);
    elementosFiltrados.map((jugador) =>
      PrintArticle(jugador.name, jugador.age, jugador.gameMorePlayed)
    );
  });
};

export const PrintInput = () => {
  document.querySelector("#busquedaPage").innerHTML += template;
};
