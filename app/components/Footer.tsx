"use client";

const W = "min(1280px, 100vw - 80px)";

const NAV = [
  { label: "Talendid Rajale", href: "/talendid-rajale" },
  { label: "Kardiakadeemia", href: "/kardiakadeemia" },
  { label: "Võistlussarjad", href: "/voistlussarjad" },
  { label: "Meist", href: "/meist" },
];

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: "#0a0a0a" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ maxWidth: W, margin: "0 auto", padding: "72px 40px" }}>
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "40px",
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kardiliit_white.svg" alt="Kardiliit" style={{ width: "56px", height: "56px", display: "block" }} />
              <span style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "-0.01em", color: "#ffffff" }}>
                Eesti Kardiliit
              </span>
            </div>
            <p style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: "260px",
            }}>
              Kardispordi arendamine, toetamine ja propageerimine Eestis alates 1999.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://www.instagram.com/eesti_kardiliit"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 400, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/kardiliit"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 400, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
