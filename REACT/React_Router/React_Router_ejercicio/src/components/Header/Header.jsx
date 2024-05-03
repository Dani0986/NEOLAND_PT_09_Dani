
import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return <header>{children}</header>
};

export default Header;

Header.propTypes = {
    children: PropTypes.string, 
}