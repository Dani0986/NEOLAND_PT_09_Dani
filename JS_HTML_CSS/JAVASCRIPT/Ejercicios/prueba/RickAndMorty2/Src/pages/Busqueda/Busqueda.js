import { PrintInput, listenersInput } from "../../Components/Input/Input";
import { PrintGallery } from "../../Components/GalleryBusqueda/GalleryBusqueda";

import "./Busqueda.css";
const template = () => `<div id="busquedaPage"></div>`;

export const PrintBusquedaPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintInput();
  PrintGallery();
  listenersInput();
};
