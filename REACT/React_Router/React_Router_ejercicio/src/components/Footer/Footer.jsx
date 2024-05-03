
import PropTypes from 'prop-types'; 

const Footer = ({ children }) => {
    return <footer>{children}</footer>;
  };
  
  export default Footer;

  Footer.propTypes = {
    children: PropTypes.string, // Valida que text sea una string (opcional)
  };
  
  