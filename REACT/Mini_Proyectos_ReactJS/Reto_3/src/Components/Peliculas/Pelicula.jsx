import "./pelicula.css";
import PropTypes from 'prop-types';


export const Peliculas = ({ nombre,tipo,genero,puntuacion}) => {
  return (
    <div className="pelis">
        <h3>Nombre: {nombre}</h3>
        <h3>Tipo: {tipo}</h3>
        <h3>Género: {genero}</h3>
        <h3>Puntuación: {puntuacion}</h3>
    </div>
  )
}


Peliculas.propTypes = {
    nombre: PropTypes.string.isRequired, 
    tipo: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    puntuacion: PropTypes.string.isRequired,
};