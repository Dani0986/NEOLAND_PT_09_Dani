import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCharacter } from '../hooks/useCharacter';
import { useGames } from '../hooks/useGames';

export const CharacterPage = () => {
  //*Destructuramos los contextos y generamos los estados
  const { user, logout } = useAuth();
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [inputs, setInputs] = useState({
    //* Datos que necesitamos para poblar con useState
    Juego: '',
    Personaje: '',
    Año: '',
    Imagen: '',
    Usuario: ''
  });

  //*Llamamos al contexto para poder buscar su ID y añadirle el Character
  const characters = useCharacter(); 
  const games = useGames(); // Usar el contexto de juegos (aunque no se usa en este componente)

  //* Usamos useEffect para buscar el Character que tenga asociado el correo en el localStorage
  useEffect(() => {
    const encontrarCharacter = () => {
      const characterEncontrado = characters.find(character => character.Email === user.correo);
      //* Si hay, que siempre habrá
      if (characterEncontrado) {
        setInputs(prevState => ({
          //* Traemos el ID y se lo ponemos al input Usuario, así se añade el Character al user
          ...prevState,
          Usuario: characterEncontrado._id
        }));
        //* Y la imagen que usamos en el header
        setFotoPerfil(characterEncontrado.Imagen);
      } else {
        console.log('Character no encontrado');
      }
    };
    //* Y si hay Characters, pues se llama a la función
    if (characters.length > 0) {
      encontrarCharacter();
    }
    //* Esto cambiará cuando cambiemos el correo en el localStorage
  }, [characters, user.correo]);

  //* Cuando cambia el input, nos vamos al useState de los inputs a coger lo que teníamos ... y añadir
  //* Esto lo añadimos en el manejo del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //* Le ponemos un handleSubmit para que no haga lo default, sino lo que le pidamos
  //* Que en este caso es ir con axios al endpoint de crear characters pasándole
  //* Los datos de los inputs, para que lo cree
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/characters/create', inputs);
      console.log('Character registrado:', response.data);
      //* Después que salga un alert de character añadido
      window.alert('Character añadido correctamente');
      //* Y que nos lleve a home de vuelta
      window.location.href = '/autorizado/home';
    } catch (error) {
      console.error('Error al registrar Character:', error);
    }
  };

  return (
    //* PINTAMOS EL HEADER
    <div>
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
          <p className="logo-text">Characters</p>
        </div>
        <div className="right-section">
          {/* //* CON UN LOGO QUE NOS LLEVA A PERFIL */}
          <Link to="/autorizado/profile">
            <img 
              src={fotoPerfil || 'URL_POR_DEFECTO_SI_NO_HAY_IMAGEN'}
              alt="perfil"
              className="fotoperfil"
            />
            <br />
            {/* //* CON UN BOTÓN DE LOGOUT QUE VIENE DEL CONTEXTO USEAUTH*/}
            <button id="botonlogout" key={"logout"} onClick={logout}>
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </header>
      {/* //* LE PONEMOS UN HANDLESUBMIT PARA QUE NO HAGA LO DEFAULT, SINO LO QUE LE PIDAMOS */}
      <form onSubmit={handleSubmit}>
        {/* //* VAMOS PINTANDO EL INPUT DE DATOS DEL CHARACTER
        //* QUE CUANDO CAMBIE SE UNE AL HANDLECHANGE DE ARRIBA Y SE UNE A LOS CAMPOS QUE CREAMOS
        //* ARRIBA EN EL USESTATE*/}
        <label>Juego:</label>
        <input type="text" name="Juego" value={inputs.Juego} onChange={handleChange} required />
        <br />
        <label>Personaje:</label>
        <input type="text" name="Personaje" value={inputs.Personaje} onChange={handleChange} required />
        <br />
        <label>Año:</label>
        <input type="number" name="Año" value={inputs.Año} onChange={handleChange} required />
        <br />
        <label>URL de la Imagen:</label>
        <input type="url" name="Imagen" value={inputs.Imagen} onChange={handleChange} required />
        <br />
        <button type="submit">Registrar Character</button>
      </form>
    </div>
  );
};
