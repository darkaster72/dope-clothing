import './header.styles.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'

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
                </div>
            </div>
        );
    }
}

export default Header;