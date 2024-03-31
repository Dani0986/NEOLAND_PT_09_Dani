

import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './Image.css'; // Asegúrate de que la ruta sea correcta

const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} className={styles.image} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired, // Valida que src sea una string y sea requerido
  alt: PropTypes.string.isRequired, // Valida que alt sea una string y sea requerido
  width: PropTypes.number.isRequired, // Valida que width sea un número y sea requerido
  height: PropTypes.number.isRequired, // Valida que height sea un número y sea requerido
};

export default Image;