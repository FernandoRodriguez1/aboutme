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

          <p className="info-content__p" style={{ marginBottom: "30px" }}>
            Estoy por graduarme en la carrera Tecnicatura en Programacion en la
            Universidad Tecnologica Nacional de Rosario, me considero muy apto
            para desarrollos de pagina web y estoy muy preparado para cualquier
            trabajo.
          </p>
          <div className="info-content__p2">
            <h3>
              Mis <span>Tecnologias</span>
            </h3>
            <p style={{ fontWeight: "bold" }}>
              Las tecnologias que utilizo son: React,
              JavaScript,CSS,HTML5,Entity Framework Core, JWT, C#, SQL, Git,
              Firebase
            </p>
            <a download href="#">
              <button className="download-cv">Download CV</button>
            </a>
          </div>
        </div>
        <img src={fer} alt="" />
      </main>
    </div>
  );
};

export default Aboutme;
