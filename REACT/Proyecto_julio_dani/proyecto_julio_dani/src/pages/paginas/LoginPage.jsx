import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from 'axios';
import styled from 'styled-components';
import { useUser } from '../hooks/useUser'; // Importar la función useUser

//* GENERO AQUÍ EL STYLED COMPONENTS, PORQUE NO ME FUNCIONA BIEN EN CSS
const Button = styled.button`
  background-color: grey; 
  border: none; /* Sin borde */
  color: white; /* Color del texto */
  padding: 15px 32px; /* Relleno */
  text-align: center; /* Alineación del texto */
  text-decoration: none; /* Sin subrayado */
  display: inline-block; /* Elemento en línea */
  font-size: 16px; /* Tamaño de la fuente */
  margin: 4px 2px; /* Margen */
  cursor: pointer; /* Cursor de puntero */
  border-radius: 4px; /* Bordes redondeados */
  &:hover {
    background-color: #45a049; /* Color de fondo al pasar el ratón */
  }
`;

export const LoginPage = () => {
  //* LLAMO A LOS CONTEXTOS Y LOS ESTADOS
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState({ correo: "", contraseña: "" });
  const [errors, setErrors] = useState({ correo: "", contraseña: "" });
  const [userNoEncontrado, setUserNoEncontrado] = useState(false);

  const users = useUser();

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUserLogin({ ...userLogin, [name]: value });
    //* Limpiar el error cuando el usuario empieza a escribir DE NUEVO
    setErrors({ ...errors, [name]: "" }); 
    //* Ocultar el mensaje de "Usuario no encontrado" cuando el usuario empieza a escribir de nuevo
    setUserNoEncontrado(false); 
  };

  //* UN HANDLESUBMIT PARA PREVENIR EL COMPORTAMIENTO PREESTABLECIDO DEL BOTÓN AL ENVIAR
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = { correo: "", contraseña: "" };
    //* SI NO HAY CORREO, MENSAJE
    if (!userLogin.correo) {
      newErrors.correo = "Correo obligatorio";
    }
    //* SI NO HAY CONTRASEÑA, MENSAJE
    if (!userLogin.contraseña) {
      newErrors.contraseña = "Contraseña obligatoria";
    }

    if (newErrors.correo || newErrors.contraseña) {
      setErrors(newErrors);
    } else {
      try {
        //* BUSCO QUE EL EMAIL DEL USUARIO EXISTA EN BBDD 
        const userEncontrado = users.find(user => user.Email === userLogin.correo);
        //* SI LO ENCUENTRA, HACE LOGIN 
        //* NO SÉ MUY BIEN CÓMO, LLAMANDO A LA FUNCIÓN LOGIN DEL CONTEXTO USEAUTH
        //* QUE HACE UN SET DEL USUARIO Y LO REDIRIGE
        if (userEncontrado) {
          login(userLogin);
        } else {
          //* SI NO, LANZA ERROR
          console.log('Usuario no encontrado');
          setUserNoEncontrado(true); // Mostrar el mensaje de "Usuario no encontrado"
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    }
  };

  return (
    <div>
      <div id="logoentrada" style={{ marginTop: "75px" }}>
        <img
          src=""
          alt="Captura de pantalla"
        />
        {/* //* GENERAMOS UN FORMULARIO CON SU HANDLESUBMIT PERSONALIZADO Y CON 
        //* INPUT PARA CORREO Y CONTRASEÑA */}
        <form onSubmit={handleSubmit} noValidate>
          <div id="primerinputlogin">
            <span>
              Correo
              <label htmlFor="correo">
                <input
                  type="text"
                  name="correo"
                  id="correo"
                  //*MANDA EL VALOR Y ACTUALIZA EL ESTADO DE USUARIO
                  value={userLogin.correo}
                  onChange={handleInput}
                />
              </label>
              {errors.correo && <p style={{ color: "red" }}>{errors.correo}</p>}
              {userNoEncontrado && <p style={{ color: "red" }}>Usuario no encontrado</p>} {/* Mostrar el mensaje de "Usuario no encontrado" si es necesario */}
            </span>
          </div>
          <div>
            <span>
              Contraseña
              <label htmlFor="contraseña">
                <input
                  type="password"
                  name="contraseña"
                  id="contraseña"
                  //*MANDA EL VALOR Y ACTUALIZA EL ESTADO DE USUARIO
                  value={userLogin.contraseña}
                  onChange={handleInput}
                />
              </label>
              {errors.contraseña && <p style={{ color: "red" }}>{errors.contraseña}</p>}
            </span>
          </div>
          <Button type="submit" id="botonentrar">Entra</Button>
        </form>
        <span>
          {"o "}
          <Link to="/registro" id="linkregistro">
            {"regístrate"}
          </Link>
        </span>
      </div>
    </div>
  );
};
