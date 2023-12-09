import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-content">
    //     <h2>Fernando Rodriguez</h2>
    //     <h7>Si prefieres contactarme por mis redes sociales </h7>
    //   </div>
    //   <div className="sotial-network">
    //     <a
    //       href="https://www.linkedin.com/in/fernando-rodriguez-a46935281/"
    //       target="blank"
    //     >
    //       <i>
    //         <FontAwesomeIcon icon={faLinkedin} />
    //       </i>
    //     </a>
    //     <a href="https://github.com/FernandoRodriguez1" target="blank">
    //       <i>
    //         <FontAwesomeIcon icon={faGithub} />
    //       </i>
    //     </a>
    //     <a href="#">
    //       <i>
    //         <FontAwesomeIcon icon={faEnvelope} />
    //       </i>
    //     </a>
    //   </div>
    // </footer>
    <footer class="footer">
      <div class="footer-content">
        <h2>Fernando Rodriguez</h2>
        <h7>Si prefieres contactarme por mis redes sociales </h7>
      </div>
      <div class="sotial-networks">
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
        <a href="#">
          <i>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
