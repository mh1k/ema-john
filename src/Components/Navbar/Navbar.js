import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Navbar.css';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='mx-[5%] nav'>
                <Link className='ml-0 pl-0 ' to="/"><img src={logo} alt="" /></Link>
                <div className='nav-link'>
                    <NavLink className={({ isActive }) =>
                        isActive ? " bg-[#22333f] px-3 py-1.5 rounded-xl border-sky-500" : "px-3 border-sky-500/[0]"
                    } to="/">Shop</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? " bg-[#22333f] px-3 py-1.5 rounded-xl border-sky-500" : "px-3 border-sky-500/[0]"
                    } to="/orders">Orders</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? " bg-[#22333f] px-3 py-1.5 rounded-xl border-sky-500" : "px-3 border-sky-500/[0]"
                    } to="/inventory">Manage Inventory</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? " bg-[#22333f] px-3 py-1.5 rounded-xl border-sky-500" : "px-3 border-sky-500/[0]"
                    } to="/login">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;