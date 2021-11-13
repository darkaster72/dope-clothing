import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

class Header extends React.Component {

    render() {
        return (
            <HeaderContainer>
                <LogoContainer to="/">
                    <Logo></Logo>
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to="/shop" >SHOP</OptionLink>
                    <OptionLink to="/contact">CONTACT</OptionLink>
                    {
                        this.props.currentUser
                            ? <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                            : <OptionLink to="/signin">SIGN IN</OptionLink>
                    }
                    <OptionLink as="div">
                        <CartIcon />
                    </OptionLink>
                </OptionsContainer>
                {!this.props.cartDropdownHidden && <CartDropdown />}
            </HeaderContainer>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);