export const filterDataPokemon = (data, palabraDelInput) => {
    return data.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(palabraDelInput.toLowerCase())
    );
};

export const filterDataPokemonSelect = (data, typeOnChangeSelect) => {
    const filterPokemon = data.filter ((pokemon) =>
    pokemon.type[0].type.name
    .toLowerCase()
    .includes(typeOnChangeSelect.toLowerCase())
    );

    const filterPokemonPositionOne = data.filter((pokemon) =>
    pokemon.type[1]?.type.name
      .toLowerCase()
      .includes(typeOnChangeSelect.toLowerCase())
  );

if (typeOnChangeSelect == "All pokemon") {
    return data;
} else if (filterPokemon.lenght == 0 ) {
    return filterPokemonPositionOne; 
} else {
    return filterPokemon;
}
};

