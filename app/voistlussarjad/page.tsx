import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Võistlussarjad",
  description:
    "Eesti kardivõistlussarjad Kadetist KZ2-ni. Rahvuslikud ja rahvusvahelised sarjad, hooajakava ja registreerimine.",
  openGraph: {
    title: "Võistlussarjad | Eesti Kardiliit",
    description:
      "Eesti kardivõistlussarjad Kadetist KZ2-ni. Rahvuslikud ja rahvusvahelised sarjad.",
    url: "https://kart.ee/voistlussarjad",
  },
  alternates: { canonical: "https://kart.ee/voistlussarjad" },
};

const W = "min(1280px, 100vw - 80px)";

const KLASSID = [
  { name: "Kadet",  age: "kõige nooremad", engine: "50cc",        desc: "Esimene kokkupuude võistluskardiga" },
  { name: "Micro",  age: "8–10 a",         engine: "60–125cc",    desc: "Nooremate võistlusklass" },
  { name: "Mini",   age: "10–12 a",        engine: "60–125cc",    desc: "Esimesed võistlused, rõhk arengul" },
  { name: "Junior", age: "12–14 a",        engine: "125cc",       desc: "Kiireim arengufaas enne täiskasvanute klasse" },
  { name: "Senior", age: "15+ a",          engine: "125cc",       desc: "Täiskasvanute klass, avatud kõigile" },
  { name: "DD2",    age: "15+ a",          engine: "125cc DD2",   desc: "Käigukastiga klass, tehnilisem sõitmine" },
  { name: "KZ2",    age: "15+ a",          engine: "125cc KZ2",   desc: "Käigukastiga kõrgeim klass" },
];

const SARJAD = [
  {
    title: "Talendid Rajale",
    desc: "Hobikardisari noortele U11 ja U14. Eelnev kogemus pole vajalik. 6 etappi üle Eesti.",
    href: "/talendid-rajale",
  },
  {
    title: "Eesti Meistrivõistlused",
    desc: "Riiklik tippvõistlus kõigis klassides. Korraldab Eesti Autospordi Liit.",
    href: null,
  },
  {
    title: "Karikasari",
    desc: "Hooajaülene punktiarvestus maist septembrini. Korraldab Vasalemma Kardiklubi (Uskumatu Võidusõit).",
    href: null,
  },
];

export default function VoistlussarjadPage() {
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
                marginBottom: "40px",
              }}
            >
              Võistlussarjad
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 400,
                maxWidth: "520px",
              }}
            >
              Kardispordiga saab Eestis ja lähiriikides tegeleda mitmel tasandil ja sõita mitmes
              erinevas sarjas.
            </p>
          </div>
        </section>

        {/* Võistluskart intro */}
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
                Mis on võistluskart?
              </h2>
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.55)",
                    fontWeight: 400,
                    marginBottom: "16px",
                  }}
                >
                  Võistluskart on mõeldud spetsiaalselt kardivõistlusteks. See erineb oluliselt
                  hobikardist nii jõudluse, kiiruse kui ka juhitavuse poolest.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.45)",
                    fontWeight: 400,
                    marginBottom: "28px",
                  }}
                >
                  Mitmed klubid korraldavad trennipäevi, kus saab ühekordselt võistluskardiga
                  sõitmist proovida. Info trennipäeva kohta saab otse kardiklubilt.
                </p>
                <a
                  href="/hobikart"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    textDecoration: "none",
                    padding: "12px 22px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "100px",
                  }}
                >
                  Vaata hobikartide kohta →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Võistlusklassid */}
        <section style={{ background: "#0a0a0a" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
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
                gap: "48px",
                alignItems: "end",
                marginBottom: "48px",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  color: "#ffffff",
                }}
              >
                Võistlusklassid
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 400,
                }}
              >
                Võistlusklassid jaotuvad sõitja vanuse järgi. Kõige noorematele on mõeldud Kadet,
                seejärel Micro, Mini, Junior, Senior, DD2 ja KZ2. DD2 ja KZ2 klassid kasutavad
                käigukasti.
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {KLASSID.map((k, i) => (
                <div
                  key={i}
                  className="klass-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 120px 1fr",
                    gap: "32px",
                    alignItems: "center",
                    padding: "22px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {k.name}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                        marginBottom: "2px",
                      }}
                    >
                      {k.age}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.25)",
                        fontFamily: "monospace",
                      }}
                    >
                      {k.engine}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.5,
                      fontWeight: 400,
                    }}
                  >
                    {k.desc}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.2)",
                marginTop: "24px",
                lineHeight: 1.6,
              }}
            >
              Ajakohased tingimused leiab Eesti Autospordi Liidu (EAL) kodulehelt.
            </p>
          </div>
        </section>

        {/* Sarjad */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
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
                color: "#0a0a0a",
                marginBottom: "40px",
              }}
            >
              Sarjad
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {SARJAD.map((s, i) => (
                <div
                  key={i}
                  className="sari-card"
                  style={{
                    padding: "36px 40px",
                    borderRadius: "14px",
                    background: "#f9f9f9",
                    border: "1px solid rgba(0,0,0,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "32px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#0a0a0a",
                        letterSpacing: "-0.02em",
                        marginBottom: "10px",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgba(0,0,0,0.55)",
                        lineHeight: 1.65,
                        fontWeight: 400,
                        maxWidth: "540px",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                  {s.href && (
                    <a
                      href={s.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#0a0a0a",
                        textDecoration: "none",
                        padding: "12px 22px",
                        border: "1px solid rgba(0,0,0,0.18)",
                        borderRadius: "100px",
                        flexShrink: 0,
                      }}
                    >
                      Vaata lähemalt →
                    </a>
                  )}
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(0,0,0,0.4)",
                lineHeight: 1.75,
                fontWeight: 400,
                marginTop: "40px",
                maxWidth: "640px",
              }}
            >
              Lisaks on kõrgetasemelised sarjad lähinaabruses — CIK-FIA klassid Soome
              meistrivõistlustel, Rotax sarjad Lätis Prokardi raames. Rahvusvahelistest absoluutne
              tipp on World Series Karting (WSK).
            </p>
          </div>
        </section>

        {/* Võistluskardirajad */}
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
              Võistluskardirajad Eestis
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
              Eestis on mitmeid võistluskardi jaoks sobivaid radasid. Rajatasude ning sõitmise
              võimaluste kohta tuleb infot küsida otse kardiraja haldajalt.
            </p>
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1MadnQTsXZXPXHbK_f4-CnTWpEDHpweU"
                style={{
                  width: "100%",
                  height: "440px",
                  border: "none",
                  borderRadius: "16px",
                  filter: "grayscale(100%) contrast(0.9) brightness(0.95)",
                  display: "block",
                }}
                title="Võistluskardirajad Eestis"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
