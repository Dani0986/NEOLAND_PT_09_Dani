import PropTypes from 'prop-types';
import  './Footer.css';

export const Footer = ({ children }) => {
  return <footer>{children}</footer>;
};

Footer.propTypes = {
    children: PropTypes.node, // Indicamos que children puede ser cualquier nodo de React (elementos, strings, arrays, etc.)
  };