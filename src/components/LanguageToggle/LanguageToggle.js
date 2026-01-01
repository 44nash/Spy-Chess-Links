import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const getLang = () => {
    const stored = localStorage.getItem("lang");
    const fromI18n = i18n.language || stored || "en";
    // Support multiple languages
    if (fromI18n.startsWith("es")) return "es";
    if (fromI18n.startsWith("pt")) return "pt";
    if (fromI18n.startsWith("fr")) return "fr";
    if (fromI18n.startsWith("ru")) return "ru";
    if (fromI18n.startsWith("de")) return "de";
    return "en";
  };

  const [lang, setLang] = React.useState(getLang());

  React.useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    localStorage.setItem("lang", lang);
  }, [lang, i18n]);

  return (
    <div className="language-toggle">
      <label htmlFor="language-select" className="sr-only">Language</label>
      <select
        id="language-select"
        className="language-select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        aria-label="Select language"
      >
        <option value="en">🇺🇸 English (EN)</option>
        <option value="es">🇪🇸 Español (ES)</option>
        <option value="pt">🇵🇹 Português (PT)</option>
        <option value="fr">🇫🇷 Français (FR)</option>
        <option value="ru">🇷🇺 Русский (RU)</option>
        <option value="de">🇩🇪 Deutsch (DE)</option>
      </select>
    </div>
  );
}

export default LanguageToggle;
