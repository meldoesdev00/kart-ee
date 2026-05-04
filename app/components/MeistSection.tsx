const W = "min(1280px, 100vw - 80px)";

export default function MeistSection() {
  return (
    <section id="meist" style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
      </div>
      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}>

        <div className="section-header-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "start", marginBottom: "64px",
        }}>
          <h2 style={{
            fontSize: "clamp(40px, 5.5vw, 88px)", fontWeight: 500,
            lineHeight: 0.95, letterSpacing: "-0.04em", color: "#0a0a0a",
          }}>
            Meist
          </h2>
          <div style={{ paddingTop: "8px" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(0,0,0,0.52)", fontWeight: 400, marginBottom: "20px" }}>
              Eesti Kardiliit on asutatud 1999. aastal eesmärgiga arendada, toetada ja propageerida kardisporti Eestis.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(0,0,0,0.52)", fontWeight: 400, marginBottom: "36px" }}>
              Organiseerime võistlussarju, noorteprogramme ja koolitusi – algajast kuni rahvusvahelise tasemeni.
            </p>
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="mailto:kart@kart.ee" style={{
                padding: "13px 26px", background: "#0a0a0a", color: "#ffffff",
                fontSize: "13px", fontWeight: 500, textDecoration: "none", borderRadius: "100px",
              }}>Võta ühendust</a>
              <a href="/meist" style={{
                padding: "13px 26px", border: "1px solid rgba(0,0,0,0.12)", color: "rgba(0,0,0,0.6)",
                fontSize: "13px", textDecoration: "none", borderRadius: "100px",
              }}>Rohkem meist</a>
            </div>
          </div>
        </div>

        <div className="meist-image-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px" }}>
          <div style={{ height: "clamp(220px, 32vh, 360px)", borderRadius: "14px", overflow: "hidden", background: "#f0f0f0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/akadeemia.jpg"
              alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ height: "clamp(220px, 32vh, 360px)", borderRadius: "14px", overflow: "hidden", background: "#f0f0f0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photos/talendidrajale.jpg"
              alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
