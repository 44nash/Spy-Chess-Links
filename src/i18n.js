// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "main-title": "Spy Chess",
      },
    },
    es: {
      translation: {
        "main-title": "Ajedrez Espía",
      },
    },
    pt: {
      translation: {
        "main-title": "Xadrez Espião",
      },
    },
    fr: {
      translation: {
        "main-title": "Échecs Espion",
      },
    },
    ru: {
      translation: {
        "main-title": "Шпионские Шахматы",
      },
    },
    de: {
      translation: {
        "main-title": "Spion Schach",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
