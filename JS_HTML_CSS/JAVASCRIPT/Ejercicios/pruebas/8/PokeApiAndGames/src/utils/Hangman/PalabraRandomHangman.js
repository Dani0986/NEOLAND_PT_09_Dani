import {numeroRandom } from "../../utils/numeroRandom";

const palabras = [
    "chubasquero",
    "perro",
    "nieve",
    "tormenta",
    "ordenador",
    "agobio",
  ];

  
  export const palabraRandom = () => {
    const palabra = palabras[numeroRandom(palabras)];
    let arrayPalabra = palabra.split("");
    return [arrayPalabra, palabra];
  };
  