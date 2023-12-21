import { PrintFigureRicky } from "../../Components/Figure/Figure";
import { filterRick } from "../../utils/filterRick";
import { mapeoData } from "../../utils/mappeoDataRicky";
import "./Home.css";
const template = () => `<div id="containerHomePage">
<input type="text"id="inputRick">
<button id="btnBuscar">BUSCAR</button>
<div id="gallery"></div>

</div>`;

const getData = async () => {
  const data = await mapeoData();
  listeners(data);
  printGallery(data);
};

const printGallery = (dataPrint) => {
  console.log(dataPrint);
  dataPrint.map((item) => PrintFigureRicky(item.name, item.image));
};

const listeners = (dataAfiltrar) => {
  // const input = document.getElementById("inputRick");
  // input.addEventListener("change", (event) => {
  //   const dataFiltrada = filterRick(dataAfiltrar, event.target.value);
  //   document.getElementById("gallery").innerHTML = "";
  //   printGallery(dataFiltrada);
  // });

  const button = document.getElementById("btnBuscar");
  button.addEventListener("click", () => {
    const input = document.getElementById("inputRick");
    const dataFiltrada = filterRick(dataAfiltrar, input.value);
    document.getElementById("gallery").innerHTML = "";
    printGallery(dataFiltrada);
  });
};

export const PrintHomePage = () => {
  document.querySelector("main").innerHTML = template();
  getData();
};
