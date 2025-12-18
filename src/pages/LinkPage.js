import React from "react";
import { SocialIcon } from "react-social-icons";
 import profilePic from "../assets/emblem.png";
 import AdComponent from "../components/AdComponent";
 import { useTranslation } from "react-i18next";
 import LanguageToggle from "../components/LanguageToggle/LanguageToggle";

export default function LinkPage() {
  const links = [
    { label: "Instagram", url: "https://www.instagram.com/spy.chess?igsh=MTY0N2x5N3AzM3pwNA==" },
    { label: "YouTube", url: "https://www.youtube.com/@SpyChess-u4t" },
    { label: "TikTok", url: "https://tiktok.com/@spychess0" },
    { label: "Website", url: "https://thespychess.com/" },
    { label: "Facebook", url: "https://www.facebook.com/share/1C1n7sHWyR/" },
    { label: "X", url: "https://x.com/" },
    { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mnash.spy_chess" },
    { label: "App Store", url: "https://apps.apple.com/us/app/spy-chess-genesis/id6670184900" },
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
            marginBottom: "40px",
          }}
        />

        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>{t("main-title")}</h1>

        {links.map((link) => {
          const isStore =
            link.label === "Google Play" || link.label === "App Store";

          return (
            <a
              key={link.label}
              href={link.url}
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
    </div>
  );
}
