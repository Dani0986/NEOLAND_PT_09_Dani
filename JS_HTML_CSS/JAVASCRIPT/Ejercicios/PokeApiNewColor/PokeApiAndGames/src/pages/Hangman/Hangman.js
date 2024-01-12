import { guionesHangman, hangmanComprobar } from "../../utils/Hangman/index";
import { palabraRandom } from "../../utils/Hangman/PalabraRandomHangman";
import "./Hangman.css";


const template = () => `
<div id="hangmanDiv1">
<div id="hangmanDiv2">
<h1 class="tituloHangman">HANGMIME</h1>
<p id="titulo2">Descubre la palabra correcta antes de que MR.Mime se de a la fuga</p>
<section id="palabra">
      <img id="hangmanImg" src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1683122726/hagmanMonigote0_xiqwwm.png"/>
      <div class="guiones"></div>
    </section>
    <section id="submit">
      <input id="hangmanInput" type="textarea" placeholder="Introduce una letra" maxlength="1"/>
      <button id="hangmanComprobar">Comprobar</button>
    </section>
</div>
</div>`;


const addListeners = (palabra) => {
  const buttonComprobar = document.querySelector("#hangmanComprobar");

  buttonComprobar.addEventListener("click", () => {
    const input = document.querySelector("#hangmanInput");
    hangmanComprobar(input.value, palabra);
  });
};

export const printTemplateHangman = () => {
  document.querySelector("#buttonDashboard").style.display = "block";
  document.querySelector("main").innerHTML = template();

  let palabra = palabraRandom();

  guionesHangman(palabra[0]);
  addListeners(palabra);
};