import { useState } from "react";

//* Custom Hook, usando el useState
export function useLocalStorage(keyName,defaultValue){
    const [storedValue, setStoredValue] = useState(()=> {
// usamos un try catch
try{
//* En value, almacena el valor que haya en KEYNAME en window.localStorage
    const value = window.localStorage.getItem(keyName);

//* Si el valor existe en localStorage, lo devuelves
    if (value) {
        return JSON.parse(value);} 
//* Si no, defines el valor KEYNAME en window.localStorage como el defaultValue que asignes
        else {
            window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
            return defaultValue;
        }
} catch (error) { return defaultValue}
    }
); 


// ACABAMOS LA CALLBACK DEL USESTATE Y SEGUIMOS EN EL CUSTOMHOOK

//* CAMBIAMOS EL VALOR Y LO METEMOS EN KEYNAME Y EN STOREDVALUE DEL CUSTOM HOOK?
const setValue =(value)=>{
    try{
        window.localStorage.setItem(keyName, JSON.stringify(value));
    } catch (error) {
        console.log(error)
    }
    setStoredValue(value);
}
return [storedValue, setValue]
}