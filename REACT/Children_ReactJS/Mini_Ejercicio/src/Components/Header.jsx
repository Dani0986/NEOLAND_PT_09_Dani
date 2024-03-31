

import PropTypes from 'prop-types';

export const Header = ({ children }) => {
    return <header>{children}</header>;
  };

  Header.propTypes = {
    children: PropTypes.node.isRequired, // Validar que children sea un nodo y sea requerido
  };