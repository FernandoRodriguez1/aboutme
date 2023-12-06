import React from "react";

import "./Portafolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Portafolio = () => {
  return (
    <div className="portafolio">
      <div className="portafolio-headings">
        <h2>Mis Proyectos</h2>
        <div className="divider"></div>
      </div>

      <div className="container">
        <div className="card">
          <div className="card_img1"></div>
          <div className="card_title">
            <h2>descripción del proyecto</h2>
          </div>
          <div className="projects-links">
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </div>

          <div className="proyect-details-content">
            <button className="projects-details dowcv">
              <a href="#">project details</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card_img2"></div>
          <div className="card_title">
            <h2>descripción del proyecto</h2>
          </div>
          <div className="projects-links">
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </div>

          <div className="proyect-details-content">
            <button className="projects-details dowcv">
              <a href="#">project details</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card_img3"></div>
          <div className="card_title">
            <h2>descripción del proyecto</h2>
          </div>
          <div className="projects-links">
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </div>

          <div className="proyect-details-content">
            <button className="projects-details dowcv">
              <a href="#">project details</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
