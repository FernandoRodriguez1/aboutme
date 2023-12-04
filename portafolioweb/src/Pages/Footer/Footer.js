import React from "react";

import "../Footer/Footer.css";
import Linkedin from "../../Images/linkedinIcon.png";
import Github from "../../Images/GitHub-logo.png";
import Email from "../../Images/Email-logo.png";
const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://www.linkedin.com/in/fernando-rodriguez-a46935281/"
          target="blank"
        >
          <img src={Linkedin} alt="Linkedin Icon" title="Linkedin" />
        </a>

        <a href="https://github.com/FernandoRodriguez1" target="blank">
          <img src={Github} alt="Github Icon" title="Github" />
        </a>
        <a href="#">
          <img src={Email} alt="Linkedin Icon" title="Email" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
