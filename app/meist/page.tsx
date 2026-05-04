import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Meist",
  description:
    "Eesti Kardiliit on Eesti kardispordi katusorganisatsioon. Tutvu meie meeskonna, missiooni ja ajaluga.",
  openGraph: {
    title: "Meist | Eesti Kardiliit",
    description:
      "Eesti kardispordi katusorganisatsioon – meeskond, missioon ja ajalugu.",
    url: "https://kart.ee/meist",
  },
  alternates: { canonical: "https://kart.ee/meist" },
};

const W = "min(1280px, 100vw - 80px)";

const JUHATUS = [
  { name: "Mait Laidvee", email: "mait@kart.ee" },
  { name: "Timo Raudsik", email: "kart@kart.ee" },
];

const REKVISIIDID = [
  { label: "Nimi",         value: "MTÜ Eesti Kardiliit" },
  { label: "Aadress",      value: "Pirni tn 3, Kristiine linnaosa, Tallinn, Harju maakond" },
  { label: "Registrikood", value: "80106439" },
  { label: "Telefon",      value: "+372 520 0657" },
];

const MILESTONES = [
  { year: "1999", text: "Eesti Kardiliit asutatud. Missioon: kardispordi arendamine, toetamine ja propageerimine Eestis." },
  { year: "2012", text: "Esimene rahvusvaheline esindus CIK-FIA Euroopa meistrivõistlustel." },
  { year: "2018", text: "Noorte Arenguseeria loomine. Fookus 8–14-aastastel sõitjatel." },
  { year: "2022", text: "Talendid Rajale programm – struktureeritud kardisari noortele U11 ja U14 vanuseklassides." },
  { year: "2026", text: "6 etappi Talendid Rajale sarjas. Rajad üle Eesti: Tallinn, Aravete, Käina, Tabasalu, Laitse, Rapla." },
];

export default function MeistPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="subpage-hero section-inner" style={{ background: "#ffffff", paddingTop: "120px" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px 80px" }}>
            <h1 style={{
              fontSize: "clamp(56px, 8vw, 120px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.93,
              color: "#0a0a0a",
              marginBottom: "56px",
            }}>
              Eesti Kardiliit
            </h1>

            <div className="section-header-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
              marginBottom: "64px",
            }}>
              <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(0,0,0,0.55)", fontWeight: 400 }}>
                Eesti Kardiliit on asutatud 1999. aastal eesmärgiga arendada, toetada ja propageerida
                kardisporti Eestis. Esindame liikmete huve ning toetame noorte talentide arengut.
              </p>
              <div>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(0,0,0,0.42)", fontWeight: 400, marginBottom: "28px" }}>
                  Organiseerime võistlussarju, noorteprogramme ja koolitusi – Bambinost kuni rahvusvahelise
                  OK-klassini. Talendid Rajale sari on avatud kõigile noortele ilma eelneva kogemuseta.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a href="mailto:kart@kart.ee" style={{
                    padding: "13px 26px", background: "#0a0a0a", color: "#ffffff",
                    fontSize: "13px", fontWeight: 500, textDecoration: "none", borderRadius: "100px",
                  }}>
                    Võta ühendust
                  </a>
                </div>
              </div>
            </div>

            {/* Image grid */}
            <div className="meist-image-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px" }}>
              <div style={{ height: "clamp(200px, 30vh, 380px)", borderRadius: "14px", overflow: "hidden", background: "#f0f0f0" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/akadeemia.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ height: "clamp(200px, 30vh, 380px)", borderRadius: "14px", overflow: "hidden", background: "#f0f0f0" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/talendidrajale.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ background: "#f7f7f7" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}>
            <h2 style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              marginBottom: "48px",
            }}>
              Ajalugu
            </h2>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              {MILESTONES.map((m, i) => (
                <div key={i} className="timeline-row" style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "40px",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  alignItems: "baseline",
                }}>
                  <span style={{ fontSize: "14px", fontFamily: "monospace", color: "#0a0a0a", fontWeight: 500, letterSpacing: "0.02em" }}>
                    {m.year}
                  </span>
                  <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", lineHeight: 1.65, fontWeight: 400 }}>
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}>
            <div className="board-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
              <div>
                <h2 style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "#0a0a0a",
                  marginBottom: "40px",
                }}>
                  Juhatus
                </h2>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                  {JUHATUS.map((j, i) => (
                    <div key={i} style={{
                      padding: "20px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                    }}>
                      <span style={{ fontSize: "16px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
                        {j.name}
                      </span>
                      <a href={`mailto:${j.email}`} style={{
                        fontSize: "13px",
                        color: "rgba(0,0,0,0.45)",
                        textDecoration: "none",
                        fontWeight: 400,
                      }}>
                        {j.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  color: "#0a0a0a",
                  marginBottom: "40px",
                }}>
                  Rekvisiidid
                </h2>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                  {REKVISIIDID.map((r, i) => (
                    <div key={i} style={{
                      padding: "20px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.07)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "16px",
                    }}>
                      <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.35)", fontWeight: 400, flexShrink: 0 }}>
                        {r.label}
                      </span>
                      <span style={{ fontSize: "15px", fontWeight: 400, color: "#0a0a0a", textAlign: "right" }}>
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
