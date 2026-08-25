import React, { useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";
 import profilePic from "../assets/emblem.png";
 import AdComponent from "../components/AdComponent";
 import { useTranslation } from "react-i18next";
 import LanguageToggle from "../components/LanguageToggle/LanguageToggle";
 import ScrollHint from "../components/ScrollHint";

export default function LinkPage() {
  const [isRulesDialogOpen, setIsRulesDialogOpen] = useState(false);
  const dialogScrollRef = useRef(null);
  const links = [
    { label: "App Store", url: "https://apps.apple.com/us/app/spy-chess-genesis/id6670184900" },
    { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mnash.spy_chess" },
    { label: "TikTok", url: "https://tiktok.com/@spychess0" },
    { label: "Instagram", url: "https://www.instagram.com/spy.chess?igsh=MTY0N2x5N3AzM3pwNA==" },
    { label: "YouTube", url: "https://www.youtube.com/watch?v=f0kpi1GPmZE" },
    { label: "Facebook", url: "https://www.facebook.com/share/1C1n7sHWyR/" },
    { label: "Website", url: "https://thespychess.com/" },
    { label: "X", url: "https://x.com/" },
  ];

  const handleMouseOver = (e) => {
    const el = e.currentTarget;
    el.style.transform = "scale(1.03)";
    el.style.opacity = "0.9";
  };

  const handleMouseOut = (e) => {
    const el = e.currentTarget;
    el.style.transform = "scale(1)";
    el.style.opacity = "1";
  };

    const { t, i18n } = useTranslation();

  const pieceLabels = [
    { label: "RA", pieceKey: "piece-rook", pawnLabel: "PA", square: "1a", pawnSquare: "2a" },
    { label: "NB", pieceKey: "piece-knight", pawnLabel: "PB", square: "1b", pawnSquare: "2b" },
    { label: "BC", pieceKey: "piece-bishop", pawnLabel: "PC", square: "1c", pawnSquare: "2c" },
    { label: "QD", pieceKey: "piece-queen", pawnLabel: "PD", square: "1d", pawnSquare: "2d" },
    { label: "KE", pieceKey: "piece-king", pawnLabel: "PE", square: "1e", pawnSquare: "2e", excluded: true },
    { label: "BF", pieceKey: "piece-bishop", pawnLabel: "PF", square: "1f", pawnSquare: "2f" },
    { label: "NG", pieceKey: "piece-knight", pawnLabel: "PG", square: "1g", pawnSquare: "2g" },
    { label: "RH", pieceKey: "piece-rook", pawnLabel: "PH", square: "1h", pawnSquare: "2h" },
  ];

  const renderRule = (text) => {
    const spaceIdx = text.indexOf(" ");
    if (spaceIdx === -1) return text;
    return (
      <>
        <strong>{text.slice(0, spaceIdx)}</strong>
        {text.slice(spaceIdx)}
      </>
    );
  };

  const renderTurnRow = (icon, text, note, topMargin) => (
    <div className="sc-note-row" style={{ marginTop: topMargin }}>
      <span>{icon}</span>
      <span className="sc-note-text">
        {renderRule(text)}{" "}
        <span style={{ color: "var(--sc-text-secondary)", fontSize: "12px" }}>({note})</span>
      </span>
    </div>
  );

  return (
    <div className="sc-page">
      <div className="sc-panel-card">
        <div style={{ position: "absolute", top: 14, right: 16 }}>
          <LanguageToggle />
        </div>
        <br/>


        <img
          src={profilePic}
          alt=""
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "8px",
          }}
        />

        <h1 className="sc-title">{t("main-title")}</h1>

        <button
          className="sc-btn-gold"
          onClick={() => setIsRulesDialogOpen(true)}
          style={{ marginBottom: "20px" }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          {t("rules")}
        </button>

        {links.map((link) => {
          const isStore =
            link.label === "Google Play" || link.label === "App Store";

          return (
            <a
              key={link.label}
              href={link.url}
              className={
                "sc-link-row " +
                (link.label === "App Store"
                  ? "store-shake"
                  : link.label === "Google Play"
                  ? "store-shake store-shake-delay"
                  : "")
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isStore ? (
                <span className="sc-store-badge-wrap">
                  <img
                    src={
                      link.label === "Google Play"
                        ? "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        : "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    }
                    alt={link.label}
                    style={{ height: "40px" }}
                  />
                </span>
              ) : (
                <SocialIcon url={link.url} style={{ height: 30, width: 30 }} />
              )}
              <span>{link.label}</span>
            </a>
          );
        })}

        <br/>
        <AdComponent />
      </div>

      <ScrollHint variant="page" />

      {isRulesDialogOpen && (
        <div
          className="sc-dialog-overlay"
          onClick={() => setIsRulesDialogOpen(false)}
        >
          <div className="sc-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="sc-dialog-scroll" ref={dialogScrollRef}>
              <h2 className="sc-dialog-title">
                {t("rules-title")}
              </h2>

              {[t("rules_1"), t("rules_2"), t("rules_3")].map((rule, idx) => (
                <div className="sc-rule-item" key={idx}>
                  <span className="sc-rule-number">{idx + 1}</span>
                  <span className="sc-rule-body">{renderRule(rule)}</span>
                </div>
              ))}

              <div className="sc-rule-item">
                <span className="sc-rule-number">4</span>
                <div style={{ flex: 1 }}>
                  <span className="sc-rule-body">{renderRule(t("rules_4"))}</span>
                  <div className="sc-tip">
                    <span>💡</span>
                    <span className="sc-tip-text">{t("rules_5")}</span>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    {renderTurnRow("⚫", t("rules-turn-black"), t("rules-turn-black-note"), 0)}
                    {renderTurnRow("⚪", t("rules-turn-white"), t("rules-turn-white-note"), "6px")}
                  </div>
                </div>
              </div>

              <div className="sc-rule-item">
                <span className="sc-rule-number">5</span>
                <span className="sc-rule-body">{t("rules_7")}</span>
              </div>

              <h3 className="sc-table-title">
                {t("rules-labels-title")}
              </h3>
              <table className="sc-table">
                <tbody>
                  {pieceLabels.map((row) => (
                    <tr key={row.label}>
                      <td>
                        {row.excluded ? "❌" : "✅"} <strong>{row.label}</strong> – {t(row.pieceKey)}
                        {row.excluded ? "*" : ""} ({row.square})
                      </td>
                      <td>
                        ✅ <strong>{row.pawnLabel}</strong> – {t("piece-pawn")} ({row.pawnSquare})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="sc-table-footnote">
                * {t("piece-king")} ({t("rules-king-excluded")})
              </p>

              <button
                className="sc-btn-gold"
                onClick={() => setIsRulesDialogOpen(false)}
                style={{ marginTop: "20px", width: "100%" }}
              >
                Close
              </button>
            </div>
            <ScrollHint variant="dialog" containerRef={dialogScrollRef} />
          </div>
        </div>
      )}
    </div>
  );
}
