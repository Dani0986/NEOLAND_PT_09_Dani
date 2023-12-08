import { PrintFooter } from "../Components/Estructura/Footer/Footer";
import { PrintHeader } from "../Components/Estructura/Header/Header";
import { PrintMain } from "../Components/Estructura/Main/Main";
import { Listener } from "../Components/Nav/Nav";

export const initTemplate = () => {
  PrintHeader("Rick&Morty");
  PrintMain();
  PrintFooter();
  Listener();
};
