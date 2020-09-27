import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo2.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='main'>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="nav">
                <ul>
                    <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to=''><button className='submit'>Login</button></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;