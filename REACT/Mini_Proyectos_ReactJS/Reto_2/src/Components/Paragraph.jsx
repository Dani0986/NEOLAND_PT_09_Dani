import PropTypes from 'prop-types';
import styles from './Paragraph.module.css';

export const Paragraph = ({ text }) => {
  return <p className={styles.paragraph}>{text}</p>;
};

Paragraph.propTypes = {
    text: PropTypes.string, // Valida que text sea una string (opcional)
  };
  
  