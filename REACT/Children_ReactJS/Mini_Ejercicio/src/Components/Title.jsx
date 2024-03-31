
import PropTypes from 'prop-types';
import './Title.css';

export const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

Title.propTypes = {
    text: PropTypes.string, // Valida que text sea una string (opcional)
  };