

import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './SubTitle.css';

const SubTitle = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};

SubTitle.propTypes = {
  text: PropTypes.string, // Valida que text sea una string (opcional)
};

export default SubTitle;