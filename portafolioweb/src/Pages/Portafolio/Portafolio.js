import React from "react";
import Github from "../../Images/GitHub-logo.png";
import "./Portafolio.css";
const Portafolio = () => {
  return (
    <div className="portafolio">
      <div className="portafolio-headings">
        <h2>Mis Proyectos</h2>
        <div className="divider"></div>
      </div>

      <div className="container">
        <div className="card">
          <div className="card_img"></div>
          <div className="card_title">
            <h2>descripción del proyecto</h2>
          </div>
          <div className="projects-links">
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
          </div>

          <div className="proyect-details-content">
            <button className="projects-details dowcv">
              <a href="#">project details</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card_img"></div>
          <div className="card_title">
            <h2>descripción del proyecto</h2>
          </div>
          <div className="projects-links">
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
          </div>

          <div className="proyect-details-content">
            <button className="projects-details dowcv">
              <a href="#">project details</a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card_img"></div>
          <div className="card_title">
            <h2>descripción del proyecto</h2>
          </div>
          <div className="projects-links">
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
            </a>
            <a href="https://github.com/FernandoRodriguez1" target="blank">
              <img
                className="IconPortafolio"
                src={Github}
                alt="Github Icon"
                title="Github"
              />
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
