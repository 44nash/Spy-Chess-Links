import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const getLang = () => {
    const stored = localStorage.getItem("lang");
    const fromI18n = i18n.language || stored || "en";
    return fromI18n.startsWith("es") ? "es" : "en";
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
      </select>
    </div>
  );
}

export default LanguageToggle;
