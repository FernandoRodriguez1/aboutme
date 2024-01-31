import { useContext } from "react";
import { dictionary_translations } from "./Dictionary";
import { TranslationContext } from "./TranslationContext";

const useTranslate = () => {
  const { language } = useContext(TranslationContext);
  const translations =
    dictionary_translations[language] || dictionary_translations["en"];

  const translationCache = {};

  return (key) => {
    if (translationCache[key]) {
      return translationCache[key];
    }

    const translationObject = translations.find((t) => t.key === key);
    const translation = translationObject ? translationObject.value : key;
    translationCache[key] = translation;

    return translation;
  };
};

export default useTranslate;
