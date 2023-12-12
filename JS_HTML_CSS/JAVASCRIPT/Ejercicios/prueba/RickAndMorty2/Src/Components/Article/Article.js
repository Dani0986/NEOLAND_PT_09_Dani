
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
