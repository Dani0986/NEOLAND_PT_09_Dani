import React, { createContext, useEffect, useState, useContext } from 'react';
//* Me importo Axios para poder usar el método GET y traerme la info
import axios from 'axios';
import PropTypes from 'prop-types';

//* exportamos el contexto para luego hacer lso custom hooks
export const CharacterContext = createContext();

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const CharacterProvider = ({ children }) => {
  //*USAMOS USESTATE PARA MANERJAR EL ESTADO, PARA AÑADIR LOS DATOS CUANDO SE TRAIGAN
  const [Character, setCharacter] = useState([]);

  CharacterProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  useEffect(() => {
    const obtenerCharacter = async () => {
      try {
        //* HACEMOS  UNA LLAMADA GET AL ENDPOINT DEL BACK
        const response = await axios.get('http://localhost:/api/v1/character');
        setCharacter(response.data);
      } catch (error) {
        console.error('Error al obtener Caracter:', error);
      }
    };
//* Y UNA VEZ TRAÍDO, LLAMAMOS A LA FUNCIÓN
    obtenerCharacter();
  }, []);
//* generamos el provider que luego llevamos a la app
  return (
    <CharacterContext.Provider value={Character}>
      {children}
    </CharacterContext.Provider>
  );
};