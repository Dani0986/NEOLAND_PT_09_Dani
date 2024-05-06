import "./paragraph.css";
import PropTypes from 'prop-types';

export const Paragraph = ({text}) => {
  return (
    <h1 className = "paragraph">{text}</h1>
  )
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
  };
  
