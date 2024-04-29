

import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;

Main.propTypes = {
    children: PropTypes.string, // Valida que text sea una string (opcional)
  };
  
  