import { 
  PrintDashboard, 
  PrintLogin, 
  PrintPokemonPage,    } from "../pages";
import { printTemplateHangman }  from "../pages/Hangman/Hangman"; 
import { prinTopo } from "../pages/topo/app";
import { printTresEnRaya } from "../pages/tresRaya/tresEnRaya";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    case undefined:
      localStorage.getItem("user") ? PrintDashboard() : PrintLogin();
      buttonDashboard.style.display = "none";
      break;
      
    case "Dashboard":
      buttonDashboard.style.display = "none";
      PrintDashboard();     
      break;
  
      case "Pokemon":
      buttonDashboard.style.display = "block";
      PrintPokemonPage();
      break;

    case "Topo":
      buttonDashboard.style.display = "block";
      prinTopo();
      break;

    case "tresEnRaya":
      buttonDashboard.style.display = "block";  
      printTresEnRaya();
      break;
      
    case "Hangman":
      buttonDashboard.style.display = "block";  
      printTemplateHangman();
      break;

    default:
      break;
  }
};

