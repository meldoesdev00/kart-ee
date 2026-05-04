"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const PANELS = [
  {
    img: "/photos/talendidrajale.jpg",
    titleLines: ["Talendid", "Rajale"],
    desc: "Kardisari noortele U11 ja U14 vanuseklassides. 6 etappi üle Eesti.",
    ctas: [
      { label: "Registreeri →", href: "/talendid-rajale", primary: true },
      { label: "Etapid 2026", href: "/talendid-rajale", primary: false },
    ],
  },
  {
    img: "/photos/kardiakadeemia.jpg",
    titleLines: ["Kardi-", "akadeemia"],
    desc: "Süstemaatiline koolitusprogramm algajatele ja edasijõudnutele.",
    ctas: [
      { label: "Registreeri →", href: "/kardiakadeemia", primary: true },
      { label: "Tutvu kursustega", href: "/kardiakadeemia", primary: false },
    ],
  },
];

const OVERLAY = "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.4) 100%)";

export default function SplitHero() {
  const [active, setActive] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const touchStartX = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(v => (v + 1) % PANELS.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  const goTo = (i: number) => {
    setActive(i);
    startInterval();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) goTo(delta < 0 ? 1 : 0);
  };

  return (
    <>
      {/* ── DESKTOP: side-by-side (hidden on mobile) ── */}
      <section className="hero-split-desktop" style={{
        width: "100%", height: "100svh", display: "flex", overflow: "hidden",
      }}>
        <div
          onMouseEnter={() => setHoveredPanel(0)}
          onMouseLeave={() => setHoveredPanel(null)}
          style={{
            width: "50%", background: "#0a0a0a",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(40px,5vw,80px)", paddingTop: "120px",
            overflow: "hidden", position: "relative", cursor: "default",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/talendidrajale.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: hoveredPanel === 0 ? 0.72 : 0.45, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: OVERLAY, opacity: hoveredPanel === 0 ? 0.25 : 1, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h1 style={{ color: "#ffffff", fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 500, lineHeight: 0.93, letterSpacing: "-0.04em", marginBottom: "32px" }}>
              Talendid<br />Rajale
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.65, maxWidth: "300px", marginBottom: "36px", fontWeight: 400 }}>
              Kardisari noortele U11 ja U14 vanuseklassides. 6 etappi üle Eesti.
            </p>
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="/talendid-rajale" style={{ padding: "13px 26px", background: "#ffffff", color: "#0a0a0a", fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em", textDecoration: "none", borderRadius: "100px" }}>Registreeri →</a>
              <a href="/talendid-rajale" style={{ padding: "13px 26px", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontSize: "13px", textDecoration: "none", borderRadius: "100px" }}>Etapid 2026</a>
            </div>
          </div>
        </div>

        <div style={{ width: "1px", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />

        <div
          onMouseEnter={() => setHoveredPanel(1)}
          onMouseLeave={() => setHoveredPanel(null)}
          style={{
            width: "50%", background: "#0a0a0a",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(40px,5vw,80px)", paddingTop: "120px",
            overflow: "hidden", position: "relative", cursor: "default",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/kardiakadeemia.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: hoveredPanel === 1 ? 0.72 : 0.45, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: OVERLAY, opacity: hoveredPanel === 1 ? 0.25 : 1, transition: "opacity 0.45s ease" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 500, lineHeight: 0.93, letterSpacing: "-0.04em", marginBottom: "32px" }}>
              Kardi-<br />akadeemia
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.65, maxWidth: "300px", marginBottom: "36px", fontWeight: 400 }}>
              Süstemaatiline koolitusprogramm algajatele ja edasijõudnutele.
            </p>
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="/kardiakadeemia" style={{ padding: "13px 26px", background: "#ffffff", color: "#0a0a0a", fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em", textDecoration: "none", borderRadius: "100px" }}>Registreeri →</a>
              <a href="/kardiakadeemia" style={{ padding: "13px 26px", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontSize: "13px", textDecoration: "none", borderRadius: "100px" }}>Tutvu kursustega</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE: full-height carousel (hidden on desktop) ── */}
      <section
        className="hero-mobile"
        style={{ width: "100%", height: "100svh", overflow: "hidden", position: "relative", display: "none" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Sliding track */}
        <div style={{
          display: "flex",
          width: `${PANELS.length * 100}%`,
          height: "100%",
          transform: `translateX(-${active * (100 / PANELS.length)}%)`,
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}>
          {PANELS.map((panel, i) => (
            <div key={i} style={{ width: `${100 / PANELS.length}%`, height: "100%", position: "relative", background: "#0a0a0a", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panel.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }} />
              <div style={{ position: "absolute", inset: 0, background: OVERLAY }} />
              <div style={{
                position: "absolute", inset: 0,
                padding: "96px 24px 88px",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
              }}>
                <h1 style={{ color: "#ffffff", fontSize: "56px", fontWeight: 500, lineHeight: 0.93, letterSpacing: "-0.04em", marginBottom: "18px" }}>
                  {panel.titleLines[0]}<br />{panel.titleLines[1]}
                </h1>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.55, marginBottom: "28px", fontWeight: 400 }}>
                  {panel.desc}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {panel.ctas.map((cta, k) => (
                    <a key={k} href={cta.href} style={{
                      padding: "12px 22px",
                      background: cta.primary ? "#ffffff" : "transparent",
                      color: cta.primary ? "#0a0a0a" : "rgba(255,255,255,0.85)",
                      border: cta.primary ? "none" : "1px solid rgba(255,255,255,0.22)",
                      fontSize: "13px", fontWeight: cta.primary ? 500 : 400,
                      textDecoration: "none", borderRadius: "100px",
                    }}>
                      {cta.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: "6px", zIndex: 10,
        }}>
          {PANELS.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: active === i ? "20px" : "6px",
              height: "6px", borderRadius: "3px",
              background: active === i ? "#ffffff" : "rgba(255,255,255,0.35)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
      </section>
    </>
  );
}
