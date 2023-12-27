import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./mobilenav.css";

const Mobilenav = () => {
  const [clickNav, setClickNav] = useState(false);

  const handleClick = () => setClickNav(!clickNav);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">CoDeR</div>
          <ul className={clickNav ? "nav-menu active" : "nav-menu"}>
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
          <div className="nav-icon" onClick={handleClick}>
            {clickNav ? (
              <span className="icon">
                <FaTimes />
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
      <section className="hero-section">
        <p>Welcome to</p>
        <h2>Coding Kingdom</h2>
      </section>
    </>
  );
};

export default Mobilenav;
