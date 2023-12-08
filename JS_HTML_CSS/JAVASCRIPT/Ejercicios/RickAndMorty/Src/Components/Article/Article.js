/*import "./Article.css";
const template = (name, age, gameMorePlayed) => `<article>
<h3>${name}</h3>
<p>Age: ${age}</p>
<p>Juego: ${gameMorePlayed}</p>
</article>`;

export const PrintArticle = (name, age, gameMorePlayed) =>
  (document.getElementById("containerGallery").innerHTML += template(
    name,
    age,
    gameMorePlayed
  )); */



  import "./Article.css";
const template = (name, species, gender) => `<article>
<h3>${name}</h3>
<p>Species: ${species}</p>
<p>Gender: ${gender}</p>
</article>`;

export const PrintArticle = (name, species, gender ) =>
  (document.getElementById("containerGallery").innerHTML += template(
    name,
    species,
    gender,

));
