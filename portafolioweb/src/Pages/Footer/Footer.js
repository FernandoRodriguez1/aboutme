// import React from "react";

// import "../Footer/Footer.css";
// import Linkedin from "../../Images/linkedinIcon.png";
// import Github from "../../Images/GitHub-logo.png";
// import Email from "../../Images/Email-logo.png";
// const Footer = () => {
//   return (
//     <div className="Footer">
//       <footer>
//         <a
//           href="https://www.linkedin.com/in/fernando-rodriguez-a46935281/"
//           target="blank"
//         >
//           <img
//             className="img"
//             src={Linkedin}
//             alt="Linkedin Icon"
//             title="Linkedin"
//           />
//         </a>

//         <a href="https://github.com/FernandoRodriguez1" target="blank">
//           <img className="img" src={Github} alt="Github Icon" title="Github" />
//         </a>
//         <a href="#">
//           <img className="img" src={Email} alt="Linkedin Icon" title="Email" />
//         </a>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import Linkedin from "../../Images/linkedinIcon.png";
import Github from "../../Images/GitHub-logo.png";
import Email from "../../Images/Email-logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Fernando Rodriguez</h2>
        <h5>Developer</h5>
      </div>
      <div className="sotial-network">
        <a
          href="https://www.linkedin.com/in/fernando-rodriguez-a46935281/"
          target="blank"
        >
          <img
            className="img"
            src={Linkedin}
            alt="Linkedin Icon"
            title="Linkedin"
          />
        </a>
        <a href="https://github.com/FernandoRodriguez1" target="blank">
          <img className="img" src={Github} alt="Github Icon" title="Github" />
        </a>
        <a href="#">
          <img className="img" src={Email} alt="Linkedin Icon" title="Email" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
