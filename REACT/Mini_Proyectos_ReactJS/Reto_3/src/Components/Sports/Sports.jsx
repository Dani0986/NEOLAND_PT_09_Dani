
import "./sports.css"
import PropTypes from 'prop-types';


export const Sports = ({name, indoor, favoriteTeam}) => {
  return (
    <div className="Sports">
        <h3>Nombre: {name}</h3>
        <h3>Indoor: {indoor}</h3>
        <h3>Equipo Favorito: {favoriteTeam}</h3>
    </div>
  )
}

Sports.propTypes = {
    name: PropTypes.string.isRequired, 
    indoor: PropTypes.string.isRequired,
    favoriteTeam: PropTypes.string.isRequired, 
};