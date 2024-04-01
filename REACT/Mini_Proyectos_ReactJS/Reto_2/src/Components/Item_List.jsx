import PropTypes from 'prop-types';

export const ItemList = ({ item }) => {
    return <li>{item}</li>;
  };

  ItemList.propTypes = {
    item: PropTypes.string, // Valida que text sea una string (opcional)
  };
  