import "./FigurePokemon.css";

const template = (name, id, image, type) => `
<figure class="${type[0].type.name} figurePokemon" id=${id}>
    <img src=${image} alt=${name}/>
    <h3>${name}</h3>
    <p>ID: ${id}</p>
</figure>
`;

export const PrintFigurePokemon = (name, id, image, type) => {
    document.getElementById("galleryPokemon").innerHTML += template(
        name,
        id,
        image,
        type
    );
};