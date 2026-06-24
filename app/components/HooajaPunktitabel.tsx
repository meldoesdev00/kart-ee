import { Fragment } from "react";

const ETAPID = ["I", "II", "III", "IV", "V", "VI"] as const;

export type PunktiRida = {
  nimi: string;
  kokkuPunktid?: number;
} & {
  [K in `etapp${typeof ETAPID[number]}Koht` | `etapp${typeof ETAPID[number]}Punktid`]?: number;
};

export type HooajaPunktitabelData = {
  pealkiri: string;
  u11?: PunktiRida[];
  u14?: PunktiRida[];
};

const W = "min(1280px, 100vw - 80px)";
const TH: React.CSSProperties = { padding: "10px 10px", fontSize: "11px", fontWeight: 500, color: "rgba(0,0,0,0.35)", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" };
const TD: React.CSSProperties = { padding: "12px 10px", fontSize: "13px", color: "#0a0a0a", whiteSpace: "nowrap" };

function PunktiTable({ rows, klass }: { rows: PunktiRida[]; klass: "U11" | "U14" }) {
  if (!rows || rows.length === 0) return null;
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
          {klass} klass
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="participants-table" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <th rowSpan={2} style={{ ...TH, textAlign: "left", verticalAlign: "bottom" }}>Koht</th>
              <th rowSpan={2} style={{ ...TH, textAlign: "left", verticalAlign: "bottom" }}>Nimi</th>
              {ETAPID.map((roman) => (
                <th key={roman} colSpan={2} style={{ ...TH, textAlign: "center", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>
                  {roman} etapp
                </th>
              ))}
              <th rowSpan={2} style={{ ...TH, textAlign: "right", verticalAlign: "bottom", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>Kokku</th>
            </tr>
            <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.1)" }}>
              {ETAPID.map((roman) => (
                <Fragment key={roman}>
                  <th style={{ ...TH, textAlign: "right", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>Koht</th>
                  <th style={{ ...TH, textAlign: "right" }}>Pkt</th>
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)" }}>
                <td style={{ ...TD, color: i < 3 ? "#0a0a0a" : "rgba(0,0,0,0.4)", fontWeight: i < 3 ? 500 : 400 }}>{i + 1}</td>
                <td style={{ ...TD, fontWeight: i < 3 ? 500 : 400 }}>{r.nimi}</td>
                {ETAPID.map((roman) => {
                  const koht = r[`etapp${roman}Koht`];
                  const pkt = r[`etapp${roman}Punktid`];
                  return (
                    <Fragment key={roman}>
                      <td style={{ ...TD, textAlign: "right", color: "rgba(0,0,0,0.45)", borderLeft: "1px solid rgba(0,0,0,0.06)" }}>{koht ?? "–"}</td>
                      <td style={{ ...TD, textAlign: "right", color: "rgba(0,0,0,0.45)" }}>{pkt ?? "–"}</td>
                    </Fragment>
                  );
                })}
                <td style={{ ...TD, textAlign: "right", fontWeight: 500, borderLeft: "1px solid rgba(0,0,0,0.06)" }}>{r.kokkuPunktid ?? "–"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function HooajaPunktitabel({ data }: { data: HooajaPunktitabelData | null }) {
  if (!data || ((!data.u14 || data.u14.length === 0) && (!data.u11 || data.u11.length === 0))) return null;

  return (
    <section id="punktitabel" style={{ background: "#f5f5f5" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
      </div>
      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "48px" }}>
          {data.pealkiri}
        </h2>
        {data.u14 && <PunktiTable rows={data.u14} klass="U14" />}
        {data.u11 && <PunktiTable rows={data.u11} klass="U11" />}
      </div>
    </section>
  );
}
