import "./read.css";
import PropTypes from 'prop-types';

export const Read = ({titulo, autorN, autorS, genero, fechaP,fechaA,image}) => {
  return (
    <div className="libros">
        <h3>Título: {titulo}</h3>
        <h3>Nombre del Autor: {autorN}</h3>
        <h3>Apellido del Autor: {autorS}</h3>
        <h3>Género literario: {genero}</h3>
        <h3>Fecha de publicación: {fechaP}</h3>
        <h3>Fecha de nacimiento del Autor: {fechaA}</h3>
        <img className="booksImg" src={image} alt={titulo} />
        </div>
  )
}

Read.propTypes = {
    titulo: PropTypes.string.isRequired, 
    autorN: PropTypes.string.isRequired,
    autorS: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    fechaP: PropTypes.string.isRequired,
    fechaA: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};