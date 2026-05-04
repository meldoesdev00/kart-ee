export default function SplitHero() {
  return (
    <section className="hero-split" style={{ width: "100%", height: "100svh", display: "flex", overflow: "hidden" }}>

      {/* Left panel – Talendid Rajale */}
      <div className="hero-panel" style={{
        width: "50%", background: "#0a0a0a",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "clamp(40px,5vw,80px)", paddingTop: "120px",
        overflow: "hidden", position: "relative",
      }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/talendidrajale.jpg"
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.45,
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.4) 100%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{
            color: "#ffffff",
            fontSize: "clamp(56px, 8vw, 120px)",
            fontWeight: 500,
            lineHeight: 0.93,
            letterSpacing: "-0.04em",
            marginBottom: "32px",
          }}>
            Talendid<br />Rajale
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px", lineHeight: 1.65,
            maxWidth: "300px", marginBottom: "36px", fontWeight: 400,
          }}>
            Kardisari noortele U11 ja U14 vanuseklassides. 6 etappi üle Eesti.
          </p>
          <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="/talendid-rajale" style={{
              padding: "13px 26px", background: "#ffffff", color: "#0a0a0a",
              fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em",
              textDecoration: "none", borderRadius: "100px",
            }}>Registreeri →</a>
            <a href="/talendid-rajale" style={{
              padding: "13px 26px", border: "1px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.85)", fontSize: "13px",
              textDecoration: "none", borderRadius: "100px",
            }}>Etapid 2026</a>
          </div>
        </div>
      </div>

      <div className="hero-divider" style={{ width: "1px", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />

      {/* Right panel – Kardiakadeemia */}
      <div className="hero-panel" style={{
        width: "50%", background: "#0a0a0a",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "clamp(40px,5vw,80px)", paddingTop: "120px",
        overflow: "hidden", position: "relative",
      }}>
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/kardiakadeemia.jpg"
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.45,
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.4) 100%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            color: "#ffffff",
            fontSize: "clamp(56px, 8vw, 120px)",
            fontWeight: 500,
            lineHeight: 0.93,
            letterSpacing: "-0.04em",
            marginBottom: "32px",
          }}>
            Kardi- <br />
            akadeemia
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "15px", lineHeight: 1.65,
            maxWidth: "300px", marginBottom: "36px", fontWeight: 400,
          }}>
            Süstemaatiline koolitusprogramm algajatele ja edasijõudnutele.
          </p>
          <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="/kardiakadeemia" style={{
              padding: "13px 26px", background: "#ffffff", color: "#0a0a0a",
              fontSize: "13px", fontWeight: 500, letterSpacing: "0.01em",
              textDecoration: "none", borderRadius: "100px",
            }}>Registreeri →</a>
            <a href="/kardiakadeemia" style={{
              padding: "13px 26px", border: "1px solid rgba(255,255,255,0.22)",
              color: "rgba(255,255,255,0.85)", fontSize: "13px",
              textDecoration: "none", borderRadius: "100px",
            }}>Tutvu kursustega</a>
          </div>
        </div>
      </div>
    </section>
  );
}
