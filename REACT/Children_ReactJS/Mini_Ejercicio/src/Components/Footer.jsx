
import PropTypes from 'prop-types';
export const Footer = ({ children }) => {
    return <footer>{children}</footer>;
  };

  Footer.propTypes = {
    children: PropTypes.node.isRequired, // Validar que children sea un nodo y sea requerido
  };