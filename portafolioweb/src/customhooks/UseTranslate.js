import { useContext } from "react";
import { dictionary_translations } from "./Dictionary";


const useTranslate =()=>{
    return (key)=>{
        const translation = dictionary_translations[language]
        ? dictionary_translations[language].find((t)=>t.key === key).value
        : dictionary_translations["en"].find((t)=>t.key===key).value;

        return translation || key;
    };
};

export default useTranslate;