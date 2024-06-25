import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types'

//* exportamos el contexto para luego hacer lso custom hooks
export const ComentariosContext = createContext();

//* GENERAMOS LAS FUNCIONES REDUCER 

//* ESTO LO LLAMAREMOS EN LA PERFIL PAGE 
const comentariosReducer = (state, action) => {
  switch (action.type) {
//* CON UN ... PARA AÑADIR COMENTARIOS
    case 'AGREGAR_COMENTARIO':
      return [...state, action.payload];
//* Y UN FILTRADO DEL INDEX DEL COMENTARIO QUE TE DA UN NUEVO ARRAY CON
//* TODOS LOS QUE SEAN DISTINTOS A ESE INDEX
      case 'BORRAR_COMENTARIO':
        return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

//* DEFINO EL CONTEXTO CON SUS CHILDREN
export const ComentariosProvider = ({ children }) => {
  const [comentarios, dispatch] = useReducer(comentariosReducer, []);
//* generamos el provider que luego llevamos a la app
  return (
    <ComentariosContext.Provider value={{ comentarios, dispatch }}>
      {children}
    </ComentariosContext.Provider>
  );
};

ComentariosProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };