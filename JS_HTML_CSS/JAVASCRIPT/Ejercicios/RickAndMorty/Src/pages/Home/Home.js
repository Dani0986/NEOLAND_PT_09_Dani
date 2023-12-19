import { PrintFigureRicky } from "../../Components/Figure/Figure";
import { getDataRickBucle } from "../../utils/mappeoDataRicky"
import "./Home.css";
const template = () => `<div id="containerHomePage">

</div>`;

const getDataService = async () => {
  const data = await getDataRickBucle();
  console.log(data)
  printGallery(data);
};

const printGallery = (data) => {
  console.log(data);
  data.map((item) => PrintFigureRicky(item.name, item.image));
};



export const PrintHomePage = () => {
  document.querySelector("main").innerHTML = template();
  getDataService();
};
