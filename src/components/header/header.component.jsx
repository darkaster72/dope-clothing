import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import UserContext from '../../context/user/user.context';
import { auth } from '../../firebase/firebase.utils';
import { CartContext } from '../../provider/cart/cart.provider';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';

const Header = props => {
    const currentUser = useContext(UserContext);
    const { hidden } = useContext(CartContext)

    return <div className='header'>
        <Link to="/" className="logo-container">
            <Logo></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {currentUser
                ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link to="/signin" className="option">SIGN IN</Link>}
            <CartIcon className="options" />
        </div>
        {!hidden && <CartDropdown />}
    </div>;
};

export default Header;