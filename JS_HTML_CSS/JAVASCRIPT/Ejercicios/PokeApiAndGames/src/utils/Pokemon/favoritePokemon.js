

let favoritePokemons = [];

export const toggleFavorite = (pokemonId) => {
    const isFavorite = favoritePokemons.includes(pokemonId);

    if (isFavorite) {
        favoritePokemons = favoritePokemons.filter((id) => id !== pokemonId);
        console.log(`Eliminado de favoritos: ${pokemonId}`);
    } else {
        favoritePokemons.push(pokemonId);
        console.log(`Añadido a favoritos: ${pokemonId}`);
    }
};

export const handleFavoriteClick = (pokemonId) => {
    toggleFavorite(pokemonId);
    console.log(`Clic en favorito: ${pokemonId}`);
};