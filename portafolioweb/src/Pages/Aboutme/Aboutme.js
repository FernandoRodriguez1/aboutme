// import React from 'react'
// import "./Aboutme.css"
// import Linkedin from "../../Images/linkedinIcon.png"
// function Aboutme() {

//     /*
//     debera ir sobre mi, imagen
//     */
//   return (
//     <div className='container'>
//     <div className='principal'>
//       <p>
//         Me llamo Fernando Rodriguez, tengo 19 años, estoy actualmente cursando mi ultimo año de Tecnicatura en Programacion en la Universidad Tecnologica Nacional de Rosario (UTN),
//         soy de Rosario, Santa Fe, me gusta trabajar en equipo, tengo una buena comunicacion y predisposicion.
//       </p>
//     </div>
//     <img className='Me' src={Linkedin}></img>
//     </div>
//   )
// }

// export default Aboutme
import React from "react";
import "./Aboutme.css";
import imagee from "../../Images/pexels-photo-1516680-removebg-preview.png";
const Aboutme = () => {
  return (
    <>
      <main className="main">
        <div className="info-content">
          <h1 className="MyName">
            Me llamo <span>Fernando </span>Rodriguez
          </h1>
          <h2 className="dev-text"> Y soy Designer & Front-End Developer</h2>
        </div>
        <div>
          <img
            className="Fernando"
            src={imagee}
            alt="Fernando Rodriguez picture"
          ></img>
        </div>
      </main>
    </>
  );
};

export default Aboutme;
