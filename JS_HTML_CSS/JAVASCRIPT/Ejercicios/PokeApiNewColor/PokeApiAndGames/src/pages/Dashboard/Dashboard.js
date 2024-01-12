import { initControler } from "../../utils/index";
import "./Dashboard.css";



const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="./img/pokeapi.png"
            alt="go to page pokemon"
          />
          <h2 class="Pk">POKEDEX</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img  id="navigateTopo"
            src="./public/img/dugtr.jpg"
            alt=" go to wacka topo game"          
          />
          <h2 class="Wd">WACKA DIGLETT</h2>
        </figure>
      </li>
      <li>
        <figure id="navigatetresEnRaya">
          <img 
            src="./public/img/tres02.png"
            alt="go to tresEnRaya"
          />
          <h2 class="Tr">POKE-TICTACTOE</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateHangman">
          <img
            src="./public/img/hangm.png"
            alt="go to hangman"
          />
          <h2 class="Hg">HANGMIME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const listeners = () => {
  
  const navigateTopoElement = document.getElementById("navigateTopo");
  navigateTopoElement.addEventListener("click", () => {
    console.log("topo");
    initControler("Topo");
  });
  
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateHangman = document.getElementById("navigateHangman");
  navigateHangman.addEventListener("click", () => {
    initControler("Hangman");
  });
  
  const navigatetresEnRaya = document.getElementById("navigatetresEnRaya");
  navigatetresEnRaya.addEventListener("click", () => {
    console.log("Click en navigatetresEnRaya");
    initControler("tresEnRaya");
  });
};

export const PrintDashboard = () => {
  document.querySelector("#buttonDashboard").style.display = "none";
  document.querySelector("nav").style.display = "flex";
  document.querySelector("main").innerHTML = template();
  listeners();
};

/*
const handleTopoClick = () => {
  console.log("topo")
  initControler("Topo"); 
};*/

/*function handleTopoClick() {
  console.log("handleTopoClick called");
  // Abre el juego al hacer clic en "navigateTopo"
  PrintGame();
} */ 

/*function handleTopoClick() {
  console.log("handleTopoClick called");
  window.location.href = '';
  document.querySelector("main").innerHTML = '';    
  console.log("topo");
};*/

/*
<img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2></h2>
          */
/*
          <img  id="navigateTopo"
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"*/
/*
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"*/