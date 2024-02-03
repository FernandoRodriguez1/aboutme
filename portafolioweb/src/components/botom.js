import React, { useState } from "react";
import useTranslate from "../customhooks/UseTranslate";

const CopyToClipboardButton = () => {
  const translate = useTranslate();
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
        {translate("contact-button")}
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
          {translate("contact-button-green")}
        </span>
      )}
    </div>
  );
};

export default CopyToClipboardButton;
