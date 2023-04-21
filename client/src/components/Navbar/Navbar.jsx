import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick=()=>{
        setShowMenu(!showMenu);
    }
  return (
    <nav className='main'>
        <div className="logo">
            <h2>
                <span>F</span>ood
                <span>D</span>onation
            </h2>
        </div>
        <div className={showMenu ? "nav-items mobile-menu-link":"nav-items"}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <div className="header-login">
            <button><Link to="/signup">Donate Now</Link></button>
            <div className="hamburger-menu">
                <a href="#" onClick={handleClick}><GiHamburgerMenu /></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar