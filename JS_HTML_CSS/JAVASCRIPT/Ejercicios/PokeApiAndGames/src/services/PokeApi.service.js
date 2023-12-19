import { axiosUtil } from "../utils/axios"

export const getByIdPokemon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };

  return await axiosUtil(optionsRequest);
};


/*
export const getAllPokemon = async () => {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const numberOfPokemon = 150;
    const pokemonData = [];
  
    for (let i = 1; i <= numberOfPokemon; i++) {
      const response = await fetch(`${baseUrl}${i}`);
      const data = await response.json();
      pokemonData.push(data);
    }
  
    return pokemonData;
  }
  

  getAllPokemon().then((data) => {
    console.log(data); // información sobre los primeros 150 Pokémon
});*/


