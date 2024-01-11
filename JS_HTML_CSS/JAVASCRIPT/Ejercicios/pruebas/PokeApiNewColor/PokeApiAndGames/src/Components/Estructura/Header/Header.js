import { changeColorRGB, initControler } from "../../../utils";
import "./Header.css";

const template = () => `  
  <img
    src="./img/pokemon-logo1.png"
    alt="pokeapi"
    id="Logo"
    />
  <nav>  
    <img
      src="./public/img/dark.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="./public/img/gba2.png"
      alt=" navigate to home app"
      id="buttonDashboard"
      buttonDashboard.style.display = "none";
    />
    <img      
      src="./public/img/login.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

const listeners = () => {
  // evento del boton del cambio de color del fondo
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", () => {
    const colorRGB = changeColorRGB();
    document.body.style.background = colorRGB;
  });

  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", () => {
    console.log("pinto dashboard");   
    initControler("Dashboard");
  });

  const buttonLogout = document.getElementById("buttonLogout");

  buttonLogout.addEventListener("click", () => {
    localStorage.removeItem("user");
    initControler();
  });
};


export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  listeners();
};

