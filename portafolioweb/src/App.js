import "./App.css";
import { useEffect } from "react";
import { urlClimas } from "./endpoints";
import Footer from "./Pages/Footer/Footer";
import Aboutme from "./Pages/Aboutme/Aboutme";
import MyCarreer from "./Pages/MyCarreer/MyCarreer";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Pages/Navbar/Navbar";
import Portafolio from "./Pages/Portafolio/Portafolio";

function App() {
  useEffect(() => {
    fetch(urlClimas, {
      method: "GET",
      headers: {
        // Aquí puedes agregar cualquier encabezado que necesites
        "Content-Type": "application/json", // Por ejemplo, contentType JSON
        // Otras cabeceras según sea necesario
      },
    })
      .then((response) => response.json()) // Parsea la respuesta como JSON
      .then((data) => {
        console.log({ data }); // Hacer algo con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Aboutme />
      <MyCarreer />
      <Portafolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
