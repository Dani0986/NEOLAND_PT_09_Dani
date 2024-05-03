

import PropTypes from 'prop-types'; // Importa PropTypes
import  './image.css'; // Asegúrate de que la ruta sea correcta


export const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired, // Valida que src sea una string y sea requerido
  alt: PropTypes.string.isRequired, // Valida que alt sea una string y sea requerido
  width: PropTypes.number.isRequired, // Valida que width sea un número y sea requerido
  height: PropTypes.number.isRequired, // Valida que height sea un número y sea requerido
};

