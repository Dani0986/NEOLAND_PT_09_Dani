/*import { printGallery } from "../../pages";
import { filterDataPokemonSelect } from "./../../utils";
import "./Select.css";

const listener = (allData) => {
    const select = document.querySelector("select");
  
    select.addEventListener("change", (e) => {
      const filterInfoPokemon = filterDataPokemonSelect(allData, e.target.value);
      printGallery(filterInfoPokemon);
    });
  };

export const PrintSelectTypePokemon = (type, allData) => {
    const selectType = document.createElement("select");
    const optionType = document.createElement("option");
    optionType.textContent = "All pokemon";
    selectType.appendChild(optionType);
  
    type.map((type) => {
      const optionType = document.createElement("option");
      optionType.textContent = type;
      selectType.appendChild(optionType);
    });
  
    document.getElementById("filterButton").appendChild(selectType);
  
    listener(allData);
  };*/
