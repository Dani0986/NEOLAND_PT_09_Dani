import PropTypes from 'prop-types';
import styles from './Title.css';

export const Title = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

Title.propTypes = {
    text: PropTypes.string, // Valida que text sea una string (opcional)
  };
  
  