import { PrintFigureRicky } from "../../Components/Figure/Figure";
import { mapeoData } from "../../utils/mappeoDataRicky";
import "./Home.css";
const template = () => `<div id="containerHomePage">

</div>`;

const getData = async () => {
  const data = await mapeoData();
  printGallery(data);
};

const printGallery = (data) => {
  console.log(data);
  data.map((item) => PrintFigureRicky(item.name, item.image));
};

export const PrintHomePage = () => {
  document.querySelector("main").innerHTML = template();
  getData();
};
