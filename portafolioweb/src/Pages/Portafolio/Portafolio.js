import React from "react";
import iconhtml from "../../Images/icon-html.png";
import iconcss from "../../Images/icon-css.png";
import iconcsharp from "../../Images/icon-c#.png";
import iconsql from "../../Images/icon-sqllite.png";
import iconasp from "../../Images/icon-aspnet.png";
import iconjs from "../../Images/icon-javascript.png";
import iconboost from "../../Images/icon-boost.png";
import iconreact from "../../Images/icon-react.png";

const Portafolio = () => {
  return (
    <div id="proyectos" className="portfolio">
      <div className="portfolio-heading">
        <h2>My Portfolio</h2>
        <div className="divider"></div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card__img"></div>
          <div className="card__title">
            <h2>App de Clima online</h2>
          </div>
          <div className="divider1"></div>
          <p className="p-card">
            Clima app vinculado directamente con un API, presentado como
            proyecto universitario (1er Año), full responsive, y correcto
            desarrollo enfocado al cliente
          </p>
          <div className="card__proyect-links">
            <img className="icons-img" src={iconhtml}></img>

            <img className="icons-img" src={iconcss}></img>

            <img className="icons-img" src={iconjs}></img>
          </div>
          <div className="button-content">
            <button className="project-details-button">
              <a
                href="https://github.com/ValentinEandi/TPINTEGRADORLAB.git"
                target="blank"
              >
                Clima App
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card__img2"></div>
          <div className="card__title">
            <h2>Reviews Page</h2>
          </div>
          <div className="divider1"></div>
          <p className="p-card">
            Pagina de videojuegos donde se pueden valorar a los mismos a traves
            de una review, cuenta con authenticacion de usuarios y uso de base
            de datos.
          </p>
          <div className="card__proyect-links">
            <img className="icons-img" src={iconreact}></img>

            <img className="icons-img" src={iconboost}></img>

            <img className="icons-img" src={iconcss}></img>
          </div>
          <div className="button-content">
            <button className="project-details-button">
              <a
                href="https://github.com/MathyNp/TPI_NapolitanoRodriguezVazquez.git"
                target="blank"
              >
                Games Review
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card__img3"></div>
          <div className="card__title">
            <h2 className="h2-cardtitle">Base de Datos EF</h2>
          </div>
          <div className="divider1"></div>
          <p className="p-card">
            Base de datos hecha con Entity Framework core, cuenta con
            authenticacion de usuarios a traves de JWT, servicios esenciales de
            Api rest, ORM, MVC y Dtos.
          </p>
          <div className="card__proyect-links">
            <img className="icons-img" src={iconcsharp}></img>

            <img className="icons-img" src={iconasp}></img>

            <img className="icons-img" src={iconsql}></img>
          </div>
          <div className="button-content">
            <button className="project-details-button">
              <a
                href="https://github.com/FernandoRodriguez1/TPI-integrador-Prog3.git"
                target="blank"
              >
                Database
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
