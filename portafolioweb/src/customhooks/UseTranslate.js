import { useContext } from "react";
import { dictionary_translations } from "./Dictionary";
import { TranslationContext } from "./TranslationContext";

const useTranslate = () => {
  const { language } = useContext(TranslationContext);
  return (key) => {
    const translation = dictionary_translations[language]
      ? dictionary_translations[language].find((t) => t.key === key).value
      : dictionary_translations["en"].find((t) => t.key === key).value;

    return translation || key;
  };
};

export default useTranslate;
