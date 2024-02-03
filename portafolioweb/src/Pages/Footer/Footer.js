import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useTranslate from "../../customhooks/UseTranslate";

const Footer = () => {
  const translate = useTranslate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Fernando Rodriguez</h2>
        <h4>{translate("footer")}</h4>
      </div>
      <div className="sotial-networks">
        <a
          href="https://www.linkedin.com/in/fernando-rodriguez-a46935281/"
          target="blank"
        >
          <i>
            <FontAwesomeIcon icon={faLinkedin} />
          </i>
        </a>
        <a href="https://github.com/FernandoRodriguez1" target="blank">
          <i>
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </a>
        <a href="https://www.instagram.com/feer.rodriguez1/" target="blank">
          <i>
            <FontAwesomeIcon icon={faInstagram} />
          </i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
