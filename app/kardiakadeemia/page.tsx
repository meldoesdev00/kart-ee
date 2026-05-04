import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

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

const MODULES = [
  {
    n: "01",
    title: "Tehnika alused",
    duration: "2 nädalavahetust",
    desc: "Kardimasina põhitõed, ohutusnõuded ja esimesed ringid rajal. Mõeldud algajatele vanuses 8–14 aastat.",
    topics: ["Kardimasina anatoomia", "Ohutuseeskirjad", "Esimesed sõidud", "Põhitrajektoorid"],
  },
  {
    n: "02",
    title: "Sõidutehnika",
    duration: "3 nädalavahetust",
    desc: "Trajektoorid, pidurdamine, kiirendamine ja vastaste möödasõit. Eeldab Moodul 01 läbimist.",
    topics: ["Optimaalsed trajektoorid", "Hilise pidurdamise tehnika", "Ümbersõit", "Rehvide soojendamine"],
  },
  {
    n: "03",
    title: "Võistlusstrateegia",
    duration: "2 nädalavahetust",
    desc: "Taktika, punktiarvestus ja psühholoogiline ettevalmistus. Koos tiimijuhtimise ja analüüsiga.",
    topics: ["Kvalifikatsioonitaktika", "Heitlussõit vs. punktisõit", "Tiimi suhtlus", "Videosalvestuste analüüs"],
  },
  {
    n: "04",
    title: "Mehhaanika",
    duration: "1 nädalavahetus",
    desc: "Masina hooldus, rehvid ja seadistamine eritingimustele. Teoreetiline + praktiline sessioon.",
    topics: ["Mootorite põhitõed", "Rehvide valik ja hooldus", "Karburatsiooni seadistamine", "Andmete lugemine"],
  },
];

export default function KardiakadeemiaPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="subpage-hero section-inner" style={{ background: "#0a0a0a", paddingTop: "120px", paddingBottom: "0" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>

            <h1 style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.93,
              color: "#ffffff",
              marginBottom: "40px",
              maxWidth: "700px",
            }}>
              Kardiakadeemia
            </h1>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 400,
              maxWidth: "520px",
              marginBottom: "48px",
            }}>
              Süstemaatiline neljamooduline koolitusprogramm algajatele ja edasijõudnutele.
              Kõik tasemed, üks koht.
            </p>
            <div className="cta-group" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "72px" }}>
              <a href="mailto:kart@kart.ee" style={{
                padding: "15px 32px",
                background: "#ffffff",
                color: "#0a0a0a",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "100px",
              }}>
                Registreeri →
              </a>
              <a href="#moodulid" style={{
                padding: "15px 32px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                fontWeight: 400,
                textDecoration: "none",
                borderRadius: "100px",
              }}>
                Vaata mooduleid
              </a>
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

        {/* Modules */}
        <section id="moodulid" style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 120px" }}>
            <div className="section-header-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "end",
              marginBottom: "64px",
            }}>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#0a0a0a",
              }}>
                Õppekava
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(0,0,0,0.45)", fontWeight: 400 }}>
                Programm koosneb neljast moodulist, mille läbimine võtab ühe hooaja.
                Iga moodul lõpeb praktilise hinnanguga.
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              {MODULES.map((m, i) => (
                <div key={i} className="module-row" style={{
                  padding: "48px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  alignItems: "start",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "12px" }}>
                      <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
                        {m.title}
                      </h3>
                      <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)", fontFamily: "Aspekta", letterSpacing: "0.1em" }}>{m.duration}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.45)", lineHeight: 1.7, fontWeight: 400 }}>
                      {m.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {m.topics.map(t => (
                      <div key={t} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(0,0,0,0.2)", flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.45)", fontWeight: 400 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
