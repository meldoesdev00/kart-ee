import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Galerii",
  description:
    "Eesti kardispordi fotogalerii – pildid etappidest, treeningutest ja võistlustest.",
  openGraph: {
    title: "Galerii | Eesti Kardiliit",
    description: "Fotod etappidest, treeningutest ja võistlustest.",
    url: "https://kart.ee/galerii",
  },
  alternates: { canonical: "https://kart.ee/galerii" },
};

const W = "min(1280px, 100vw - 80px)";

const ALBUMID = [
  {
    title: "Talendid Rajale 2026",
    desc: "Hooaja 2026 etapifotod",
    href: "https://www.facebook.com/media/set/?vanity=kardiliit&set=a.1132564875251549",
  },
  {
    title: "Kardiliidu Facebooki leht",
    desc: "Kõik uusimad fotod ja videod",
    href: "https://www.facebook.com/kardiliit",
  },
];

export default function GaleriiPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="subpage-hero section-inner"
          style={{ background: "#0a0a0a", paddingTop: "120px", paddingBottom: "80px" }}
        >
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Eesti Kardiliit
            </div>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 0.93,
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Galerii
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.45)",
                fontWeight: 400,
                maxWidth: "480px",
              }}
            >
              Fotod ja videod etappidest, treeningutest ja võistlustest leiab Facebookist.
            </p>
          </div>
        </section>

        {/* Albumid */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "56px 40px 80px" }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                marginBottom: "32px",
              }}
            >
              Fotogaleriid
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "560px" }}>
              {ALBUMID.map((a, i) => (
                <a
                  key={i}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="galerii-card"
                >
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#0a0a0a",
                        marginBottom: "3px",
                      }}
                    >
                      {a.title}
                    </div>
                    <div style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}>
                      {a.desc}
                    </div>
                  </div>
                  <span style={{ fontSize: "18px", color: "rgba(0,0,0,0.25)", flexShrink: 0 }}>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
