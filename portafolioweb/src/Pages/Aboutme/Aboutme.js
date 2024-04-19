import React from "react";
import fer from "../../Images/fer.png";
import useTranslate from "../../customhooks/UseTranslate";
import ferpdf from "../../FernandoRodriguez1.pdf";
const Aboutme = () => {
  const translate = useTranslate();
  return (
    <div className="wrapper">
      <main className="main">
        <div className="info-content">
          <span className="info-content__subtitle">
            {translate("subtitle-aboutme-mobile")}
          </span>
          <h1>
            <span>{translate("title-aboutme")}</span>
          </h1>

          <p className="info-content__p" style={{ marginBottom: "30px" }}>
            {translate("aboutme-p")}
          </p>
          <div className="info-content__p2">
            <h3>
              <span>{translate("title-mytech")}</span>
            </h3>
            <p style={{ fontWeight: "bold" }}>{translate("description")}</p>
            <a download href={ferpdf}>
              <button className="download-cv">{translate("btn-cv")}</button>
            </a>
          </div>
        </div>
        <img src={fer} alt="Fernando Rodriguez" />
      </main>
    </div>
  );
};

export default Aboutme;
