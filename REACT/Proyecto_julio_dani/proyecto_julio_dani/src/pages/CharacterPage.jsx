import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCharacter } from '../hooks/useCharacter';
import { useGames } from '../hooks/useGames';

export const CharacterPage = () => {
  //*Destructuramos los contextos y generamos los estados,
  const { user, logout } = useAuth();
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [inputs, setInputs] = useState({
   //* con los datos imputs que necesitaremos poblar con un usestate
    Juego: '',
    Personaje: '',
    Año: '',
    Imagen: '',
    Usuario: ''
  });

  //*llamamos al context  PARA PODER BUSCAR SU ID Y AÑADIRLE EL Charaacter
  const Character = useCharacter(); 
  const Games = useGames(); // Usar el contexto de coches (aunque no se usa en este componente)

//* usamos useeffect parra buscar el character que tenga asociado el correo en el localstorage
  useEffect(() => {
    const encontrarCharacter = () => {
      const characterEncontrado = Character.find(Character => Character.Email === user.correo);
      //* si hay, que siempre habrá
      if (characterEncontrado) {
        setInputs(prevState => ({
          //* traemos el id y se lo ponemos al input character, así se añade el Character al user
          ...prevState,
          Conductores: characterEncontrado._id
        }));
        //* y la imagen que usamos en el header
        setFotoPerfil(characterEncontrado.Imagen);
      } else {
        console.log('Character no encontrado');
      }
    };
//* Y SI HAY CONDUCTOR, PUES SE LLAMA A LA FUNCIÓN
    if (Character.length > 0) {
      encontrarCharacter();
    }
    //* esto cambiara cuando cambiemos el correo en el localstorage
  }, [Character, user.correo]);

  //* cuando cambia el input, nos vamso al usestate de los inputs a coger l oque teníamos ... y añadir
  //* esto l oañadimos en el manejo del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
//* LE PONEMOS UN HANDLESUBMIT PARA QUE NO HAGA LO DEFAULT, SI NO LO QUE LE PIDA 
//* que en este caso es ir con axios al endpoint de crear coches pasándole
//* los datos de los  inputs, para que lo cree
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/character/create', inputs);
      console.log('Character registrado:', response.data);
//* después que salga un alert de character añadido
      window.alert('Character añadido correctamente');
      //* y que nos lelve a a home de vuelta
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
      {/* //* LE PONEMOS UN HANDLESUBMIT PARA QUE NO HAGA LO DEFAULT, SI NO LO QUE LE PIDA */}
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
        <button type="submit">Registrar Usuario</button>
      </form>
    </div>
  );
};