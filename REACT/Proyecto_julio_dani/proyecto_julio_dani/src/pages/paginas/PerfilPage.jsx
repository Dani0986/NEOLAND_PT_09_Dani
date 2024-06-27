import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { useCharacter } from '../hooks/useCharacter';
import { useComentarios } from '../hooks/useComentarios';
import axios from 'axios';

export const PerfilPage = () => {
  const { user, logout } = useAuth();
  const characters = useCharacter();
  const { comentarios, dispatch } = useComentarios(); // Obtiene comentarios y el dispatcher
  const [character, setCharacter] = useState(null); // Renombrar para evitar confusión
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [nuevoComentario, setNuevoComentario] = useState(''); // Nuevo estado para el texto del comentario

  //* EL USEEFFECT PARA BUSCAR AL CHARACTER CON EL CONTEXT DE CHARACTERS Y SU ID Y SU INFO PARA PINTARLA
  useEffect(() => {
    const characterEncontrado = characters.find(character => character.Email === user.correo);
    if (characterEncontrado) {
      setCharacter(characterEncontrado);
      setFotoPerfil(characterEncontrado.Imagen);
    }
  }, [characters, user.correo]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  //* FUNCIÓN PARA FORMATEAR LA FECHA DE NACIMIENTO, QUE EN BASE DE DATOS ES LARGA
  //* BÁSICAMENTE HACE SUBSTRINGS
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  //*CONSTANTE CON UN OBJETO CON LOS DATOS DEL CHARACTER PARA PINTARLOS
  const detallesCharacter = {
    Nombre: character.Nombre,
    Genero: character.Genero,
    Nacimiento: formatearFecha(character.Nacimiento),
    Localidad: character.Localidad,
    Email: character.Email
  };

  //* EL HANDLE DE LOS COMENTARIOS QUE CAMBIA SU ESTADO
  const handleChangeComentario = (event) => {
    setNuevoComentario(event.target.value); // Actualiza el estado del comentario mientras el usuario escribe
  };

  //* Y EL SUBMIT QUE PREVIENE EL DEFAULT DEL COMENTARIO Y LANZA LA REDUCER DEL CONTEXTO DE COMENTARIOS
  const handleSubmitComentario = (event) => {
    event.preventDefault();
    // Envía el comentario al reducer
    dispatch({ type: 'AGREGAR_COMENTARIO', payload: nuevoComentario });
    // Limpia el input después de enviar el comentario
    setNuevoComentario('');
  };

  //* Y EL SUBMIT QUE PREVIENE EL DEFAULT DEL COMENTARIO Y LANZA LA REDUCER DEL CONTEXTO DE COMENTARIOS
  const handleBorrarComentario = (index) => {
    // Elimina el comentario del array de comentarios
    dispatch({ type: 'BORRAR_COMENTARIO', payload: index });
  };

  return (
    <>
      {/* //* PINTAMOS EL HEADER */}
      <header className="header">
        <div className="left-section">
          {/* //* CON UN LOGO QUE NOS LLEVA A HOME */}
          <Link to="/autorizado/home">
            <img 
              src="" 
              alt="Captura de pantalla"
              className="logo"
            />
          </Link>
          <p className="logo-text">mitráfico</p>
        </div>
        <div className="right-section">
          {/* //* CON UN LOGO QUE NOS LLEVA A PERFIL */}
          <Link to="/autorizado/profile">
            <img 
              src={fotoPerfil || 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'}
              alt="perfil"
              className="fotoperfil"
            />
          </Link>
          <br />
          {/* //* CON UN BOTÓN DE LOGOUT QUE VIENE DEL CONTEXTO USEAUTH */}
          <button id="botonlogout" key={"logout"} onClick={logout}>
            Cerrar Sesión
          </button>
        </div>
      </header>
      <div className="perfil-detalles">
        <div className="perfil-imagen-grande">
          <img 
            src={fotoPerfil || 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'}
            alt="Imagen de perfil grande"
            className="fotoperfil-grande"
          />
        </div>
        {/* //* LOS COMENTARIOS QUE LANZAN LAS REDUCER */}
        <form onSubmit={handleSubmitComentario}>
          <input
            type="text"
            value={nuevoComentario}
            // {/* //* LOS COMENTARIOS QUE LANZAN LAS REDUCER */}
            onChange={handleChangeComentario}
            placeholder="Añadir comentario..."
          />
          {/* //* CON SU BOTÓN */}
          <button type="submit">Añadir</button>
        </form>
        {/* //* HACEMO EL MAP DE LA CONSTANTE CON LOS DETALLES DEL CHARACTER Y PINTAMOS */}
        {Object.entries(detallesCharacter).map(([key, value]) => (
          <div key={key} className="detalle">
            {Array.isArray(value) ? value.join(', ') : String(value)}
          </div>
        ))}
        <div>
          {/* //* PINTAMOS LOS COMENTARIOS CON EL BOTONCITO DE BORRAR QUE LANZA LA REDUCER */}
          <h3>Comentarios:</h3>
          <ul>
            {comentarios.map((comentario, index) => (
              <li key={index}>
                {comentario}
                <button onClick={() => handleBorrarComentario(index)}>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
