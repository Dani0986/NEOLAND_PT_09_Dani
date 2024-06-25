import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useCharacter } from '../hooks/useMultas';
import { useConductores } from "../hooks/useConductores";  
import { useCoches } from "../hooks/useCoches"; 

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
  const [conductor, setConductor] = useState(null);
  const conductores = useConductores();  
  const coches = useCoches();  
  const multas = useMultas();  

  //* usamos useeffect parra buscar el coductor que tenga asociado el correo en el localstorage
  useEffect(() => {
    const encontrarConductor = () => {
      const conductorEncontrado = conductores.find(conductor => conductor.Email === user.correo);
      //* PARA SU IMAGEN EN LA FOTO DE PERFIL
      if (conductorEncontrado) {
        setConductor(conductorEncontrado);
        setFotoPerfil(conductorEncontrado.Imagen);
      } else {
        console.log('Conductor no encontrado');
      }
    };
    //* Y SI HAY CONDUCTOR, PUES SE LLAMA A LA FUNCIÓN
    if (conductores.length > 0) {
      encontrarConductor();
    }
  }, [conductores, user.correo]);

  //* FILTRAMOS SUS COCHES Y SUS MULTAS CON EL ID QUE COGIMOS A TRAVÉS DEL CORREO Y OBTENEMOS
  //* TODOS LOS DATOS DE LOS COCHES Y LAS MULTAS QUE LUEGO MAPEAREMOS ABAJO
  const cochesConductor = coches.filter(coche => coche.Conductores.includes(conductor?._id));
  const multasConductor = multas.filter(multa => multa.Conductores.includes(conductor?._id));

  //* GENERAMOS UNA FUNCIÓN QUE RECIBE POR PARÁMETRO EL ID DEL COCHE DE ARRIBA Y VAMOS AL ENDPOINT
  //* A BORRAR EL COCHE CON ESE ID Y LUEGO ACTUALIZAMOS LA LISTA A PINTAR
  const borrarCoche = async (idCoche) => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/coches/borrar-coches/${idCoche}`);
      window.location.reload(); 
    } catch (error) {
      console.error('Error al eliminar el coche:', error);
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
{/* //* SI HAY INFO DE COCHES, LA MAPEA Y LA PINTA */}
      {cochesConductor.length > 0 && (
        <div>
          <h2>Coches</h2>
          <ul>
            {cochesConductor.map(coche => (
              <li key={coche._id}>
                <img src={coche.Imagen} alt={coche.Modelo} style={{ width: '500px' }} /><br></br>
                {coche.Matricula} <br></br> {coche.Modelo} <br></br> {coche.Ano} <br></br> {coche.Color} <br></br> {coche.Permiso_Ambiental}
              <br></br> 
              {/* //* Y EL BOTÓN LANZA EL ENDPOTIN DE BORRAR */}
               <Button onClick={() => borrarCoche(coche._id)}>Borrar Coche</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
{/* //*GENERAMOS UN BOTÓN DE ENLAZA A AÑADIR COCHE */}
      <div>
      <Link to="/autorizado/coches">
          <Button>Añadir coche</Button>
        </Link>
      </div>
{/* //* SI HAY INFO DE MULTAS, LAS PINTAMOS CON UN MAP */}
      {multasConductor.length > 0 && (
        <div>
          <h2>Multas</h2>
          <ul>
            {multasConductor.map(multa => (
              <li key={multa._id}>
                ID: {multa._id} - {multa.Tipo} - {new Date(multa.Fecha).toLocaleDateString()} - {multa.Calle} - ${multa.Importe} - 
               {/* {/* //* SI ESTA PAGADA PONEMOS UNA IMAGEN, SI NO, UN BOTÓN DE ENLACE A PAGAR */}
               Pagada: {multa.Pagada} {multa.Pagada === 'Si' ? <PaidImage src="https://res.cloudinary.com/dx8p4o1ak/image/upload/v1718125123/istockphoto-1204658131-612x612_jocsbs.jpg" alt="Pago realizado" /> : <Button><Link to="/autorizado/multas">Pagar multa</Link></Button>} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};