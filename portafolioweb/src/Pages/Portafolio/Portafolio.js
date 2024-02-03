import React from "react";
import iconhtml from "../../Images/icon-html.png";
import iconcss from "../../Images/icon-css.png";
import iconcsharp from "../../Images/icon-c#.png";
import iconsql from "../../Images/icon-sqllite.png";
import iconasp from "../../Images/icon-aspnet.png";
import iconjs from "../../Images/icon-javascript.png";
import iconboost from "../../Images/icon-boost.png";
import iconreact from "../../Images/icon-react.png";
import useTranslate from "../../customhooks/UseTranslate";

const Portafolio = () => {
  const translate = useTranslate();
  return (
    <div id="proyectos" className="portfolio">
      <div className="portfolio-heading">
        <h2>{translate("portfolio")}</h2>
        <div className="divider"></div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card__img"></div>
          <div className="card__title">
            <h2>{translate("portfolio1-title1")}</h2>
          </div>
          <div className="divider1"></div>
          <p className="p-card">{translate("portfolio1")}</p>
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
                {translate("portfolio1-title1")}
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card__img2"></div>
          <div className="card__title">
            <h2>{translate("portfolio2-title2")}</h2>
          </div>
          <div className="divider1"></div>
          <p className="p-card">{translate("portfolio2")}</p>
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
                {translate("portfolio2-title2")}
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card__img3"></div>
          <div className="card__title">
            <h2 className="h2-cardtitle">{translate("portfolio3-title3")}</h2>
          </div>
          <div className="divider1"></div>
          <p className="p-card">{translate("portfolio3")}</p>
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
                {translate("portfolio3-title3")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
