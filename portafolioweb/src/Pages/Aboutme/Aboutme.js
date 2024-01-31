import React from "react";
import fer from "../../Images/fer.png";
import useTranslate from "../../customhooks/UseTranslate";

const Aboutme = () => {
  const translate = useTranslate();
  return (
    <div className="wrapper">
      <main className="main">
        <div className="info-content">
          <span className="info-content__subtitle">Frontend Developer</span>
          <h1>
            <span>{translate("title-aboutme")}</span>
          </h1>

          <p className="info-content__p" style={{ marginBottom: "30px" }}>
            Estoy por graduarme en la carrera Tecnicatura en Programacion en la
            Universidad Tecnologica Nacional de Rosario, me considero muy apto
            para desarrollos de pagina web y estoy muy preparado para cualquier
            trabajo.
          </p>
          <div className="info-content__p2">
            <h3>
              <span>{translate("title-mytech")}</span>
            </h3>
            <p style={{ fontWeight: "bold" }}>{translate("description")}</p>
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
