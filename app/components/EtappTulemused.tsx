"use client";
import { useState } from "react";

export type Tulemus = {
  koht: number;
  nimi: string;
  parimRing: string;
  punktid: number;
};

export type EtappResult = {
  _id: string;
  etappNr: number;
  etappNimi: string;
  kuupaev: string;
  asukoht: string;
  u11: Tulemus[];
  u14: Tulemus[];
};

function ResultTable({ results, klass }: { results: Tulemus[]; klass: "U11" | "U14" }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
          {klass} klass
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="participants-table">
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.1)" }}>
              {["Koht", "Sõitja", "Parim ring", "Punktid"].map((h, hi) => (
                <th key={h} style={{ textAlign: hi === 3 ? "right" : "left", padding: "10px 12px", fontSize: "11px", fontWeight: 500, color: "rgba(0,0,0,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)" }}>
                <td style={{ padding: "13px 12px", fontSize: "13px", color: r.koht <= 3 ? "#0a0a0a" : "rgba(0,0,0,0.35)", fontWeight: r.koht <= 3 ? 500 : 400, width: "56px" }}>
                  {r.koht <= 3 ? ["🥇", "🥈", "🥉"][r.koht - 1] : r.koht}
                </td>
                <td style={{ padding: "13px 12px", fontSize: "14px", color: "#0a0a0a" }}>
                  {r.nimi}
                </td>
                <td style={{ padding: "13px 12px", fontSize: "13px", color: "rgba(0,0,0,0.45)", fontFamily: "monospace" }}>
                  {r.parimRing}
                </td>
                <td style={{ padding: "13px 12px", fontSize: "14px", fontWeight: 500, color: "#0a0a0a", textAlign: "right" }}>
                  {r.punktid}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EtappTables({ etapp }: { etapp: EtappResult }) {
  return (
    <>
      {etapp.u11?.length > 0 && <ResultTable results={etapp.u11} klass="U11" />}
      {etapp.u14?.length > 0 && <ResultTable results={etapp.u14} klass="U14" />}
    </>
  );
}

const W = "min(1280px, 100vw - 80px)";

export function EtappTulemused({ etapid }: { etapid: EtappResult[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!etapid || etapid.length === 0) return null;

  const [latest, ...older] = etapid;

  return (
    <section style={{ background: "#f5f5f5" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
      </div>
      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}>

        {/* Latest etapp — always visible */}
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "8px" }}>
          Tulemused – {latest.etappNimi}
        </h2>
        <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", marginBottom: "48px" }}>
          {latest.kuupaev} · {latest.asukoht}
        </p>
        <EtappTables etapp={latest} />

        {/* Older etapid — accordion */}
        {older.length > 0 && (
          <div style={{ marginTop: "16px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(0,0,0,0.35)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px" }}>
              Varasemad tulemused
            </p>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {older.map((etapp, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={etapp._id} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      style={{
                        width: "100%", display: "flex", alignItems: "center",
                        justifyContent: "space-between", padding: "20px 0",
                        background: "transparent", border: "none",
                        cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                      }}
                    >
                      <div>
                        <span style={{ fontSize: "15px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
                          {etapp.etappNimi}
                        </span>
                        <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", marginLeft: "14px" }}>
                          {etapp.kuupaev} · {etapp.asukoht}
                        </span>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        style={{ flexShrink: 0, transition: "transform 0.25s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path d="M3 6l5 5 5-5" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div style={{ paddingBottom: "24px" }}>
                        <EtappTables etapp={etapp} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
