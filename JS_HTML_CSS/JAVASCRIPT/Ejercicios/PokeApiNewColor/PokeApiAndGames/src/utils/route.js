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
      break;
      
    case "Dashboard":
      PrintDashboard();     
      break;
  
      case "Pokemon":
      PrintPokemonPage();
      break;

    case "Topo":
      prinTopo();
      break;

    case "tresEnRaya": 
      printTresEnRaya();
      break;
      
    case "Hangman":
      printTemplateHangman();
      break;

    default:
      break;
  }
};

