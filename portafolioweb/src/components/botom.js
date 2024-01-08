import React, { useState } from "react";

const CopyToClipboardButton = () => {
  const emailToCopy = "rodriguezfernando1901@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    tempInput.value = emailToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <button className="copy-button" onClick={copyToClipboard}>
        Copiar dirección de correo
      </button>
      {copied && (
        <span
          style={{
            marginLeft: "10px",
            color: "green",
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          ¡Copiado con éxito!
        </span>
      )}
    </div>
  );
};

export default CopyToClipboardButton;
