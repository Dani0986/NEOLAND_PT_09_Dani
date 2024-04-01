
import PropTypes from 'prop-types';
import './Header.css';


export const Header = ({ children }) => {
  return <header>{children}</header>;
};

Header.propTypes = {
    children: PropTypes.node, // Indicamos que children puede ser cualquier nodo de React (elementos, strings, arrays, etc.)
  };