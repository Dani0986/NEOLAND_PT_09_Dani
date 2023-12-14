/*
export const getAllPokemon = async () => {
    const optionRequest = {
        method: "GET",
        url : "https://pokeapi.co/api/v2/pokemon/"


    };
    return await axiosUtil(optionRequest);
};

const urlPokemons = "https://pokeapi.co/api/v2/pokemon/";
*/

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
  
  // Uso de la función
  getAllPokemon().then((data) => {
    console.log(data); // Aquí tendrás la información sobre los primeros 150 Pokémon
});


