import React from "react";
import fer from "../../Images/fer.png";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="info-content">
          <span className="info-content__subtitle">Frontend Developer</span>
          <h1>
            Soy<span> Fernando</span> Rodriguez
          </h1>

          <p className="info-content__p">
            Estoy por graduarme en una carrera universitaria orientada a la
            programacion, me considero muy apto para desarrollos de pagina web y
            estoy muy preparado para cualquier trabajo. Estoy por graduarme en
            una carrera universitaria orientada a la programacion, me considero
            muy apto para desarrollos de pagina web y estoy muy preparado para
            cualquier trabajo.
          </p>
          <a download href="#">
            <button className="download-cv">Download CV</button>
          </a>
        </div>
        <img src={fer} alt="" />
      </main>
    </div>
  );
};

export default Aboutme;
