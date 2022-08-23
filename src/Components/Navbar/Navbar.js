import React from 'react';
import logo from '../../images/Logo.svg'
import  './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container nav'>
                <img src={logo} alt="" />
                <div className=''>
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory</a>
                    <a href="">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;