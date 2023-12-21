import "./Figure.css";

const template = (imageFigure, nameFigure) => `
<figure>
    <img src=${imageFigure} alt=${nameFigure}/>
    <h3>${nameFigure}</h3>
</figure>
`;

export const PrintFigureRicky = (name, image) => 
  (document.getElementById("gallery").innerHTML += template(image, name));
