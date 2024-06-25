import { createContext, useContext, useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
//* Nos importamos useNavigate que nos permitirá reconducir al usuario no regitrado**
import {useNavigate} from "react-router-dom"
import PropTypes from 'prop-types';

export const AuthContext = createContext ();

export const AuthProvider = ({children}) => {
//* Para el customhook, estableceremos la clave "user" y un defaultvalue null
const [user, setuser] = useLocalStorage("user",null)

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

//* lanzamos useNavigate para poder usarlo
const navigate = useNavigate();

const login = (data) => { 
  //* cuando tenemos los datos del login, se los asignamos a setuser
    //* 1 - Cambia el setuser con los datos del login
    setuser(data);
    //* y usamos usenavigate, y le enviamos a su perfil
    navigate("/autorizado/home");
};

const logout = () => {
  //* 1 - Cambia el setuser a null
    setuser(null);
//* 2 - usamos el navigate para ir al home o a la págna de /login
    navigate("/")
};


//* usamos usememo para dejar lso datos del login guardados
const value = useMemo(() => 
  ({
    user,
    login,
    logout
  }),
  //* solo se renderiza de nuevo si cambia user
  [user]

);
//* devolvemos el provider
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}