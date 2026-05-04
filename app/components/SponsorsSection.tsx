"use client";

import { useState } from "react";

const W = "min(1280px, 100vw - 80px)";

const LOGOS = [0, 1, 2, 3, 4];

function LogoBox() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        width: "140px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 0.18s ease",
        cursor: "default",
        flexShrink: 0,
      }}
    >
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="4" width="48" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
        <text
          x="24"
          y="12"
          textAnchor="middle"
          fill="rgba(255,255,255,0.2)"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
          letterSpacing="0.1em"
        >
          LOGO
        </text>
      </svg>
    </div>
  );
}

export default function SponsorsSection() {
  return (
    <section style={{ background: "#0a0a0a" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "56px 40px" }}>
        <div style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 400,
          marginBottom: "28px",
          textAlign: "center",
        }}>
          Toetajad
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {LOGOS.map((_, i) => (
            <LogoBox key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
