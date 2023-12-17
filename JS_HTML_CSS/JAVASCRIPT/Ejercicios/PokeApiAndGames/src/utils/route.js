import { PrintDashboard, PrintLogin } from "../pages";
import { prinTopo } from "../pages/topo/app";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    case undefined:
      localStorage.getItem("user") ? PrintDashboard() : PrintLogin();
      break;
    case "Pokemon":
      // la funcion qur pinta la pagina PrintPagePokemon()
      break;

    case "Dashboard":
      // la funcion qur pinta la pagina PrintPageDash()
      break;

    case "Topo":
      prinTopo();
      break;
    case "Memory":
      // la funcion qur pinta la pagina PrintPageMemoryGame()
      break;

    default:
      break;
  }
};
