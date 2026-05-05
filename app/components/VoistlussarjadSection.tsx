"use client";
import { useState } from "react";

const W = "min(1280px, 100vw - 80px)";

const SARJAD = [
  { title: "Eesti Meistrivõistlused", desc: "Riiklik tippvõistlus kõigis vanuseklassides", date: "15.06.2026", classes: ["Mini","Junior","Senior","OK"] },
  { title: "Karikasari",              desc: "Hooajaülene punktiarvestus mitmes etapis",    date: "01.05.2026", classes: ["OK-N","Mini","Junior"] },
  { title: "Noorte Arenguseeria",     desc: "Spetsiaalsed võistlused noorte arendamiseks", date: "20.05.2026", classes: ["Bambino","Mini"] },
];

export default function VoistlussarjadSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="sarjad" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
      </div>
      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}>

        <div className="section-header-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "end", marginBottom: "64px",
        }}>
          <h2 style={{
            fontSize: "clamp(40px, 5.5vw, 88px)", fontWeight: 500,
            lineHeight: 0.95, letterSpacing: "-0.04em", color: "#0a0a0a",
          }}>
            Võistlussarjad
          </h2>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {SARJAD.map((s, i) => (
            <div
              key={i}
              className="voistlussarjad-row"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "32px",
                alignItems: "center",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                background: active === i ? "rgba(0,0,0,0.015)" : "transparent",
                margin: "0 -40px",
                padding: "28px 40px",
                transition: "background 0.15s",
              }}
            >
              {/* Left: title + desc + tags */}
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em", marginBottom: "6px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)", lineHeight: 1.55, fontWeight: 400, marginBottom: "10px" }}>
                  {s.desc}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {s.classes.map(c => (
                    <span key={c} style={{
                      fontSize: "11px", padding: "3px 9px",
                      border: "1px solid rgba(0,0,0,0.12)", borderRadius: "100px",
                      color: "rgba(0,0,0,0.5)", letterSpacing: "0.03em",
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Right: date + arrow */}
              <div className="v-arrow" style={{ textAlign: "right", flexShrink: 0 }}>
                <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.35)", display: "block", marginBottom: "4px" }}>{s.date}</span>
                <span style={{ fontSize: "14px", color: "rgba(0,0,0,0.25)", display: "block", opacity: active === i ? 1 : 0, transition: "opacity 0.15s" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
