import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Mobilenav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">CoDeR</div>
          <ul className="nav-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          <div className="nav-icon">
            <GiHamburgerMenu />
            <FaTimes />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Mobilenav;
