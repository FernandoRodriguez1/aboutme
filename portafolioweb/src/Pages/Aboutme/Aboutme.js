import React, { useState, useEffect, useRef } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutme = () => {
  const menuRef = useRef(null);
  const toggleOpenRef = useRef(null);
  const toggleCloseRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleMenu = () => {
      const menu = menuRef.current;

      setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);

      if (!isMenuOpen) {
        toggleOpenRef.current.style.display = "none";
        toggleCloseRef.current.style.display = "block";
      } else {
        toggleOpenRef.current.style.display = "block";
        toggleCloseRef.current.style.display = "none";
      }
    };

    toggleOpenRef.current.addEventListener("click", toggleMenu);
    toggleCloseRef.current.addEventListener("click", toggleMenu);

    return () => {
      toggleOpenRef.current.removeEventListener("click", toggleMenu);
      toggleCloseRef.current.removeEventListener("click", toggleMenu);
    };
  }, [isMenuOpen]);

  return (
    <div className="wrapper">
      <header>
        <nav className="navbar">
          <div className="brand">
            <h2>
              F<span>R</span>
            </h2>
          </div>
          <ul className={`menu ${isMenuOpen ? "show-menu" : ""}`} ref={menuRef}>
            <li>
              <a href="#" className="active">
                Inicio
              </a>
            </li>
            <li>
              <a href="#">Quien Soy</a>
            </li>
            <li>
              <a href="#">Portafolio</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
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
      <main class="main">
        <div class="info-content">
          <span class="info-content__subtitle">Frontend Developer</span>
          <h1>
            Soy<span> Fernando</span> Rodriguez
          </h1>
          <div class="sotial-networks">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
          <p class="info-content__p">
            Estoy por graduarme en una carrera universitaria orientada a la
            programacion, me considero muy apto para desarrollos de pagina web y
            estoy muy preparado para cualquier trabajo. Estoy por graduarme en
            una carrera universitaria orientada a la programacion, me considero
            muy apto para desarrollos de pagina web y estoy muy preparado para
            cualquier trabajo.
          </p>
          <a download href="#">
            <button class="download-cv">Download CV</button>
          </a>
        </div>
        <img
          src="https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1650543288/samples/pexels-photo-1516680-removebg-preview_f7yxxl.png"
          alt=""
        />
      </main>
    </div>
  );
};

export default Aboutme;
