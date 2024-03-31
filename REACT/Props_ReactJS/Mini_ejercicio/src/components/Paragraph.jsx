import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './Paragraph.module.css';

const Paragraph = ({ text }) => {
  return <p className={styles.paragraph}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string, // Valida que text sea una string (opcional)
};

export default Paragraph;