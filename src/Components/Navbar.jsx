import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.webp';
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/"><img className='max-w-44' src={logo} alt="Logo" /></Link>
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li><Link className='hover:text-red-500' to="/" onClick={closeMenu}>HOME</Link></li>
                    <li className='flex hover:text-red-500'><Link className='hover:text-red-500' to="/pages" onClick={closeMenu}>PAGES</Link><IoIosArrowDown className='relative mt-1'></IoIosArrowDown></li>
                    <li><Link className='hover:text-red-500' to="/products" onClick={closeMenu}>PRODUCTS</Link></li>
                    <li><Link className='hover:text-red-500' to="/shop" onClick={closeMenu}>SHOP</Link></li>
                    <li><Link className='hover:text-red-500' to="/blog" onClick={closeMenu}>BLOG</Link></li>
                    <li><Link className='hover:text-red-500' to="/contactus" onClick={closeMenu}>CONTACT US</Link></li>
                    <li><button className="menu-btn bg-red-500 px-4 py-2 font-semibold text-white" type="button" onClick={closeMenu}>Contact Us</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
