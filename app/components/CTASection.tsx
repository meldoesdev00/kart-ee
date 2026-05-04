const W = "min(1280px, 100vw - 80px)";

export default function CTASection() {
  return (
    <section style={{ background: "#0a0a0a" }}>

      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ maxWidth: W, margin: "0 auto", padding: "120px 40px 160px" }}>
        <p style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          marginBottom: "48px",
          fontWeight: 400,
        }}>
          Alusta täna
        </p>

        <h2 style={{
          fontSize: "clamp(56px, 9vw, 140px)",
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: "-0.05em",
          color: "#ffffff",
          marginBottom: "64px",
          maxWidth: "900px",
        }}>
          Sina võid<br />olla meie<br />järgmine<br />talent.
        </h2>

        <div style={{
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          maxWidth: "560px",
          marginBottom: "48px",
        }} />

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="#talendid" style={{
            padding: "14px 28px",
            background: "#ffffff",
            color: "#0a0a0a",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.02em",
            textDecoration: "none",
            borderRadius: "100px",
          }}>
            Talendid Rajale 2026 →
          </a>
          <a href="#akadeemia" style={{
            padding: "14px 28px",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.65)",
            fontSize: "13px",
            letterSpacing: "0.02em",
            textDecoration: "none",
            borderRadius: "100px",
          }}>
            Kardiakadeemia
          </a>
        </div>
      </div>
    </section>
  );
}
