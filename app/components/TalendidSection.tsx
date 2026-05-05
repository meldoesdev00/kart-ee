const W = "min(1280px, 100vw - 80px)";

export default function TalendidSection() {
  return (
    <section id="talendid" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
      </div>

      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}>

        <div className="section-header-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "center", marginBottom: "64px",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/talendidrajale_logo.svg"
            alt="Talendid Rajale"
            className="section-logo"
            style={{
              height: "clamp(52px, 7vw, 108px)",
              width: "auto",
              display: "block",
              maxWidth: "100%",
            }}
          />
          <div>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(0,0,0,0.52)", fontWeight: 400, marginBottom: "28px" }}>
              Kardisari noortele U11 ja U14 vanuseklassides. 6 etappi üle Eesti aprillist septembrini.
              Osalustasu €79 etapi kohta. Varasem kogemus ei ole vajalik.
            </p>
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="/talendid-rajale" style={{
                padding: "13px 26px", background: "#0a0a0a", color: "#ffffff",
                fontSize: "13px", fontWeight: 500, textDecoration: "none", borderRadius: "100px",
              }}>Registreeri →</a>
              <a href="/talendid-rajale" style={{
                padding: "13px 26px", border: "1px solid rgba(0,0,0,0.12)", color: "rgba(0,0,0,0.6)",
                fontSize: "13px", textDecoration: "none", borderRadius: "100px",
              }}>2026 etapid</a>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "clamp(280px, 46vh, 560px)", borderRadius: "16px", overflow: "hidden", marginBottom: "40px", background: "#f0f0f0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photos/talendidrajale.jpg"
            alt="Talendid rajal" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </section>
  );
}
