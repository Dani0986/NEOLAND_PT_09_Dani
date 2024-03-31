
import PropTypes from 'prop-types';
import './Paragraph.css';

export const Paragraph = ({ text }) => {
  return <p>{text}</p>;
};


Paragraph.propTypes = {
    text: PropTypes.string, // Valida que text sea una string (opcional)
  };