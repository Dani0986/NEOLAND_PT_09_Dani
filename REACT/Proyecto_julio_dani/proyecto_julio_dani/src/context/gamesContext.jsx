/*import React, { createContext, useEffect, useState, useContext, useReducer } from 'react';
//* Me importo Axios para poder usar el método GET y traerme la info
import axios from 'axios';

//* exportamos el contexto para luego hacer lso custom hooks
export const GamesContext = createContext();

//! Aquí intenté hacerlo con un reducer, pero bueno, luego el context
//! usa el dispatch de esta reducer, pero que no hace nada, sol odevuelve el estado
const gamesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAMES':
      return action.payload;
    default:
      return state;
  }
};

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const GamesProvider = ({ children }) => {
    //*USAMOS USESTATE PARA MANERJAR EL ESTADO, PARA AÑADIR LOS DATOS CUANDO SE TRAIGAN
  const [games, dispatchGames] = useReducer(gamesReducer, []);

  useEffect(() => {
    const obtenerGames = async () => {
      try {
                //* HACEMOS  UNA LLAMADA GET AL ENDPOINT DEL BACK
        const response = await axios.get('http://localhost:8080/api/v1/Games');
        dispatchGames({ type: 'SET_Games', payload: response.data });
      } catch (error) {
        console.error('Error al obtener games:', error);
      }
    };
//* Y UNA VEZ TRAÍDO, LLAMAMOS A LA FUNCIÓN
    obtenerGames();
  }, [games]);
//* generamos el provider que luego llevamos a la app
  return (
    <gamesContext.Provider value={games}>
      {children}
    </gamesContext.Provider>
  );
};*/
// gamesContext.jsx

import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';

export const GamesContext = createContext(); // Actualizar nombre de exportación aquí

const gamesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAMES':
      return action.payload;
    default:
      return state;
  }
};

export const GamesProvider = ({ children }) => {
  const [games, dispatchGames] = useReducer(gamesReducer, []);

  useEffect(() => {
    const obtenerGames = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/Games');
        dispatchGames({ type: 'SET_GAMES', payload: response.data }); // Actualizar tipo de acción aquí
      } catch (error) {
        console.error('Error al obtener games:', error);
      }
    };

    obtenerGames();
  }, []);

  return (
    <GamesContext.Provider value={{ games, dispatchGames }}>
      {children}
    </GamesContext.Provider>
  );
};


