const W = "min(1280px, 100vw - 80px)";

const MODULES = [
  { title: "Tehnika alused",     desc: "Kardimasina põhitõed, ohutus ja esimesed ringid rajal." },
  { title: "Sõidutehnika",       desc: "Trajektoorid, pidurdamine, kiirendamine ja vastaste möödasõit." },
  { title: "Võistlusstrateegia", desc: "Taktika, punktiarvestus ja psühholoogiline ettevalmistus." },
  { title: "Mehhaanika",         desc: "Masina hooldus, rehvid ja seadistamine eritingimustele." },
];

export default function AkadeemiaSection() {
  return (
    <section id="akadeemia" style={{ background: "#0a0a0a" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}>

        <div className="section-header-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "end", marginBottom: "64px",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/talendidrajale_akadeemia_logo.svg"
            alt="Kardiakadeemia"
            style={{
              height: "clamp(36px, 5.5vw, 80px)",
              width: "auto",
              display: "block",
              maxWidth: "100%",
            }}
          />
          <div>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", fontWeight: 400, marginBottom: "28px" }}>
              Süstemaatiline koolitusprogramm algajatele ja edasijõudnutele. <br />
              Kõik tasemed, üks koht.
            </p>
            <div className="cta-group" style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <a href="/kardiakadeemia" style={{
                padding: "13px 26px", background: "#ffffff", color: "#0a0a0a",
                fontSize: "13px", fontWeight: 500, textDecoration: "none", borderRadius: "100px",
              }}>Registreeri →</a>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>
                Algab 15. mai 2026
              </span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {MODULES.map((m, i) => (
            <div key={i} className="akadeemia-module-row" style={{
              display: "grid", gridTemplateColumns: "1fr 2fr",
              gap: "40px", alignItems: "start",
              padding: "32px 0", borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}>
              <h3 style={{ fontSize: "17px", fontWeight: 500, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                {m.title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, fontWeight: 400 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
