import "./Article.css";
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
  ));
