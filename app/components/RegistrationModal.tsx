"use client";
import { useState, useEffect } from "react";

export type RegistrationProgram = "talendid-rajale" | "kardiakadeemia";

const INPUT: React.CSSProperties = {
  width: "100%", padding: "10px 14px",
  border: "1px solid rgba(0,0,0,0.15)",
  borderRadius: "10px", fontSize: "14px",
  color: "#0a0a0a", background: "#fafafa",
  outline: "none", fontFamily: "inherit",
};

const LBL: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 500,
  color: "rgba(0,0,0,0.4)", letterSpacing: "0.08em",
  textTransform: "uppercase" as const, marginBottom: "5px",
};

type F = { nimi: string; vanus: string; pikkus: string; kaal: string; linn: string; vastutava: string; telefon: string; email: string };

export function RegistrationModal({ program, onClose }: { program: RegistrationProgram; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<F>({ nimi: "", vanus: "", pikkus: "", kaal: "", linn: "", vastutava: "", telefon: "", email: "" });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const set = (k: keyof F) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "rgba(10,10,10,0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "cookieSlideIn 0.3s ease both",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#ffffff", borderRadius: "20px",
          width: "100%", maxWidth: "520px", maxHeight: "90vh",
          display: "flex", flexDirection: "column",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)", overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 28px 20px", borderBottom: "1px solid rgba(0,0,0,0.07)", flexShrink: 0,
        }}>
          <div>
            <p style={{ fontSize: "17px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
              Registreerimine
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.12)", background: "transparent",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "16px", color: "rgba(0,0,0,0.5)", flexShrink: 0,
            }}
            aria-label="Sulge"
          >×</button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", padding: "24px 28px 32px", flex: 1 }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%", background: "#0a0a0a",
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l5 5 7-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p style={{ fontSize: "17px", fontWeight: 500, color: "#0a0a0a", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                Aitäh registreerimast!
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(0,0,0,0.5)", maxWidth: "320px", margin: "0 auto" }}>
                Võtame Teiega ühendust esimesel võimalusel.
              </p>
            </div>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div>
                <label style={LBL}>Sõitja nimi</label>
                <input type="text" required value={form.nimi} onChange={set("nimi")} placeholder="Eesnimi Perenimi" style={INPUT} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={LBL}>Vanus</label>
                  <input type="text" required value={form.vanus} onChange={set("vanus")} placeholder="nt 12" style={INPUT} />
                </div>
                <div>
                  <label style={LBL}>Pikkus (cm)</label>
                  <input type="text" required value={form.pikkus} onChange={set("pikkus")} placeholder="nt 150" style={INPUT} />
                </div>
                <div>
                  <label style={LBL}>Kaal (kg)</label>
                  <input type="text" required value={form.kaal} onChange={set("kaal")} placeholder="nt 45" style={INPUT} />
                </div>
              </div>

              <div>
                <label style={LBL}>Linn</label>
                <input type="text" required value={form.linn} onChange={set("linn")} placeholder="nt Tallinn" style={INPUT} />
              </div>

              <div>
                <label style={LBL}>Vastutava isiku nimi</label>
                <input type="text" required value={form.vastutava} onChange={set("vastutava")} placeholder="Lapsevanema täisnimi" style={INPUT} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={LBL}>Telefon</label>
                  <input type="tel" required value={form.telefon} onChange={set("telefon")} placeholder="+372 ..." style={INPUT} />
                </div>
                <div>
                  <label style={LBL}>E-mail</label>
                  <input type="email" required value={form.email} onChange={set("email")} placeholder="email@näide.ee" style={INPUT} />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "4px", padding: "14px",
                  background: "#0a0a0a", color: "#ffffff",
                  border: "none", borderRadius: "10px",
                  fontSize: "13px", fontWeight: 500,
                  cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.01em",
                }}
              >
                Saada registreerimistaotlus →
              </button>
              <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)", lineHeight: 1.6, textAlign: "center" }}>
                Andmeid kasutatakse üksnes registreerimispäringule vastamiseks.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
