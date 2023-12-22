import { PrintTemplateFooter, PrintTemplateHeader } from "../Components/index"

export const initTemplate = () => {
  const app = document.getElementById("app");

  // creamos los elementos de la estructura
  const footer = document.createElement("footer");
  const header = document.createElement("header");
  const main = document.createElement("main");

  app.append(header, main, footer);

  PrintTemplateHeader();
  PrintTemplateFooter();
};
