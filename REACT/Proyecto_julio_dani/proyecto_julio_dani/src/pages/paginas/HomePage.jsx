import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useCharacter } from '../hooks/useCharacter';
import { useUser } from "../hooks/useUser";  
import { useGames } from "../hooks/useGames"; 

//* GENERO AQUÍ EL STYLED COMPONENTS, PORQUE NO ME FUNCIONA BIEN EN CSS
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
    background-color: #45a049; /* Verde oscuro al pasar el mouse */
  }
`;

//* Imagen de styled components para multa pagada
const PaidImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const HomePage = () => {
  //*LLAMAMOS A LOS CONTEXTOS
  const { user, logout } = useAuth();
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const users = useUser();  
  const character = useCharacter();  
  const games = useGames();  

  //* usamos useEffect para buscar el usuario que tenga asociado el correo en el localStorage
  useEffect(() => {
    const encontrarUser = () => {
      const userEncontrado = users.find(usuario => usuario.Email === user.correo);
      //* PARA SU IMAGEN EN LA FOTO DE PERFIL
      if (userEncontrado) {
        setCurrentUser(userEncontrado);
        setFotoPerfil(userEncontrado.Imagen);
      } else {
        console.log('User no encontrado');
      }
    };
    //* Y SI HAY USUARIO, PUES SE LLAMA A LA FUNCIÓN
    if (user && user.correo) {
      encontrarUser();
    }
  }, [users, user]);

  //* FILTRAMOS SUS PERSONAJES Y SUS JUEGOS CON EL ID QUE COGIMOS A TRAVÉS DEL CORREO Y OBTENEMOS
  //* TODOS LOS DATOS DE LOS PERSONAJES Y LOS JUEGOS QUE LUEGO MAPEAREMOS ABAJO
  const characterUser = character.filter(char => char.users.includes(currentUser?._id));
  const gamesUser = games.filter(game => game.users.includes(currentUser?._id));

  //* GENERAMOS UNA FUNCIÓN QUE RECIBE POR PARÁMETRO EL ID DEL PERSONAJE DE ARRIBA Y VAMOS AL ENDPOINT
  //* A BORRAR EL PERSONAJE CON ESE ID Y LUEGO ACTUALIZAMOS LA LISTA A PINTAR
  const borrarPersonaje = async (idPersonaje) => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/personajes/borrar-personajes/${idPersonaje}`);
      window.location.reload(); 
    } catch (error) {
      console.error('Error al eliminar el personaje:', error);
    }
  };

  return (
    //* PINTAMOS EL HEADER
    <div>
      <header className="header">
        <div className="left-section">
          {/* CON UN LOGO QUE NOS LLEVA A HOME */}
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
          {/* CON UN LOGO QUE NOS LLEVA A PERFIL */}
          <Link to="/autorizado/profile">
            <img 
              src={fotoPerfil || 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'}
              alt="perfil"
              className="fotoperfil"
            />
            <br />
            {/* CON UN BOTÓN DE LOGOUT QUE VIENE DEL CONTEXTO USEAUTH*/}
            <button id="botonlogout" key={"logout"} onClick={logout}>
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </header>
      
      {/* //* SI HAY INFO DE PERSONAJES, LA MAPEA Y LA PINTA */}
      {characterUser.length > 0 && (
        <div>
          <h2>Personajes</h2>
          <ul>
            {characterUser.map(personaje => (
              <li key={personaje._id}>
                <img src={personaje.Imagen} alt={personaje.Nombre} style={{ width: '500px' }} /><br></br>
                {personaje.Nombre} <br></br> {personaje.Clase} <br></br> {personaje.Nivel} <br></br> {personaje.Raza} <br></br> {personaje.Habilidad}
                <br></br> 
                {/* //* Y EL BOTÓN LANZA EL ENDPOINT DE BORRAR */}
                <Button onClick={() => borrarPersonaje(personaje._id)}>Borrar Personaje</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* //*GENERAMOS UN BOTÓN QUE ENLAZA A AÑADIR PERSONAJE */}
      <div>
        <Link to="/autorizado/personajes">
          <Button>Añadir personaje</Button>
        </Link>
      </div>
      
      {/* //* SI HAY INFO DE JUEGOS, LAS PINTAMOS CON UN MAP */}
      {gamesUser.length > 0 && (
        <div>
          <h2>Juegos</h2>
          <ul>
            {gamesUser.map(juego => (
              <li key={juego._id}>
                ID: {juego._id} - {juego.Tipo} - {new Date(juego.Fecha).toLocaleDateString()} - {juego.Lugar} - ${juego.Precio} - 
                {/* //* SI ESTÁ PAGADO PONEMOS UNA IMAGEN, SI NO, UN BOTÓN DE ENLACE A PAGAR */}
                Pagado: {juego.Pagado} {juego.Pagado === 'Si' ? <PaidImage src="https://res.cloudinary.com/dx8p4o1ak/image/upload/v1718125123/istockphoto-1204658131-612x612_jocsbs.jpg" alt="Pago realizado" /> : <Button><Link to="/autorizado/juegos">Pagar juego</Link></Button>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
