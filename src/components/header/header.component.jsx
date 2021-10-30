import './header.styles.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';

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
                </div>
            </div>
        );
    }
}

export default Header;