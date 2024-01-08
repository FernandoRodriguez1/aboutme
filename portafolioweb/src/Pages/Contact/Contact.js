import React, { useState } from "react";
import CopyToClipboardButton from "../../components/botom";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contact.message.trim() === "") {
      alert("No puedes enviar un mensaje en blanco");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/portafolioweb/db-php.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(contact),
        }
      );

      if (response.ok) {
        alert("¡Muchas gracias por contactarme!");
      } else {
        alert("Error, no se pudo enviar.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="contact-section" id="contacto">
      <div className="contact-heading">
        <h2>Puedes contactarme aquí:</h2>
        <div className="divider"></div>
      </div>
      <div className="container-contact">
        <h4>Puedes enviarme un mail a mi direccion de correo electronico</h4>
        <CopyToClipboardButton />
      </div>
    </div>
  );
};

export default ContactForm;
