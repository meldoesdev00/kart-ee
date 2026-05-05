"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const respond = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div data-cookie-banner style={{
      position: "fixed",
      bottom: "24px",
      left: "24px",
      right: "24px",
      zIndex: 9999,
      display: "flex",
      justifyContent: "flex-end",
      pointerEvents: "none",
      animation: "cookieSlideIn 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "360px",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.09)",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        pointerEvents: "all",
      }}>
        <p style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#0a0a0a",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}>
          Privaatsuseelistused
        </p>
        <p style={{
          fontSize: "13px",
          lineHeight: 1.65,
          color: "rgba(0,0,0,0.52)",
          marginBottom: "20px",
        }}>
          Kasutame küpsiseid veebilehe toimimiseks ning Google Analytics&apos;i abil
          külastusstatistika kogumiseks. Analüütilised küpsised eeldavad teie nõusolekut
          vastavalt EL küpsiste direktiivile.{" "}
          <a href="/privaatsuspoliitika" style={{ color: "rgba(0,0,0,0.4)", textDecoration: "underline" }}>
            Privaatsuspoliitika
          </a>
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => respond(false)}
            style={{
              flex: 1,
              padding: "10px 16px",
              background: "transparent",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(0,0,0,0.6)",
              cursor: "pointer",
              letterSpacing: "0",
            }}
          >
            Keeldu
          </button>
          <button
            onClick={() => respond(true)}
            style={{
              flex: 1,
              padding: "10px 16px",
              background: "#0a0a0a",
              border: "none",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#ffffff",
              cursor: "pointer",
              letterSpacing: "0",
            }}
          >
            Nõustun
          </button>
        </div>
      </div>
    </div>
  );
}
