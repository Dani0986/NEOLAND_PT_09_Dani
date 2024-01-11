
import { PrintBusquedaPage } from "../../pages/Busqueda/Busqueda";
import { PrintHomePage } from "../../pages/Home/Home";
import "./Nav.css";

const template = () => `
<nav>
    <button id="navegateHome" class="btn-nav" >Personajes</button>
    </nav>`;


export const Listener = () => {
  const home = document.getElementById("navegateHome");
  navegateHome.style.display = "none";
  home.addEventListener("click", () => {
    PrintHomePage();
  });
/*
  const busqueda = document.getElementById("navegateBusqueta");
  busqueda.addEventListener("click", () => {
    PrintBusquedaPage();
  });*/
};

export const PrintNav = () => {
  document.querySelector("header").innerHTML += template();
};
