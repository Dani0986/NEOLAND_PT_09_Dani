
import { useState } from "react";

// Definimos un hook personalizado llamado useLocalStorage
//al que pasamos dos paramentros keyName(clave) y el valor por defecto
export const useLocalStorage = (keyName,defaultValue) => {
 // Inicializamos el estado storedValue usando useState. 
 //La función pasada a useState se ejecuta solo una vez al montar el componente.
    const[storedValue,setStoredValue] = useState(() => {
        //montamos un try/catch porque al estar interactuando con el navegador 
        //si no tenemos acceso poder capturar el error
        try {
            // Intentamos obtener el valor almacenado en localStorage usando la clave proporcionada.
            const value = window.localStorage.getItem(keyName);
            if(value){
                // Si hay un valor almacenado, lo parseamos de JSON a su forma original.
                return JSON.parse(value);
            }else{
                // Si no hay valor almacenado, guardamos el valor por defecto en localStorage.
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
                // Devolvemos el valor por defecto, que en nuestro caso es null

            }
            
        } catch (error) {
            // Si ocurre un error (por ejemplo, JSON.parse falla), devolvemos el valor por defecto.
            
            console.log(defaultValue);
            return defaultValue;
            
        }
    });
    //Hasta ahora hemos gestionado la comunicacion con el localStorage
    //tenemos que dar la posibilidad de añadirla a nuestro estado
    //Definimos una función para actualizar el valor almacenado tanto en el estado como en localStorage.

    const setValue = (newValue) => {
        try {
            // Intentamos guardar el nuevo valor en localStorage después de convertirlo a JSON.
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (error) {
             // Si ocurre un error al guardar en localStorage, lo registramos en la consola.
            console.log("error", error);
        }
        //Actualizamos el estado con el nuevo valor
            setStoredValue(newValue);
    };
   
    return[storedValue,setValue];
    // Devolvemos un array con el valor almacenado y la función para actualizarlo,
    // similar a como useState devuelve un estado y su función de actualización.
};