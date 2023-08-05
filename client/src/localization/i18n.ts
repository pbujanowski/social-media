import { use } from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.translation.json";
import plTranslation from "./translations/pl.translation.json";

const initLocalization = () => {
  const resources = {
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  };

  use(initReactI18next).init({ resources, lng: "en", fallbackLng: "en", interpolation: { escapeValue: false } });
};

export { initLocalization };
