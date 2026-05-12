import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import { RegistrationButton } from "@/app/components/RegistrationButton";

export const metadata: Metadata = {
  title: "Kardiakadeemia",
  description:
    "Süstemaatiline kardiakadeemia koolitusprogramm algajatele ja edasijõudnutele. Hobikardist võistluskardini – professionaalsed treenerid, struktureeritud kursused.",
  openGraph: {
    title: "Kardiakadeemia | Eesti Kardiliit",
    description:
      "Koolitusprogramm algajatele ja edasijõudnutele. Hobikardist võistluskardini.",
    url: "https://kart.ee/kardiakadeemia",
    images: [{ url: "/photos/kardiakadeemia.jpg", alt: "Kardiakadeemia" }],
  },
  alternates: { canonical: "https://kart.ee/kardiakadeemia" },
};

const W = "min(1280px, 100vw - 80px)";

export default function KardiakadeemiaPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="subpage-hero subpage-hero-photo section-inner" style={{ background: "#0a0a0a", paddingTop: "120px", paddingBottom: "0" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/talendidrajale_akadeemia_logo_hero.svg"
              alt="Kardiakadeemia"
              className="subpage-hero-logo"
              style={{
                height: "clamp(64px, 9vw, 120px)",
                width: "auto",
                display: "block",
                maxWidth: "100%",
                marginBottom: "40px",
              }}
            />
            <p style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 400,
              maxWidth: "520px",
              marginBottom: "48px",
            }}>
              Võistluskardimaailma tutvustamine noortele kardisõiduhuvilistele üle Eesti.
            </p>
            <div className="cta-group" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "72px" }}>
              <RegistrationButton
                program="kardiakadeemia"
                label="Registreeri →"
                style={{
                  padding: "15px 32px",
                  background: "#ffffff",
                  color: "#0a0a0a",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "100px",
                }}
              />
            </div>
          </div>

          {/* Hero image */}
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px 0" }}>
            <div style={{ width: "100%", height: "clamp(260px, 44vh, 520px)", borderRadius: "20px 20px 0 0", overflow: "hidden", background: "#111" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/kardiakadeemia_2.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.65 }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
