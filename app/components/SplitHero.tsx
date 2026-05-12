"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistrationModal, RegistrationProgram } from "./RegistrationModal";

const PANELS = [
  {
    img: "/photos/talendidrajale.jpg",
    logoSrc: "/talendidrajale_logo_hero.svg",
    logoAlt: "Talendid Rajale",
    desc: "Eesti vanim hobikardisari U11 ja U14 vanuseklassides.",
    href: "/talendid-rajale",
    program: "talendid-rajale" as RegistrationProgram,
    ctas: [
      { label: "Registreeri →", primary: true },
      { label: "Etapid 2026", href: "/talendid-rajale", primary: false },
    ],
  },
  {
    img: "/photos/kardiakadeemia.jpg",
    logoSrc: "/talendidrajale_akadeemia_logo_hero.svg",
    logoAlt: "Kardiakadeemia",
    desc: "Võistluskardi tutvustamine 5-11. aastastele noortele.",
    href: "/kardiakadeemia",
    program: "kardiakadeemia" as RegistrationProgram,
    ctas: [
      { label: "Registreeri →", primary: true },
      { label: "Tutvu kursustega", href: "/kardiakadeemia", primary: false },
    ],
  },
];

const OVERLAY = "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.25) 100%)";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function SplitHero() {
  const router = useRouter();
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const [modal, setModal] = useState<RegistrationProgram | null>(null);

  return (
    <>
      {/* Social icons — top-right on desktop, bottom-right on mobile */}
      <div className="hero-social-icons" style={{
        position: "fixed", zIndex: 600,
        display: "flex", gap: "10px", alignItems: "center",
      }}>
        <a
          href="https://www.facebook.com/kardiliit/?locale=et_EE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{
            color: "rgba(255,255,255,0.65)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/eesti_kardiliit/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            color: "rgba(255,255,255,0.65)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
        >
          <InstagramIcon />
        </a>
      </div>

      {/* ── DESKTOP: side-by-side (hidden on mobile) ── */}
      <section className="hero-split-desktop" style={{
        width: "100%", height: "100svh", display: "flex", overflow: "hidden",
      }}>
        {/* Panel 1 – Talendid Rajale */}
        <div
          onClick={() => router.push("/talendid-rajale")}
          onMouseEnter={() => setHoveredPanel(0)}
          onMouseLeave={() => setHoveredPanel(null)}
          style={{
            width: "50%", background: "#0a0a0a",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(40px,5vw,80px)", paddingTop: "120px",
            overflow: "hidden", position: "relative", cursor: "pointer",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/talendidrajale.jpg" alt="" style={{ position: "absolute", inset: 0, width: "110%", height: "110%", objectFit: "cover", opacity: hoveredPanel === 0 ? 0.75 : 0.5, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: OVERLAY, opacity: hoveredPanel === 0 ? 0.2 : 1, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/talendidrajale_logo_hero.svg" alt="Talendid Rajale" style={{ height: "clamp(52px, 8vw, 96px)", width: "auto", display: "block", marginBottom: "28px", maxWidth: "100%" }} />
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.65, maxWidth: "300px", marginBottom: "0", fontWeight: 400 }}>
              Eesti vanim hobikardisari U11 ja U14 vanuseklassides.
            </p>
            {/* desktop CTAs hidden — uncomment to restore:
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "36px" }}>
              <button onClick={() => setModal("talendid-rajale")} style={{ padding: "13px 26px", background: "#ffffff", color: "#0a0a0a", fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em", border: "none", borderRadius: "100px", cursor: "pointer", fontFamily: "inherit" }}>Registreeri →</button>
              <a href="/talendid-rajale" style={{ padding: "13px 26px", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontSize: "13px", textDecoration: "none", borderRadius: "100px" }}>Etapid 2026</a>
            </div>
            */}
          </div>
        </div>

        <div style={{ width: "1px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />

        {/* Panel 2 – Kardiakadeemia */}
        <div
          onClick={() => router.push("/kardiakadeemia")}
          onMouseEnter={() => setHoveredPanel(1)}
          onMouseLeave={() => setHoveredPanel(null)}
          style={{
            width: "50%", background: "#0a0a0a",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(40px,5vw,80px)", paddingTop: "120px",
            overflow: "hidden", position: "relative", cursor: "pointer",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/kardiakadeemia.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: hoveredPanel === 1 ? 0.75 : 0.5, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: OVERLAY, opacity: hoveredPanel === 1 ? 0.2 : 1, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/talendidrajale_akadeemia_logo_hero.svg" alt="Kardiakadeemia" style={{ height: "clamp(52px, 8vw, 96px)", width: "auto", display: "block", marginBottom: "28px", maxWidth: "100%" }} />
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.65, maxWidth: "300px", marginBottom: "0", fontWeight: 400 }}>
              Võistluskardi tutvustamine 5-11. aastastele noortele.
            </p>
            {/* desktop CTAs hidden — uncomment to restore:
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "36px" }}>
              <button onClick={() => setModal("kardiakadeemia")} style={{ padding: "13px 26px", background: "#ffffff", color: "#0a0a0a", fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em", border: "none", borderRadius: "100px", cursor: "pointer", fontFamily: "inherit" }}>Registreeri →</button>
              <a href="/kardiakadeemia" style={{ padding: "13px 26px", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontSize: "13px", textDecoration: "none", borderRadius: "100px" }}>Tutvu kursustega</a>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* ── MOBILE: vertical 50/50 split (hidden on desktop) ── */}
      <section
        className="hero-mobile"
        style={{ background: "#0a0a0a" }}
      >
        {PANELS.map((panel, i) => (
          <div key={i} onClick={() => router.push(panel.href)} style={{ flex: 1, position: "relative", background: "#0a0a0a", overflow: "hidden", cursor: "pointer" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={panel.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
            <div style={{ position: "absolute", inset: 0, background: OVERLAY }} />
            {i === 0 && (
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.15)", zIndex: 2 }} />
            )}
            <div style={{
              position: "absolute", inset: 0,
              padding: i === 0 ? "96px 28px 28px" : "20px 28px 28px",
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panel.logoSrc} alt={panel.logoAlt} style={{ height: "clamp(36px, 10vw, 52px)", width: "auto", display: "block", marginBottom: "12px", maxWidth: "85%", alignSelf: "flex-start" }} />
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.5, marginBottom: "0", fontWeight: 400 }}>
                {panel.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {modal && <RegistrationModal program={modal} onClose={() => setModal(null)} />}
    </>
  );
}
