import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from 'axios';
import styled from 'styled-components';
import { useConductores } from '../hooks/useConductores'; // Importar la función useConductores

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
  //* LLAMO A LOS CONTEXTOS Y LSO ESTADOS
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState({ correo: "", contraseña: "" });
  const [errors, setErrors] = useState({ correo: "", contraseña: "" });
  const [conductorNoEncontrado, setConductorNoEncontrado] = useState(false);

  const conductores = useConductores();

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUserLogin({ ...userLogin, [name]: value });
    //* Limpiar el error cuando el usuario empieza a escribir DE NEUVO
    setErrors({ ...errors, [name]: "" }); 
    //* Ocultar el mensaje de "Conductor no encontrado" cuando el usuario empieza a escribir de nuevo
    setConductorNoEncontrado(false); 
  };
//* UN HANDLESBMIT PARA PREVENIR EL COMPORTAMIENTO PREESTABLECIDO DEL BOTÓN AL ENVIAR
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
     //* BUSCO QUE EL EMAIL DEL CONDUCTOR EXISTA EN BBDD 
        const conductorEncontrado = conductores.find(conductor => conductor.Email === userLogin.correo);
  //* SI LO ENCUENTRA, HACE LOGIN 
  //* NO SÉ MUY BIEN CÓMO, LLAMANDO A LA FUNCIÓN LOGIN DEL CONTEXTO USEAUTH
  //* QUE HACE UN SET DEL USUARIO Y LO REDIRIGE
        if (conductorEncontrado) {
          login(userLogin);
        } else {
  //* SI NO, LANZA ERROR
          console.log('Conductor no encontrado');
          setConductorNoEncontrado(true); // Mostrar el mensaje de "Conductor no encontrado"
        }
      } catch (error) {
        console.error('Error al obtener los conductores:', error);
      }
    }
  };

  return (
    <div>
        <div id="logoentrada" style={{ marginTop: "75px " }}>
        <img
          src="https://res.cloudinary.com/dx8p4o1ak/image/upload/v1718014262/ENTREGA_MARZO/Captura_de_pantalla_2024-06-07_201352_u5tiog.png"
          alt="Captura de pantalla"
        />
        {/* //* GENERAMOS UN FORMULARIO CO SU HANDLESUBMIT PERSONALIZADO Y CON 
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
              {conductorNoEncontrado && <p style={{ color: "red" }}>Conductor no encontrado</p>} {/* Mostrar el mensaje de "Conductor no encontrado" si es necesario */}
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
          <Link to
="/registro" id="linkregistro">
{"regístrate"}
</Link>
</span>
</div>
</div>
);
};