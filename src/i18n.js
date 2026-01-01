// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "main-title": "Spy Chess",
        "instagram": "Instagram",
        "youtube": "YouTube",
        "tiktok": "TikTok",
        "website": "Website",
        "facebook": "Facebook",
        "X": "X",
        "google-play": "Google Play",
        "app-store": "App Store",
      },
    },
    es: {
      translation: {
        "main-title": "Ajedrez Espía",
        "instagram": "Instagram",
        "youtube": "YouTube",
        "tiktok": "TikTok",
        "website": "Sitio Web",
        "facebook": "Facebook",
        "X": "X",
        "google-play": "Google Play",
        "app-store": "App Store",
      },
    },
    pt: {
      translation: {
        "main-title": "Xadrez Espião",
        "instagram": "Instagram",
        "youtube": "YouTube",
        "tiktok": "TikTok",
        "website": "Site",
        "facebook": "Facebook",
        "X": "X",
        "google-play": "Google Play",
        "app-store": "App Store",
      },
    },
    fr: {
      translation: {
        "main-title": "Échecs Espion",
        "instagram": "Instagram",
        "youtube": "YouTube",
        "tiktok": "TikTok",
        "website": "Site Web",
        "facebook": "Facebook",
        "X": "X",
        "google-play": "Google Play",
        "app-store": "App Store",
      },
    },
    ru: {
      translation: {
        "main-title": "Шпионские Шахматы",
        "instagram": "Instagram",
        "youtube": "YouTube",
        "tiktok": "TikTok",
        "website": "Веб-сайт",
        "facebook": "Facebook",
        "X": "X",
        "google-play": "Google Play",
        "app-store": "App Store",
      },
    },
    de: {
      translation: {
        "main-title": "Spion Schach",
        "instagram": "Instagram",
        "youtube": "YouTube",
        "tiktok": "TikTok",
        "website": "Webseite",
        "facebook": "Facebook",
        "X": "X",
        "google-play": "Google Play",
        "app-store": "App Store",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
