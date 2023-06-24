import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Button } from "./Button";
import { Link, useHistory } from "react-router-dom";
import { GiCardPick, GiDart } from "react-icons/gi";
import Logo from "./Logo- Jalex.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!  click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} className="navbar-icon"/>
              JOHNALEX
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/service"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul> 
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
