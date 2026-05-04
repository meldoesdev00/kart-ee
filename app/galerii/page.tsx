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
            <h1
              style={{
                fontSize: "clamp(56px, 8vw, 120px)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 0.93,
                color: "#ffffff",
              }}
            >
              Galerii
            </h1>
          </div>
        </section>

        {/* Content */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.55)",
                fontWeight: 400,
                maxWidth: "560px",
                marginBottom: "48px",
              }}
            >
              Eesti Kardiliidu ja Talendid Rajale sarja fotod leiad Facebooki albumitest.
            </p>
            <a
              href="https://www.facebook.com/media/set/?vanity=talendidrajale&set=a.1452434943556138"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: "#0a0a0a",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "100px",
                letterSpacing: "-0.01em",
              }}
            >
              Vaata fotogaleriid Facebookis →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
