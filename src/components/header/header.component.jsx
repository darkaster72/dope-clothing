import './header.styles.scss'
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <Link to="/" className="logo-container">
                    <Logo></Logo>
                </Link>
                <div className="options">
                    <Link to="/shop" className="option">SHOP</Link>
                    <Link to="/contact" className="option">CONTACT</Link>
                    {
                        this.props.currentUser
                            ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                            : <Link to="/signin" className="option">SIGN IN</Link>
                    }
                    <CartIcon className="options" />
                </div>
                {!this.props.cartDropdownHidden && <CartDropdown />}
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);