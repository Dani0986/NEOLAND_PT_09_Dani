const template = `<div id="containerGallery"></div>`;
import "./Gallery.css";
export const PrintGallery = () =>
  (document.querySelector("#busquedaPage").innerHTML += template);
