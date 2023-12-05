import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-headings">
        <h2>Holaaaaaa</h2>
        <div className="divider"></div>
      </div>
      <div className="container-contact">
        <div className="contact-form">
          <h4>Send Me a message</h4>
          <form className="form">
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Inserte su mensaje aqui"></textarea>
            <button className="btn-submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
