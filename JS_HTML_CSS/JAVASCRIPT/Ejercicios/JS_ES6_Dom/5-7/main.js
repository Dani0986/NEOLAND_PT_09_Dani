//?- 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//?- los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//?- introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
//?- me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//?- En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.


import { PrintHomePage } from "./Src/Pages/Home/home";
import { initTemplate } from "./Src/Utils/initTemplate";
import "./style.css";

initTemplate();
PrintHomePage();

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');