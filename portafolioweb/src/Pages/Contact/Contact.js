import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    id: "",
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
      alert("No puedes mandar un mensaje en blanco");
      return;
    }

    const response = await fetch(`http://localhost:3002/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: { stringValue: contact.name },
        Email: { stringValue: contact.email },
        Message: { stringValue: contact.message },
      }),
    });

    if (response.ok) {
      alert("¡Muchas Gracias por contactarme!");
    } else {
      alert("Error, no se pudo enviar.");
    }
  };

  console.log(contact);
  return (
    <div className="contact-section">
      <div className="contact-heading">
        <h2>Puedes contactarme aquí:</h2>
        <div className="divider"></div>
      </div>
      <div className="container-contact">
        <div className="contact-form">
          <h4>Envíame un mensaje</h4>
          <form onSubmit={handleSubmit} className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="input"
              value={contact.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              value={contact.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              value={contact.message}
              onChange={handleInputChange}
              placeholder="Inserte su mensaje aquí"
            ></textarea>
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
