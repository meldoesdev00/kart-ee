import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Hobikart",
  description:
    "Hobikardiga alustamine Eestis – rajad, kardid, hinnad ja nõuanded. Kõik mida vajad, et esimest korda rooli istuda.",
  openGraph: {
    title: "Hobikart | Eesti Kardiliit",
    description:
      "Hobikardiga alustamine – rajad, kardid ja nõuanded algajale.",
    url: "https://kart.ee/hobikart",
  },
  alternates: { canonical: "https://kart.ee/hobikart" },
};

const W = "min(1280px, 100vw - 80px)";

export default function HobikartPage() {
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
              Hobikart
            </h1>
          </div>
        </section>

        {/* Sektsioon 1 – Mis on hobikart? */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <div
              className="section-header-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "start",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "#0a0a0a",
                }}
              >
                Mis on hobikart?
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: "rgba(0,0,0,0.55)",
                  fontWeight: 400,
                }}
              >
                Hobikart on mõeldud eelkõige lõbusaks ajaveetmiseks kardirajal ja harrastajatele.
                Hobikardid on lihtsamad, vastupidavamad ja ohutumad kui võistluskardid. Parim
                võimalus esimest korda kardispordiga tutvumiseks on just hobikart.
              </p>
            </div>
          </div>
        </section>

        {/* Sektsioon 2 – Info cardid */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <div
              className="section-header-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                alignItems: "start",
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  padding: "36px 32px",
                  borderRadius: "14px",
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Kardikool / Kardiakadeemia
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.55)",
                    fontWeight: 400,
                  }}
                >
                  Mitmed kardikeskused korraldavad noortele mõeldud kardikoole. Õpid karti
                  juhtimist, ohutusnõudeid ja sõidutehnikat kogenud treenerite juhendamisel.
                  Eesti omavalitsused toetavad noorte huvitegevust, sealhulgas kardikoolitusi.
                </p>
                <a
                  href="/kardiakadeemia"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    textDecoration: "none",
                    marginTop: "4px",
                  }}
                >
                  Vaata Kardiakadeemiat →
                </a>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  padding: "36px 32px",
                  borderRadius: "14px",
                  background: "#f7f7f7",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Kuidas alustada?
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.55)",
                    fontWeight: 400,
                  }}
                >
                  Esimest korda proovimisel ei pea omama erivarustust – kardikeskustes on kõik
                  olemas. Talendid Rajale sari on täiuslik algus – ei nõua eelnevat kogemust
                  ega varustust.
                </p>
                <a
                  href="/talendid-rajale"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    textDecoration: "none",
                    marginTop: "4px",
                  }}
                >
                  Vaata Talendid Rajale →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sektsioon 3 – Hobikardirajad Eestis */}
        <section style={{ background: "#0a0a0a" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "24px",
              }}
            >
              Hobikardirajad Eestis
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 400,
                maxWidth: "600px",
                marginBottom: "48px",
              }}
            >
              Eestis on mitmed hobikardirajad, kus saab sõita nii aastaringselt sisetingimustes
              kui ka hooajaliselt välitingimustes. Soovitatav on sõit ette broneerida,
              kontakteerudes otse kardikeskusega.
            </p>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1oqNeIf-n1DTQcfBZFHulQdu4jI-ItVQ"
                style={{
                  width: "100%",
                  height: "460px",
                  border: "none",
                  borderRadius: "16px",
                  filter: "grayscale(100%) contrast(0.9) brightness(0.95)",
                  display: "block",
                }}
                title="Hobikardirajad Eestis"
              />
            </div>
          </div>
        </section>

        {/* Sektsioon 4 – CTA */}
        <section style={{ background: "#f7f7f7" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "#0a0a0a",
                }}
              >
                Valmis proovima?
              </h2>
              <a
                href="/talendid-rajale"
                style={{
                  display: "inline-block",
                  padding: "15px 32px",
                  background: "#0a0a0a",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "100px",
                  letterSpacing: "-0.01em",
                }}
              >
                Registreeri Talendid Rajale
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
