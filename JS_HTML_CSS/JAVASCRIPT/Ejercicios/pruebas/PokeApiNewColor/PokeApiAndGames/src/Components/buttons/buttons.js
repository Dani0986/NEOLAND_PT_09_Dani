import { printGallery } from "../../pages";
import { filterPokemon } from "../../utils/Pokemon";
import "./buttons.css";

  const listener = (allData, types) => {
    types.forEach((type) => {
      const button = document.getElementById(`btn-${type}`);
  /*    console.log(button);*/
      button.addEventListener("click", () => {
    /*    console.log(`Button ${type} clicked`);*/
        const filterInfoPokemon = filterPokemon(allData, type);
    /*    console.log(filterInfoPokemon);*/
        printGallery(filterInfoPokemon);
      });
    });
  };

  const unmayus= (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  export const PrintSelectTypePokemon = (types, allData) => {
    const filterButtonContainer = document.getElementById("filterButton");
  
    types.forEach((type) => {
      const button = document.createElement("button");
      button.textContent = unmayus(type);
      button.id = `btn-${type}`;
      filterButtonContainer.appendChild(button);
    });
  
    const allPokemonButton = document.createElement("button");
      allPokemonButton.textContent = "All pokemon";
      allPokemonButton.id = "btn-All"; 
      filterButtonContainer.appendChild(allPokemonButton);
      allPokemonButton.addEventListener("click", () => {
     /*   console.log("Button All clicked");*/
        const filterInfoPokemon = filterPokemon(allData, "All pokemon");
    /*    console.log(filterInfoPokemon);*/
        printGallery(filterInfoPokemon);
      });

    listener(allData, types);
 
  };
