import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="wrapper">
        <header>
          <nav className="navbar">
            <div className="brand">
              <h2>
                <span>FR</span>
              </h2>
            </div>
            <ul className="menu">
              <li>
                <a className="active" href="#">
                  About Me
                </a>
              </li>
              <li>
                <a href="#">Portafolio</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
