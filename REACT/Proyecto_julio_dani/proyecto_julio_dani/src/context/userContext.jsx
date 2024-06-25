import React, { createContext, useEffect, useState, useContext } from 'react';
//* Me importo Axios para poder usar el método GET y traerme la info
import axios from 'axios';
import PropTypes from 'prop-types'

//* exportamos el contexto para luego hacer lso custom hooks
export const userContext = createContext();

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const userProvider = ({ children }) => {
    //*USAMOS USESTATE PARA MANERJAR EL ESTADO, PARA AÑADIR LOS DATOS CUANDO SE TRAIGAN
  const [user, setUser] = useState([]);
 
  userProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  useEffect(() => {
    const obtenerUser = async () => {
      try {
                //* HACEMOS  UNA LLAMADA GET AL ENDPOINT DEL BACK
        const response = await axios.get('http://localhost:8081/api/v1/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener user:', error);
      }
    };
//* Y UNA VEZ TRAÍDO, LLAMAMOS A LA FUNCIÓN
    obtenerUser();
  }, []);
//* generamos el provider que luego llevamos a la app
  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  );
};