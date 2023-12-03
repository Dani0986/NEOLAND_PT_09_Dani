import { PrintNav } from "../../Nav/Nav";
import "./Header.css";

const template = (texto) => `<header>
<h1>${texto}</h1>
</header>`;

export const PrintHeader = (texto) => {
  document.getElementById("app").innerHTML += template(texto);
  PrintNav();
};
