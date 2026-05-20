import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { RegistrationButton } from "@/app/components/RegistrationButton";
import { EtappTulemused } from "@/app/components/EtappTulemused";
import { client } from "@/sanity/lib/client";
import { ETAPP_TULEMUSED_QUERY, ETAPP_OSAVOTJAD_QUERY, ETAPP_SEADED_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Talendid Rajale",
  description:
    "Eesti Kardiliidu noorteprogramm U11 ja U14 vanuseklassidele. 6 etappi üle Eesti, professionaalne treenimine ja karjäärivõimalused rahvusvahelisel areenil.",
  openGraph: {
    title: "Talendid Rajale | Eesti Kardiliit",
    description:
      "Noorteprogramm U11 ja U14 vanuseklassidele. 6 etappi üle Eesti kardiradadel.",
    url: "https://kart.ee/talendid-rajale",
    images: [{ url: "/photos/talendidrajale.jpg", alt: "Talendid Rajale" }],
  },
  alternates: { canonical: "https://kart.ee/talendid-rajale" },
};

const W = "min(1280px, 100vw - 80px)";

const ETAPID = [
  { n: "01", date: "26. aprill 2026",    location: "Unibet Kardikeskus",   city: "Tallinn",  href: "https://www.hobikart.ee/",                      logo: "/rajad-logod/unibet.svg",   logoH: 52 },
  { n: "02", date: "24. mai 2026",       location: "EST1 Karting Aravete", city: "Aravete",  href: "https://www.karting.ee",                         logo: "/rajad-logod/aravete.svg",  logoH: 76 },
  { n: "03", date: "28. juuni 2026",     location: "Kartdagö Käina",       city: "Käina",    href: "https://www.kartdago.ee",                        logo: "/rajad-logod/kartdago.svg", logoH: 36 },
  { n: "04", date: "26. juuli 2026",     location: "Kartdagö Tabasalu",    city: "Tabasalu", href: "https://www.kartdago.ee",                        logo: "/rajad-logod/kartdago.svg", logoH: 36 },
  { n: "05", date: "23. august 2026",    location: "LaitseRallyPark",      city: "Laitse",   href: "https://laitserallypark.ee/teenused/kardisoit/", logo: "/rajad-logod/laitse.svg",   logoH: 56 },
  { n: "06", date: "20. september 2026", location: "EST1 Karting Rapla",   city: "Rapla",    href: "https://www.karting.ee",                         logo: "/rajad-logod/rapla.svg",    logoH: 76 },
];


const CONDITIONS = [
  "Vanus kuni 14 aastat (U11 ja U14 klassid, vanuse ülempiir arvestatakse jooksva aasta 1. jaanuari seisuga)",
  "Minimaalset vanust määratud ei ole — sõitja kasv ja oskused peavad võimaldama ohutut sõitmist",
  "Eelnev võistluskogemus ei ole vajalik",
  "Osalemistasu sisaldab hobikardi ja kiivri kasutamist — oma varustust ei ole vaja",
  "Kohustuslik: kinnised jalatsid, pikkade säärte ja varrukatega riideid",
  "Soovituslik lisavarustus: kaelakaitse, ribikaitse, sõidukindad, kombinesoon",
];

type Osavotja = { _id: string; etappNr: string; etappNimi: string; nimi: string; vanuseklass: string; kool: string };
type EtappSeade = { etappNr: string; etappLabel: string; etappNimi: string };

export default async function TalendidRajalePage() {
  const [etapid, osavotjad, seaded] = await Promise.all([
    client.fetch(ETAPP_TULEMUSED_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(ETAPP_OSAVOTJAD_QUERY, {}, { next: { revalidate: 60 } }),
    client.fetch(ETAPP_SEADED_QUERY, {}, { next: { revalidate: 60 } }),
  ]);

  const seadeByNr = (seaded as EtappSeade[]).reduce<Record<string, EtappSeade>>((acc, s) => { acc[s.etappNr] = s; return acc; }, {});

  const osavotjadByEtapp = (osavotjad as Osavotja[]).reduce<Record<string, { etappNimi: string; u11: Osavotja[]; u14: Osavotja[] }>>((acc, o) => {
    if (!acc[o.etappNr]) acc[o.etappNr] = { etappNimi: o.etappNimi, u11: [], u14: [] };
    if (o.vanuseklass === "U11") acc[o.etappNr].u11.push(o);
    else if (o.vanuseklass === "U14") acc[o.etappNr].u14.push(o);
    return acc;
  }, {});
  const osavotjadEtapid = Object.entries(osavotjadByEtapp).sort(([a], [b]) => a.localeCompare(b));
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/talendidrajale_logo_hero.svg"
              alt="Talendid Rajale"
              className="subpage-hero-logo"
              style={{
                height: "clamp(64px, 9vw, 120px)",
                width: "auto",
                display: "block",
                maxWidth: "100%",
                marginBottom: "40px",
              }}
            />
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                fontWeight: 400,
                maxWidth: "540px",
                marginBottom: "48px",
              }}
            >
              Eesti Kardiliidu poolt korraldatav hobikardisari noortele, <br />
              mis on alguse saanud aastal 2013. <br />
              Registreerimine Talendid Rajale 2026 sarjasse on avatud.
            </p>

            {/* Key facts strip */}
            <div
              className="facts-strip"
              style={{
                display: "flex",
                gap: "0",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                overflow: "hidden",
                maxWidth: "600px",
              }}
            >
              {[
                { n: "€79",       l: "Osalustasu etapi kohta" },
                { n: "U11 / U14", l: "Vanuseklassid" },
                { n: "6",         l: "Etappi üle Eesti" },
              ].map((f, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: "24px 20px",
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                  }}
                >
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "-0.03em",
                      marginBottom: "4px",
                    }}
                  >
                    {f.n}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.35)",
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {f.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="cta-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "32px" }}>
              <RegistrationButton
                program="talendid-rajale"
                label="Registreeri →"
                style={{
                  padding: "13px 26px",
                  background: "#ffffff",
                  color: "#0a0a0a",
                  fontSize: "13px",
                  fontWeight: 500,
                  borderRadius: "100px",
                  letterSpacing: "0.01em",
                }}
              />
              <a
                href="/talendid-rajale-juhend-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "13px 26px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "13px",
                  fontWeight: 400,
                  textDecoration: "none",
                  borderRadius: "100px",
                }}
              >
                Võistlusjuhend ↓
              </a>
            </div>
          </div>
        </section>

        {/* Hooaeg 2026 */}
        <section style={{ background: "#f5f5f5" }}>
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
                marginBottom: "24px",
              }}
            >
              Hooaeg 2026
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.55)",
                fontWeight: 400,
                maxWidth: "600px",
                marginBottom: "36px",
              }}
            >
              2026 hooaeg koosneb kahest sarjast. Talendid Rajale Talvekarikas 2026 on lõppenud —
              vaata tulemusi. Talendid Rajale 2026 põhisarja registreerimine on avatud.
            </p>
            <div
              className="cta-group"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <a
                href="/tulemused"
                style={{
                  display: "inline-block",
                  padding: "13px 26px",
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#0a0a0a",
                  textDecoration: "none",
                }}
              >
                Vaata tulemusi
              </a>
              <RegistrationButton
                program="talendid-rajale"
                label="Registreeri"
                style={{
                  display: "inline-block",
                  padding: "13px 26px",
                  background: "#0a0a0a",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#ffffff",
                }}
              />
            </div>

            {/* Etapid */}
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#0a0a0a",
                marginTop: "64px",
                marginBottom: "28px",
              }}
            >
              Kalender 2026
            </h3>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              {ETAPID.map((e, i) => (
                <div
                  key={i}
                  className="etapp-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr 160px 180px",
                    gap: "24px",
                    alignItems: "center",
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.2)", fontFamily: "monospace", letterSpacing: "0.08em" }}>
                    {e.n}
                  </span>
                  <div>
                    <div style={{ fontSize: "17px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em", marginBottom: "3px" }}>
                      {e.location}
                    </div>
                    <div style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", fontWeight: 400 }}>
                      {e.city}
                    </div>
                  </div>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="etapp-logo-wrapper"
                    style={{
                      display: "flex", alignItems: "center",
                      textDecoration: "none", width: "160px", height: "80px", flexShrink: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.logo} alt={e.location} style={{ maxWidth: "160px", maxHeight: `${e.logoH}px`, width: "auto", height: "auto", objectFit: "contain", objectPosition: "left center", display: "block" }} />
                  </a>
                  <div
                    className="etapp-date"
                    style={{ fontSize: "14px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em", whiteSpace: "nowrap", textAlign: "right" }}
                  >
                    {e.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kuidas registreeruda */}
        <section style={{ background: "#0a0a0a" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}
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
              <div>
                <h2
                  style={{
                    fontSize: "clamp(28px, 3vw, 44px)",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Kuidas registreeruda
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 400,
                    marginBottom: "16px",
                  }}
                >
                  Registreeru igale etapile eraldi. Koht on kinnitatud pärast osalustasu
                  laekumist.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 400,
                  }}
                >
                  Varasem kogemus ei ole vajalik. Sari on avatud kõigile noortele, kes soovivad
                  kardispordiga tutvuda.
                </p>
              </div>
              <div
                style={{
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ marginBottom: "28px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Osalustasu
                  </div>
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: 500,
                      letterSpacing: "-0.04em",
                      color: "#ffffff",
                    }}
                  >
                    €79 / etapp
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "28px",
                    paddingBottom: "28px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    Makse saaja
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      fontWeight: 500,
                      marginBottom: "4px",
                    }}
                  >
                    MTÜ EKL Race
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "monospace",
                    }}
                  >
                    EE982200221076412074
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.3)",
                      marginTop: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    Selgitusse: Talendid Rajale, etapp, sõitja nimi
                  </div>
                </div>
                <RegistrationButton
                  program="talendid-rajale"
                  label="Registreerimine ja info →"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 24px",
                    background: "#ffffff",
                    color: "#0a0a0a",
                    fontSize: "13px",
                    fontWeight: 500,
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Registreeritud võistlejad */}
        {osavotjadEtapid.length > 0 && (
          <section style={{ background: "#f5f5f5" }}>
            <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
              <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
            </div>
            <div
              className="section-pad section-inner"
              style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}
            >
              {osavotjadEtapid.map(([nr, data], gi) => {
                const seade = seadeByNr[nr];
                const label = seade?.etappLabel ?? nr;
                const nimi = seade?.etappNimi ?? data.etappNimi;
                return (
                <div key={nr} style={{ marginBottom: gi < osavotjadEtapid.length - 1 ? "64px" : 0 }}>
                  <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "4px" }}>
                    {label} — registreerinud
                  </h2>
                  <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.4)", marginBottom: "40px", fontWeight: 400 }}>
                    {nimi}
                  </p>
                  <div className="section-grid-3col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                    {(["U11", "U14"] as const).map((klass) => {
                      const list = klass === "U11" ? data.u11 : data.u14;
                      if (list.length === 0) return null;
                      return (
                        <div key={klass}>
                          <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase", marginBottom: "16px" }}>
                            {klass}
                          </div>
                          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                            {list.map((o, i) => (
                              <div key={o._id} style={{
                                display: "grid",
                                gridTemplateColumns: "1fr auto",
                                gap: "12px",
                                alignItems: "baseline",
                                padding: "12px 0",
                                borderBottom: "1px solid rgba(0,0,0,0.06)",
                              }}>
                                <span style={{ fontSize: "15px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em" }}>{o.nimi}</span>
                                <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.35)" }}>{o.kool}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ); })}
            </div>
          </section>
        )}

        <EtappTulemused etapid={etapid} />

        {/* Sarjast + Osalemise tingimused */}
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
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
            >
              <div>
                <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "28px" }}>
                  Sarjast
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
                  Talendid Rajale on Eesti Kardiliidu poolt korraldatav hobikardisari, mis on
                  alguse saanud aastal 2013 ning mille eesmärgiks on peamiselt spordiala laiem
                  tutvustamine ja uute huviliste kaasamine. See on ainulaadne võimalus vähese
                  eelarvega osaleda kardispordi võistlustel. Tänaseks on Talendid Rajale sarjast
                  kasvanud välja nii mõnigi Eesti tippsõitja.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "24px" }}>
                  Osalemise tingimused
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {CONDITIONS.map((c, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.3)", marginTop: "7px", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
