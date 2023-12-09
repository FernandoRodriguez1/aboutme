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
    <div class="portfolio">
      <div class="portfolio-heading">
        <h2>My Portfolio</h2>
        <div class="divider"></div>
      </div>
      <div class="container">
        <div class="card">
          <div class="card__img"></div>
          <div class="card__title">
            <h2>Clima App</h2>
          </div>
          <div class="card__proyect-links">
            <a href="#">
              <img className="icons-img" src={iconhtml}></img>
            </a>
            <a href="">
              <img className="icons-img" src={iconcss}></img>
            </a>
            <a href="">
              <img className="icons-img" src={iconjs}></img>
            </a>
          </div>
          <div class="button-content">
            <button class="project-details-button">
              <a href="#">Project Details</a>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card__img2"></div>
          <div class="card__title">
            <h2>Project Description</h2>
          </div>
          <div class="card__proyect-links">
            <a href="#">
              <img className="icons-img" src={iconreact}></img>
            </a>
            <a href="">
              <img className="icons-img" src={iconboost}></img>
            </a>
            <a href="">
              <img className="icons-img" src={iconcss}></img>
            </a>
          </div>
          <div class="button-content">
            <button class="project-details-button">
              <a href="#">Project Details</a>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card__img3"></div>
          <div class="card__title">
            <h2>Project Description</h2>
          </div>
          <div class="card__proyect-links">
            <a
              href="https://github.com/Michaelxk/Delegation-Test"
              target="_blank"
            >
              <img className="icons-img" src={iconcsharp}></img>
            </a>
            <a href="">
              <img className="icons-img" src={iconasp}></img>
            </a>
            <a href="">
              <img className="icons-img" src={iconsql}></img>
            </a>
          </div>
          <div class="button-content">
            <button class="project-details-button">
              <a href="#">Project Details</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
