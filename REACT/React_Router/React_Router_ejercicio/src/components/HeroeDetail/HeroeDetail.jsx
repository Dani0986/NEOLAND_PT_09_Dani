
import "./heroeDetail.css"
import PropTypes from 'prop-types';

export const HeroeDetail = ({heroe}) => {
  return (
    <>
    <h1>Name: {heroe.name}</h1>
    <p>Alias: {heroe.alias}</p>
    <p>Age: {heroe.age}</p>
    </>
  )
}
HeroeDetail.propTypes = {
    heroe: PropTypes.shape({
      name: PropTypes.string.isRequired,
      alias: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  };
  



