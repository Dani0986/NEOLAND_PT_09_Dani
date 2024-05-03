import "./songHeard.css";
import PropTypes from 'prop-types';

export const SongsHeard = ({ song, artist, genre}) => {
  return (
    <div className="Canciones">
        <h3>Nombre: {song}</h3>
        <h3>Autor: {artist}</h3>
        <h3>Género: {genre}</h3>
        </div>
  )
}

SongsHeard.propTypes = {
    song: PropTypes.string.isRequired, 
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
   
};