import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo-section">
            <h2>RjnSeven</h2>
          </div>
          <div className={showMobile ? "nav-menus " : "mobile-nav"}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <div className="hamburger-menu">
              <a href="/" onClick="()=>setShowMobile(!showMobile)">
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <p>Welcome to</p>
        <h2>Coding Kingdom</h2>
      </section>
    </>
  );
};

export default NavBar;
