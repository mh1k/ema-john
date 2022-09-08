import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Navbar.css';

const Navbar = () => {
    const [scroll , setScroll] = useState(false)

    window.onscroll = () => {
        const nn = window.pageYOffset;
        if (nn>0) {
            setScroll(true)
            // console.log(nn);
        }
        else {
            setScroll(false)
        }

    }
    


    return (
        <div className={scroll ? 'navbar drop-shadow-[0px_0px_15px_rgba(0,0,0,0.80)]' : 'navbar '}>
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