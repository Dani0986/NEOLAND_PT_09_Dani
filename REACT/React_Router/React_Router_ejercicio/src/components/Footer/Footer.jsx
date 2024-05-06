
import PropTypes from 'prop-types'; 

export const Footer = ({ children }) => {
    return <footer>{children}</footer>;
  };
  
 

  Footer.propTypes = {
    children: PropTypes.string, // Valida que text sea una string (opcional)
  };
  
  