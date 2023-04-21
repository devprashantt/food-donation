import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="main">
      <div className="logo">
        <h2>
          <span>F</span>ood
          <span>D</span>onation
        </h2>
      </div>
      <div className={showMenu ? "nav-items mobile-menu-link" : "nav-items"}>
        <ul>
          <li>
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: "1.5rem",
              }}
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="header-login">
        {
          // if token is present then show logout button else show login and signup button
          token ? (
            <Link to="/dashboard">
              <button className="btn btn-primary">Dashboard</button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary">Signup</button>
              </Link>
            </>
          )
        }
        <div className="hamburger-menu">
          <a href="#" onClick={handleClick}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
