import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import ComboLanguage from "../../components/ComboLanguage";
import useTranslate from "../../customhooks/UseTranslate";

const Navbar = () => {
  const translate = useTranslate();
  const menuRef = useRef(null);
  const toggleOpenRef = useRef(null);
  const toggleCloseRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleMenu = () => {
      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    toggleOpenRef.current.addEventListener("click", toggleMenu);
    toggleCloseRef.current.addEventListener("click", toggleMenu);

    return () => {
      toggleOpenRef.current.removeEventListener("click", toggleMenu);
      toggleCloseRef.current.removeEventListener("click", toggleMenu);
    };
  }, []);

  useEffect(() => {
    const handleDisplay = () => {
      if (isMenuOpen) {
        toggleOpenRef.current.style.display = "none";
        toggleCloseRef.current.style.display = "block";

        const timeoutId = setTimeout(() => {
          setIsMenuOpen(false);
        }, 2000);

        return () => clearTimeout(timeoutId);
      } else {
        toggleOpenRef.current.style.display = "block";
        toggleCloseRef.current.style.display = "none";
      }
    };

    handleDisplay();
  }, [isMenuOpen]);

  return (
    <div className="navbar-principal">
      <header>
        <nav className="navbar">
          <div className="brand">
            <h2>
              F<span>R</span>
            </h2>
          </div>

          <ul className={`menu ${isMenuOpen ? "show-menu" : ""}`} ref={menuRef}>
            <li>
              <a className="/#">{translate("navbar1")}</a>
            </li>
            <li>
              <a href="#proyectos">{translate("navbar2")}</a>
            </li>
            <li>
              <a href="#contacto">{translate("navbar3")}</a>
            </li>
          </ul>
          <ComboLanguage />
          <div className="toggle-menu">
            <FontAwesomeIcon
              className="fas fa-bars"
              id="toggle_open"
              icon={faBars}
              ref={toggleOpenRef}
            />
            <FontAwesomeIcon
              className="fas fa-close"
              id="toggle_close"
              icon={faTimes}
              ref={toggleCloseRef}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
