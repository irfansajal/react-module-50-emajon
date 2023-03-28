import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
         <img src={logo} />
     <div>
        <a href="/Shop">shop</a>
        <a href="/Order">order</a>
        <a href="/Inventory">inventory</a>
        <a href="/Login">login</a>
    </div>
    </nav>
    );
};

export default Header;