
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser'; // Cambio de importación de useGames a useUser
import { useGames } from '../hooks/useGames'; // Importación de useGames

const Button = styled.button`
  background-color: grey;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

export const MultasPage = () => {
  const [idGames, setIdGames] = useState('');
  const [error, setError] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const { user, logout } = useAuth();
  const users = useUser(); // Cambio de users a users
  const games = useGames(); // Uso de useGames para obtener los juegos

  const handleComprarJuego = async () => {
    try {
      await axios.patch(`http://localhost:8081/api/v1/games/comprar-juego/${idGames}`, {
        Comprado: 'Si'
      });
      window.alert('Juego comprado correctamente');
      window.location.href = '/autorizado/home';
    } catch (error) {
      console.error('Error al comprar el juego:', error);
      setError('Error al comprar el juego');
    }
  };

  useEffect(() => {
    const encontrarUsuario = () => {
      const usuarioEncontrado = users.find(user => user.Email === user.correo);
      if (usuarioEncontrado) {
        setFotoPerfil(usuarioEncontrado.Imagen);
      } else {
        console.log('Usuario no encontrado');
      }
    };

    if (users.length > 0) {
      encontrarUsuario();
    }
  }, [users, user.correo]);

  return (
    <div>
      <header className="header">
        <div className="left-section">
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
          <Link to="/autorizado/profile">
            <img 
              src={fotoPerfil || 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'}
              alt="perfil"
              className="fotoperfil"
            />
            <br />
            <button id="botonlogout" key={"logout"} onClick={logout}>
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </header>
      <label>
        ID del juego:
        <input
          type="text"
          value={idGames}
          onChange={(e) => setIdGames(e.target.value)}
        />
      </label>
      <br />
      <label>
        Nombre:
        <input type="text" />
      </label>
      <br />
      <label>
        Tarjeta:
        <input type="text" />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" />
      </label>
      <br />
      <Button onClick={handleComprarJuego}>Comprar juego</Button>
      {error && <p>Error al comprar el juego: {error}</p>}
    </div>
  );
};
