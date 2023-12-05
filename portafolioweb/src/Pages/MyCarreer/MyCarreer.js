import React from "react";
import "./MyCarreer.css";
import imagee from "../../Images/pexels-photo-1516680-removebg-preview.png";
function MyCarreer() {
  /*
    Proyectos ver si backend o no
    */
  return (
    <>
      <div className="about">
        <img className="Fernando" src={imagee} alt="Background Code" />
        <div className="AboutInfo">
          <h2>PROYECTOS</h2>
          <div className="divider"></div>
          <p>
            Nuestra comunidad de jugadores ha compartido sus recomendaciones
            para ayudarte a encontrar nuevos títulos emocionantes. Estos juegos
            han sido elogiados por su calidad, diversión y capacidad para
            cautivar a los jugadores de todas las edades. Sumérgete en mundos
            virtuales llenos de aventuras, desafíos y sorpresas. Explora
            diferentes géneros y descubre experiencias únicas que te mantendrán
            entretenido durante horas. Desde emocionantes juegos de acción hasta
            cautivadores RPG, hay algo para cada tipo de jugador. Confía en las
            opiniones de nuestra comunidad y descubre nuevos juegos para
            disfrutar. ¡Prepárate para una experiencia de juego inolvidable!
          </p>
          <button className="dowcv">Rear</button>
        </div>
      </div>
    </>
  );
}

export default MyCarreer;
