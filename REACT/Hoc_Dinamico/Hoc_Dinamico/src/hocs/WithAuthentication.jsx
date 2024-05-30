/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const WrappedComponent = (props) => {
  console.log(props);
  const { Component } = props;
  const authenticated = useContext(AuthContext);

  return authenticated ? <Component {...props} /> : <Navigate to='/' />;
};

// HOC para permitir el paso a un componente si estamos autenticados
// HOC para permitir el paso a un componente si estamos autenticados
export const WithAuthentication = (Component) => (props) => {
  return <WrappedComponent {...props} Component={Component} />;
};
