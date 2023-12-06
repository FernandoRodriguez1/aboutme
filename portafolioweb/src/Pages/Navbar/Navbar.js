import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="wrapper">
        <header>
          <nav className="navbar">
            <div className="brand">
              <h2 className="nav-left">
                <FontAwesomeIcon icon={faTerminal} />
                <span>Fernando Rodriguez</span>
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
