import "./idiomas.css";
import PropTypes from 'prop-types';

export const Idiomas = ({idioma, wrlevel,splevel}) => {
    return (
        <div className="idiomas">
            <h3>Nombre: {idioma}</h3>
            <h3>Nivel Escrito:{wrlevel}</h3>
            <h3>Nivel Hablado{splevel}</h3>
        </div>
    )
};

Idiomas.propTypes = {
    idioma: PropTypes.string.isRequired, 
    wrlevel: PropTypes.string.isRequired,
    splevel: PropTypes.string.isRequired,
};