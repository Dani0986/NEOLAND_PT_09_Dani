import { printGallery } from "../../pages";
import { filterDataPokemonSelect } from "./../../utils";
import "./buttons.css";

  const listener = (allData, types) => {
    types.forEach((type) => {
      const button = document.getElementById(`btn-${type}`);
      button.addEventListener("click", () => {
        const filterInfoPokemon = filterDataPokemonSelect(allData, type);
        printGallery(filterInfoPokemon);
      });
    });
  };
  
  export const PrintSelectTypePokemon = (types, allData) => {
    const filterButtonContainer = document.getElementById("filterButton");
  
    types.forEach((type) => {
      const button = document.createElement("button");
      button.textContent = type;
      button.id = `btn-${type}`;
      filterButtonContainer.appendChild(button);
    });
  
    const allPokemonButton = document.createElement("button");
    allPokemonButton.textContent = "All pokemon";
    allPokemonButton.id = "btn-All";
    filterButtonContainer.appendChild(allPokemonButton);
  
    listener(allData, types);
  };
