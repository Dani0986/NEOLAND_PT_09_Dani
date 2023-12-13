import { PrintDashboard, PrintLogin } from "../pages";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    case undefined:
      localStorage.getItem("user") ? PrintDashboard() : PrintLogin();
    case "Pokemon":
      // la funcion qur pinta la pagina PrintPagePokemon()
      break;

    case "Dashboard":
      // la funcion qur pinta la pagina PrintPageDash()
      break;

    case "Topo":
      // la funcion qur pinta la pagina PrintPageTopo()
      break;
    case "Memory":
      // la funcion qur pinta la pagina PrintPageMemoryGame()
      break;

    default:
      break;
  }
};
