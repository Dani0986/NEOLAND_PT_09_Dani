import { initControler } from "../../utils/index";
import "./Dashboard.css";


const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img  id="navigateTopo"
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
            alt=" go to wacka topo game"          
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
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
};

export const PrintDashboard = () => {
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