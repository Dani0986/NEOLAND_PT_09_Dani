import {PrintFigurePokemon, 
       PrintSelectTypePokemon,
        PrintSpinner,        
    } from "../../Components";
import {
        filterDataPokemon,
        getDataPokemonBucle,
        typePokemon,
} from "../../utils"
import "./pokemon.css";

const template = () => `
    <div id="pokemon">
     <div id="containerFilter">
     <div id="spinnerButtonFilter"></div>
     <div id="filterButton"></div>
     <input
        type="text"
        id="inputpokemon"
        placeholder="Buscar pokemon favorito"
        />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
    </div>
`;

const getDataService = async () => {
    PrintSpinner();
    const data = await getDataPokemonBucle();
    const types = typePokemon(data);
    PrintSelectTypePokemon(types, data);

    listeners(data);
    console.log(data);
    printGallery(data);
    document.getElementById("spinner").innerHTML = "";
}

export const printGallery = (dataprint) => {
    document.getElementById("galleryPokemon").innerHTML = "";
    dataprint.map((pokemon) => 
     PrintFigurePokemon(pokemon.name, pokemon.id, pokemon.image, pokemon.type)
     ); 
};

const listeners = (totalData) => {
    const inputPokemon = document.getElementById("inputpokemon");

    inputPokemon.addEventListener("input", (e) => {
        const filterPokemon = filterDataPokemon(totalData, e.target.value);
        printGallery(filterPokemon);
      });
    };
    

export const PrintPokemonPage = () => {
    document.querySelector("main").innerHTML = template();
    getDataService();
}