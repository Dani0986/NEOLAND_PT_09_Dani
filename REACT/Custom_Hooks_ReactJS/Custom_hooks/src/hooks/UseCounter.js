import  { useState } from 'react'

//Custom Hook contador que tiene la posibilidad de hacer crecer o decrecer una cuenta.
//por un lado generamos un state, count, que guarda el valor del contador
// y por otro lado definimos las acciones que podemos lanzar handleIncrement o handleDecrement

export const useCounter = (initialeCount) => {
    const [count, setCount] = useState(initialeCount);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
        console.log("Sumado!! Resultado:",count);
    };
    const handleDecrement = () => {
        setCount((prevCount) => Math.max(0, prevCount - 1));
        console.log("Restado!! Resultado:",count);
      };
    //utilizamos Math.max para asegurar que el resultado no es negativo
    //si lo fuera nos devuelve cero en su lugar
  return { count, handleIncrement, handleDecrement };  
  
}