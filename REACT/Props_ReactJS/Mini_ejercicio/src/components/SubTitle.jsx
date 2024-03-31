

import PropTypes from 'prop-types'; // Importa PropTypes
import './SubTitle.css';

export const SubTitle = ({ text }) => {
  return <h2>{text}</h2>;
};

SubTitle.propTypes = {
  text: PropTypes.string, // Valida que text sea una string (opcional)
};

