import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { TranslationContext } from "../customhooks/TranslationContext";
import useTranslate from "../customhooks/UseTranslate";
import espana from "../Images/espana.png";
import en from "../Images/estados-unidos.png";

const ComboLanguage = () => {
  const { language, changeLanguage } = useContext(TranslationContext);
  const translate = useTranslate();

  const [icon, setIcon] = useState(language === "es" ? espana : en);

  const changeLanguageHandler = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);

    setIcon(selectedLanguage === "es" ? espana : en);
  };

  return (
    <div className="brand">
      <img src={icon} height={25} alt="Language icon" />
      <Form.Select
        onChange={changeLanguageHandler}
        value={language}
        className="copy-button"
        aria-label="Select language"
      >
        <option value="es">{translate("ES")}</option>
        <option value="en">{translate("EN")}</option>
      </Form.Select>
    </div>
  );
};

export default ComboLanguage;
