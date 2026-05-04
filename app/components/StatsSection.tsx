const STATS = [
  { n: "250+", l: "Registreeritud liiget" },
  { n: "12",   l: "Etappi hooajal" },
  { n: "15+",  l: "Aastat tegevust" },
  { n: "6",    l: "Võistlusklassi" },
];

export default function StatsSection() {
  return (
    <section style={{ background: "#0a0a0a" }}>
      <div style={{
        maxWidth: "min(1280px, 100vw - 80px)",
        margin: "0 auto",
        padding: "0 40px",
      }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>
      <div className="stats-grid section-inner" style={{
        maxWidth: "min(1280px, 100vw - 80px)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        padding: "0 40px",
      }}>
        {STATS.map((s, i) => (
          <div
            key={s.l}
            style={{
              padding: "72px 0",
              paddingRight: "40px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : undefined,
              paddingLeft: i > 0 ? "40px" : undefined,
            }}
          >
            <div style={{
              fontSize: "clamp(56px, 6vw, 88px)",
              fontWeight: 300,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              color: "#ffffff",
              marginBottom: "10px",
            }}>
              {s.n}
            </div>
            <div style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
