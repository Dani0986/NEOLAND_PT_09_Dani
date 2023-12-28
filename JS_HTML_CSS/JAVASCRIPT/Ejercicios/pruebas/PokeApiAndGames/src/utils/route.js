import { 
  PrintDashboard, 
  PrintLogin, 
  PrintPokemonPage,    } from "../pages";
import { printTemplateHangman }  from "../pages/Hangman/Hangman"; 
import { prinTopo } from "../pages/topo/app";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    case undefined:
      localStorage.getItem("user") ? PrintDashboard() : PrintLogin();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;

    case "Dashboard":
      PrintDashboard();
      break;

    case "Topo":
      prinTopo();
      break;
    case "Memory":
      // la funcion qur pinta la pagina PrintPageMemoryGame()
      break;
      
    case "Hangman":
      printTemplateHangman();
      break;

    default:
      break;
  }
};

