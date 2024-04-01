import PropTypes from 'prop-types';
import './Main.css';

export const Main = ({ children }) => {
  return <main>{children}</main>;
};


Main.propTypes = {
    children: PropTypes.node, // Indicamos que children puede ser cualquier nodo de React (elementos, strings, arrays, etc.)
  };