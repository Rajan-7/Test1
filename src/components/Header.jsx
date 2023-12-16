import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import Home from "./home";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="header-section">
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/">
              <img src="/image/jooneli.png" alt="Brand Logo" />
            </Link>
          </div>
          <div className={` ${ show ? "hover-effect--background" : "none"}`}></div>
          <div className="nav-bars">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <div
              className="hover-effectors boxes"
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div
                className="display-product"
                // onMouseOver={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
              >
                Product
                <div className="drop-down--product">
                  <Link to="/home">360 Core Banking System</Link>
                  <Link to="/home">Jooneli Trading</Link>
                </div>
              </div>
              <div
                className="display-company"
                // onMouseOver={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
              >
                Company
                <div className="drop-down--company">
                  <Link to="/">360 Core Banking System</Link>
                  <Link to="/">Banking System</Link>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="center-content">
          <img src="/image/background.jpeg" alt="Background Content" />
          We are Human
        </div>
      </header>
    </>
  );
};

export default Header;
