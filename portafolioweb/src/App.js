import "./App.css";

import Footer from "./Pages/Footer/Footer";
import Aboutme from "./Pages/Aboutme/Aboutme";
import Contact from "./Pages/Contact/Contact";
import Portafolio from "./Pages/Portafolio/Portafolio";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Aboutme />
      <Portafolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
