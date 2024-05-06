import "./image.css"
import PropTypes from 'prop-types';

export const Image = ({src, clase, alt, width, height}) => {
  return (
    <img
     src = {src}
     className = {clase}
     alt = {alt}
     width = {width}
     height = {height}
      />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  clase: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};


 