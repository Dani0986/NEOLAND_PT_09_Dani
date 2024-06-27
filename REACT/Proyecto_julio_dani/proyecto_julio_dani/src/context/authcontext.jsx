import { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Creamos el contexto de autenticación.
export const AuthContext = createContext();

// Definimos el proveedor de autenticación que envolverá los componentes que necesiten acceso al contexto.
export const AuthProvider = ({ children }) => {
  // Hook personalizado para gestionar el estado del usuario en el almacenamiento local.
  const [user, setUser] = useLocalStorage("user", null);

  // Hook de React Router para la navegación programática.
  const navigate = useNavigate();

  // Función de login que actualiza el estado del usuario y navega al perfil del usuario.
  const login = async (data) => {
    setUser(data); // Establecemos el usuario en el estado.
    navigate("/", { replace: true }); // Navegamos al perfil del usuario, reemplazando la ruta actual.
  };

  // Función de logout que limpia el estado del usuario y navega a la página principal.
  const logout = () => {
    setUser(null); // Establecemos el usuario a null en el estado.
    navigate("/", { replace: true }); // Navegamos a la página principal, reemplazando la ruta actual.
  };

  // Memoriza el valor del contexto para evitar recalcularlo en cada renderizado.
  const value = useMemo(
    () => ({
      user, // Estado del usuario.
      login, // Función de login.
      logout, // Función de logout.
    }),
    [user] // Solo recalcula el valor si el estado del usuario cambia.
  );

  // Devolvemos el Provider con sus valores asignados
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Definición de PropTypes para AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
 /*import { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Creamos el contexto de autenticación.
export const AuthContext = createContext();

// Definimos el proveedor de autenticación que envolverá los componentes que necesiten acceso al contexto.
export const AuthProvider = ({ children }) => {
  // Hook personalizado para gestionar el estado del usuario en el almacenamiento local.
  const [user, setUser] = useLocalStorage("user", null);

  // Hook de React Router para la navegación programática.
  const navigate = useNavigate();

  // Memoriza el valor del contexto para evitar recalcularlo en cada renderizado.
  const value = useMemo(() => {
    // Función de login que actualiza el estado del usuario y navega al perfil del usuario.
    const login = async (data) => {
      setUser(data); // Establecemos el usuario en el estado.
      navigate("/", { replace: true }); // Navegamos al perfil del usuario, reemplazando la ruta actual.
    };

    // Función de logout que limpia el estado del usuario y navega a la página principal.
    const logout = () => {
      setUser(null); // Establecemos el usuario a null en el estado.
      navigate("/", { replace: true }); // Navegamos a la página principal, reemplazando la ruta actual.
    };

    return {
      user, // Estado del usuario.
      login, // Función de login.
      logout, // Función de logout.
    };
  }, [user, navigate, setUser]); // Aseguramos que se recalcula si user, navigate o setUser cambian.

  // Devolvemos el Provider con sus valores asignados
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Definición de PropTypes para AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
*/