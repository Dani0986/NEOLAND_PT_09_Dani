import "./FigurePokemon.css";
import { toggleFavorite, handleFavoriteClick } from "../../utils/Pokemon/favoritePokemon";

const primeraletra = (string) => { //creo una funcion que usa chartAt para poner solo la primera letra en mayuscula y luego hace que me lo devuelva en string y slice para agregar
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const template = (name, id, image, type, hp, weight) => `
<figure class="${type[0].type.name} figurePokemon" onclick="handleFavoriteClick('${id}★')">
    <img src=${image} alt=${name}/>
    <h3>${primeraletra(name)}</h3>
    <p>ID: ${id}</p>
    <p>Health: ${hp}</p>
    <p>Weight: ${weight}</p>
</figure>
`;
export const PrintFigurePokemon = (name, id, image, type, hp, weight) => {
    const pokemonContainer = document.getElementById("galleryPokemon");

    const figureElement = document.createElement("figure");
    figureElement.className = `${type[0].type.name} figurePokemon`;

    // Agrega un contenedor para la imagen y la estrella
    const contentContainer = document.createElement("div");
    contentContainer.className = "content-container";

    // Configura el contenido del contenedor
    contentContainer.innerHTML = `
        <img src=${image} alt=${name}/>
        <h3>${primeraletra(name)}</h3>
        <p>ID: ${id}</p>
        <p>Health: ${hp}</p>
        <p>Weight: ${weight}</p>
        <div class="favorite-icon hidden">&#9733;</div>
    `;

    figureElement.appendChild(contentContainer);

    figureElement.onclick = () => {
        handleFavoriteClick(id);
        const favoriteIcon = contentContainer.querySelector('.favorite-icon');
        if (favoriteIcon.style.display === 'none') {
            favoriteIcon.style.display = 'block';
        } else {
            favoriteIcon.style.display = 'none';
        }
    
    };

    pokemonContainer.appendChild(figureElement);
};