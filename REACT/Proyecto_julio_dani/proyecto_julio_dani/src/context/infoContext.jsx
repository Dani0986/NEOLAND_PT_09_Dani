// infoContext.jsx
import React, { createContext, useReducer } from "react"; // Importa useReducer desde React

const initialState = { data: [] };

export const InfoContext = createContext(initialState);

function infoReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const InfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(infoReducer, initialState);
  return (
    <InfoContext.Provider value={{ state, dispatch }}>
      {children}
    </InfoContext.Provider>
  );
};


import PropTypes from "prop-types";


InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
