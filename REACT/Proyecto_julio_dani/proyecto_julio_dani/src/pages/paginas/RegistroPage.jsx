import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styled from 'styled-components';

//* GENERO AQUÍ EL STYLED COMPONENTS
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

export const RegistroPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  //* UN PERSONALIZADO QUE HACE LAS EQUIVALENCIAS ENTRE LO QUE RECIBE POR INPUTS Y LO QUE MANDA AL
  //* ENDPOINT DE REGISTRO. ES ASINCRONO PORQUE LO TRAE DE ABAJO DE LOS INPUT
  //* LO HACE CON UNA FUNCIÓN DE JAVASCRIPT FORMADATA QUE CONSTRUYE CLAVES VALOR
  const onSubmitCustom = async (data) => {
    try {
      const formData = new FormData();
      formData.append('Nombre', data.Nombre);
      formData.append('Localidad', data.Localidad);
      formData.append('Genero', data.Genero);
      formData.append('Email', data.Email);
      formData.append('Rol', data.Rol);
      formData.append('Contrasena', data.Contrasena);
      formData.append('Imagen', image); 
      formData.append('Nacimiento', data.Nacimiento); 

      //* Y MANDA TODO EL FORMADATA AL ENDPOINT CON LOS HEADERS Y LO QUE HA IDO AÑADIENDO 
      //* CON AXIOS CON MÉTODO POST
      await axios.post('http://localhost:8081/api/v1/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      //* Y TE MANDA AL LOGIN
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  const handleImageChange = (event) => {
    // Actualiza el estado de la imagen cuando se selecciona un archivo
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <div id="logoentrada" style={{ marginTop: "75px " }}>
        <img src="" alt="Captura de pantalla" />
      </div>
      {/* //* LE METO EL SUBMITCUSTOM A LOS INPUT Y LOS CREO CON EL HOOK DE REACT-HOOK-FORM USEFORM 
      //* EL REGISTER LOS REGISTRA*/}
      <form onSubmit={handleSubmit(onSubmitCustom)}>
        <div className="form-group" id="primerinputlogin">
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" id="Nombre" {...register("Nombre", { required: 'Nombre obligatorio' })} />
          {errors.Nombre && <p>{errors.Nombre.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Localidad">Localidad</label>
          <input type="text" id="Localidad" {...register("Localidad", { required: 'Localidad obligatoria' })} />
          {errors.Localidad && <p>{errors.Localidad.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Genero">Género</label>
          <input type="text" id="Genero" {...register("Genero", { required: 'Género obligatorio' })} />
          {errors.Genero && <p>{errors.Genero.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Rol">Rol Admin o User</label>
          <input type="text" id="Rol" {...register("Rol", { required: 'Rol obligatorio' })} />
          {errors.Rol && <p>{errors.Rol.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Email">Correo</label>
          <input type="email" id="Email" {...register("Email", { required: 'Email obligatorio' })} />
          {errors.Email && <p>{errors.Email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Contrasena">Contraseña</label>
          <input type="password" id="Contrasena" {...register("Contrasena", { required: 'Contraseña obligatoria' })} />
          {errors.Contrasena && <p>{errors.Contrasena.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="Nacimiento">Fecha de Nacimiento</label>
          <input type="date" id="Nacimiento" {...register("Nacimiento", { required: 'Fecha de Nacimiento obligatoria' })} />
          {errors.Nacimiento && <p>{errors.Nacimiento.message}</p>}
        </div>
        <div className="form-group">
          {/* //* LA IMAGEN ES TIPO FILE */}
          <label htmlFor="Imagen">Imagen</label>
          <input type="file" id="Imagen" onChange={handleImageChange} />
        </div>
        <Button type="submit" id="botonentrar">Regístrate</Button>
        <br />
        {"o "}
        <Link to="/login" id="linkregistro">
          {"inicia sesión"}
        </Link>
      </form>
    </div>
  );
}
