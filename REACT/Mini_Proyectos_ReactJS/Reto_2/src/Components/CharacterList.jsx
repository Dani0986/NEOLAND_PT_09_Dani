import PropTypes from 'prop-types';
import  './CharacterList.css';

export const CharacterList = ({ children }) => {
  return <ul>{children}</ul>;
};

CharacterList.propTypes = {
    children: PropTypes.node, // Indicamos que children puede ser cualquier nodo de React (elementos, strings, arrays, etc.)
  };