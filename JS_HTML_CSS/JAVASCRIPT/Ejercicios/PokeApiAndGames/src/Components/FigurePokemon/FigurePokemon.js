import "./FigurePokemon.css";

const primeraletra = (string) => { //creo una funcion que usa chartAt para poner solo la primera letra en mayuscula y luego hace que me lo devuelva en string y slice para agregar
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const template = (name, id, image, type, hp) => `
<figure class="${type[0].type.name} figurePokemon">
    <img src=${image} alt=${name}/>
    <h3>${primeraletra(name)}</h3>
    <p>ID: ${id}</p>
    <p>Base Stats: ${hp}</p>
</figure>
`;

export const PrintFigurePokemon = (name, id, image, type, hp,) => {
    document.getElementById("galleryPokemon").innerHTML += template(
        name,
        id,
        image,
        type,
        hp,
    );
};