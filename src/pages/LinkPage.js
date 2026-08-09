import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
 import profilePic from "../assets/emblem.png";
 import AdComponent from "../components/AdComponent";
 import { useTranslation } from "react-i18next";
 import LanguageToggle from "../components/LanguageToggle/LanguageToggle";

export default function LinkPage() {
  const [isRulesDialogOpen, setIsRulesDialogOpen] = useState(false);
  const links = [
    { label: "App Store", url: "https://apps.apple.com/us/app/spy-chess-genesis/id6670184900" },
    { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mnash.spy_chess" },
    { label: "TikTok", url: "https://tiktok.com/@spychess0" },
    { label: "Instagram", url: "https://www.instagram.com/spy.chess?igsh=MTY0N2x5N3AzM3pwNA==" },
    { label: "YouTube", url: "https://www.youtube.com/@SpyChess-u4t" },
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
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: topMargin }}>
      <span>{icon}</span>
      <span>
        {renderRule(text)}{" "}
        <span style={{ color: "#777", fontSize: "12px" }}>({note})</span>
      </span>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
        background: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "#fff",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          position: "relative",
        }}
      >
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

        <h1 style={{ fontSize: "28px", marginTop: 0, marginBottom: "20px" }}>{t("main-title")}</h1>

        <button
          onClick={() => setIsRulesDialogOpen(true)}
          style={{
            marginBottom: "20px",
            padding: "12px 24px",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "transform 0.15s",
          }}
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
                link.label === "App Store"
                  ? "store-shake"
                  : link.label === "Google Play"
                  ? "store-shake store-shake-delay"
                  : undefined
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                textDecoration: "none",
                background: "black",
                color: "white",
                padding: "14px 20px",
                borderRadius: "12px",
                margin: "12px 0",
                fontSize: "18px",
                transition: "transform 0.15s, opacity 0.15s",
              }}
            >
              {isStore ? (
                <img
                  src={
                    link.label === "Google Play"
                      ? "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      : "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  }
                  alt={link.label}
                  style={{ height: "40px" }}
                />
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

      {isRulesDialogOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsRulesDialogOpen(false)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "30px",
              maxWidth: "500px",
              maxHeight: "80vh",
              overflow: "auto",
              width: "90%",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginTop: 0, marginBottom: "20px", textAlign: "center" }}>
              {t("rules-title")}
            </h2>
            <ol style={{ textAlign: "left", lineHeight: "1.8", paddingLeft: "20px" }}>
              <li>{renderRule(t("rules_1"))}</li>
              <li>{renderRule(t("rules_2"))}</li>
              <li>{renderRule(t("rules_3"))}</li>
              <li>
                {renderRule(t("rules_4"))}
                <div
                  style={{
                    marginTop: "10px",
                    padding: "12px 14px",
                    background: "#f4f4fb",
                    borderRadius: "10px",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span>💡</span>
                    <span>{t("rules_5")}</span>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    {renderTurnRow("⚫", t("rules-turn-black"), t("rules-turn-black-note"), 0)}
                    {renderTurnRow("⚪", t("rules-turn-white"), t("rules-turn-white-note"), "6px")}
                  </div>
                </div>
              </li>
              <li>{t("rules_7")}</li>
            </ol>

            <h3 style={{ marginTop: "20px", marginBottom: "10px", fontSize: "16px" }}>
              {t("rules-labels-title")}
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <tbody>
                {pieceLabels.map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "6px 4px", textAlign: "left" }}>
                      {row.excluded ? "❌" : "✅"} <strong>{row.label}</strong> – {t(row.pieceKey)}
                      {row.excluded ? "*" : ""} ({row.square})
                    </td>
                    <td style={{ padding: "6px 4px", textAlign: "left" }}>
                      ✅ <strong>{row.pawnLabel}</strong> – {t("piece-pawn")} ({row.pawnSquare})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "12px", color: "#777", marginTop: "6px" }}>
              * {t("piece-king")} ({t("rules-king-excluded")})
            </p>

            <button
              onClick={() => setIsRulesDialogOpen(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
