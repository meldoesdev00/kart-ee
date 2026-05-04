"use client";

import { useState } from "react";

const CARDS = [
  {
    title: "Võistluskart",
    href: "/voistlussarjad",
    img: "/photos/voistluskart.jpg",
  },
  {
    title: "Hobikart",
    href: "/talendid-rajale",
    img: "/photos/hobikart.jpg",
  },
  {
    title: "Kardiakadeemia",
    href: "/kardiakadeemia",
    img: "/photos/kardiakadeemia.jpg",
  },
];

function ArrowBtn({ hovered }: { hovered: boolean }) {
  return (
    <div style={{
      position: "absolute",
      bottom: "24px",
      right: "24px",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.22)",
      background: hovered ? "#ffffff" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.3s ease, border-color 0.3s ease",
    }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7h8M7 3l4 4-4 4" stroke={hovered ? "#0a0a0a" : "#ffffff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Card({ card }: { card: typeof CARDS[0] }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={card.href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="klass-card"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        aspectRatio: "448/620",
        background: "#111",
        textDecoration: "none",
        clipPath: "inset(0% round 14px)",
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        transform: hov ? "scale(1.06)" : "scale(1)",
        transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.img}
          alt={card.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.85 }}
        />
      </div>

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, padding: "32px" }}>
        <p style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "10px",
          fontWeight: 400,
        }}>
        </p>
        <h3 style={{
          color: "#ffffff",
          fontSize: "clamp(28px, 3.2vw, 48px)",
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>
          {card.title}
        </h3>
      </div>

      <ArrowBtn hovered={hov} />
    </a>
  );
}

export default function KardiklaasidSection() {
  return (
    <section className="klass-cards" style={{
      background: "#ffffff",
      padding: "8px",
      display: "flex",
      gap: "8px",
    }}>
      {CARDS.map(c => <Card key={c.title} card={c} />)}
    </section>
  );
}
