import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations_en from "./en.json";
import translations_uk from "./uk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations_en,
    },
    uk: {
      translation: translations_uk,
    },
  },

  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
