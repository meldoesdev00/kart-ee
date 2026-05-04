import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const W = "min(1280px, 100vw - 80px)";

const ETAPID = [
  { n: "01", date: "26. aprill 2026",    location: "Unibet Kardikeskus",  city: "Tallinn" },
  { n: "02", date: "24. mai 2026",       location: "EST1 Karting",        city: "Aravete" },
  { n: "03", date: "28. juuni 2026",     location: "Kartdagö",            city: "Käina" },
  { n: "04", date: "26. juuli 2026",     location: "Kartdagö",            city: "Tabasalu" },
  { n: "05", date: "23. august 2026",    location: "LaitseRallyPark",     city: "Laitse" },
  { n: "06", date: "20. september 2026", location: "EST1 Karting",        city: "Rapla" },
];

const PARTICIPANTS = [
  { first: "Rihhard",         last: "Leheroo",     klass: "U14", kool: "Nissi Põhikool" },
  { first: "Ken",             last: "Druppa",      klass: "U11", kool: "Tallinna Nõmme Põhikool" },
  { first: "Tristan",         last: "Talvar",      klass: "U11", kool: "Audentes" },
  { first: "Odissei",         last: "Korniev",     klass: "U11", kool: "Vara Põhikool" },
  { first: "Armin",           last: "Roossaar",    klass: "U14", kool: "Tartu Luterlik Peetri kool" },
  { first: "Joonas",          last: "Vaik",        klass: "U11", kool: "Keila kool" },
  { first: "Andreas",         last: "Talts",       klass: "U11", kool: "Laagri kool" },
  { first: "Keven",           last: "Kartau",      klass: "U14", kool: "Laagri kooli Möldre maja" },
  { first: "Vladislav",       last: "Andronov",    klass: "U14", kool: "Tallinna Kesklinna Vene Gümnaasium" },
  { first: "Uku",             last: "Antso",       klass: "U11", kool: "Tallinna Nõmme Põhikool" },
  { first: "Carl Revon",      last: "Toomla",      klass: "U14", kool: "Tallinna Ühisgümnaasium" },
  { first: "Mark Sören",      last: "Markus",      klass: "U14", kool: "Viljandi Kesklinna kool" },
  { first: "Konrad",          last: "Järvemets",   klass: "U14", kool: "Tallinna Ühisgümnaasium" },
  { first: "Arno",            last: "Talvik",      klass: "U11", kool: "Gustav Adolfi Gümnaasium" },
  { first: "Rahel",           last: "Müürsoo",     klass: "U14", kool: "21.kool" },
  { first: "Kristjan",        last: "Reinsalu",    klass: "U11", kool: "Pärnu Raeküla kool" },
  { first: "Robert",          last: "Koppel",      klass: "U14", kool: "Tallinna Ühisgümnaasium" },
  { first: "Milena",          last: "Lisitsyna",   klass: "U11", kool: "Saue Kool" },
  { first: "Herman",          last: "Rõivas",      klass: "U11", kool: "Rocca al Mare Kool" },
  { first: "Kaspar",          last: "Kirsimaa",    klass: "U11", kool: "Tähe Tera" },
  { first: "Alexander",       last: "Amisepp",     klass: "U11", kool: "JWG" },
  { first: "Oliver Sebastian",last: "Bammer",      klass: "U11", kool: "Kiili Gümnaasium" },
  { first: "Mathias",         last: "Koosel",      klass: "U11", kool: "Pärnu Ülejõe Põhikool" },
  { first: "Jacob",           last: "Jalakas",     klass: "U14", kool: "Rocca al Mare" },
  { first: "Agnes",           last: "Ojala",       klass: "U14", kool: "Merivälja kool" },
  { first: "Kaspar-Janek",    last: "Ojala",       klass: "U11", kool: "Merivälja kool" },
  { first: "Anette",          last: "Pahker",      klass: "U14", kool: "Rääma Põhikool" },
  { first: "Daniil",          last: "Glazatšev",   klass: "U11", kool: "Tartu Kivilinna Kool" },
];

const CONDITIONS = [
  "Vanus kuni 14 aastat (U11 ja U14 klassid, vanuse ülempiir arvestatakse jooksva aasta 1. jaanuari seisuga)",
  "Minimaalset vanust määratud ei ole — sõitja kasv ja oskused peavad võimaldama ohutut sõitmist",
  "Eelnev võistluskogemus ei ole vajalik",
  "Osalemistasu sisaldab hobikardi ja kiivri kasutamist — oma varustust ei ole vaja",
  "Kohustuslik: kinnised jalatsid, pikkade säärte ja varrukatega riideid",
  "Soovituslik lisavarustus: kaelakaitse, ribikaitse, sõidukindad, kombinesoon",
];

export default function TalendidRajalePage() {
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
              Talendid Rajale
            </h1>
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
              Eesti Kardiliidu poolt korraldatav hobikardisari noortele, mis on alguse saanud
              aastal 2013. Registreerimine Talendid Rajale 2026 sarjasse on avatud.
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
          </div>
        </section>

        {/* Hooaeg 2026 */}
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
              <a
                href="mailto:kart@kart.ee"
                style={{
                  display: "inline-block",
                  padding: "13px 26px",
                  background: "#0a0a0a",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                Registreeri 2026
              </a>
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
              Etapid 2026
            </h3>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              {ETAPID.map((e, i) => (
                <div
                  key={i}
                  className="etapp-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr auto",
                    gap: "28px",
                    alignItems: "center",
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      color: "rgba(0,0,0,0.2)",
                      fontFamily: "monospace",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {e.n}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#0a0a0a",
                        letterSpacing: "-0.01em",
                        marginBottom: "3px",
                      }}
                    >
                      {e.location}
                    </div>
                    <div
                      style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", fontWeight: 400 }}
                    >
                      {e.city}
                    </div>
                  </div>
                  <div
                    className="etapp-date"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      letterSpacing: "-0.01em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {e.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Osalejad I etapp */}
        <section style={{ background: "#f7f7f7" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                marginBottom: "36px",
              }}
            >
              Osalejad – I etapp (26. aprill)
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table className="participants-table">
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid rgba(0,0,0,0.12)",
                    }}
                  >
                    <th
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.35)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Eesnimi
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.35)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Perenimi
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.35)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Klass
                    </th>
                    <th
                      className="hide-mobile"
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.35)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Kool
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PARTICIPANTS.map((p, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(0,0,0,0.07)",
                        background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)",
                      }}
                    >
                      <td
                        style={{
                          padding: "13px 12px",
                          fontSize: "14px",
                          color: "#0a0a0a",
                          fontWeight: 400,
                        }}
                      >
                        {p.first}
                      </td>
                      <td
                        style={{
                          padding: "13px 12px",
                          fontSize: "14px",
                          color: "#0a0a0a",
                          fontWeight: 500,
                        }}
                      >
                        {p.last}
                      </td>
                      <td style={{ padding: "13px 12px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            border: "1px solid rgba(0,0,0,0.15)",
                            borderRadius: "100px",
                            padding: "2px 8px",
                            fontSize: "10px",
                            fontWeight: 500,
                            color: "rgba(0,0,0,0.55)",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {p.klass}
                        </span>
                      </td>
                      <td
                        className="hide-mobile"
                        style={{
                          padding: "13px 12px",
                          fontSize: "13px",
                          color: "rgba(0,0,0,0.45)",
                          fontWeight: 400,
                        }}
                      >
                        {p.kool}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

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
                    marginBottom: "28px",
                  }}
                >
                  Sarjast
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 400,
                  }}
                >
                  Talendid Rajale on Eesti Kardiliidu poolt korraldatav hobikardisari, mis on
                  alguse saanud aastal 2013 ning mille eesmärgiks on peamiselt spordiala laiem
                  tutvustamine ja uute huviliste kaasamine. See on ainulaadne võimalus vähese
                  eelarvega osaleda kardispordi võistlustel. Tänaseks on Talendid Rajale sarjast
                  kasvanud välja nii mõnigi Eesti tippsõitja.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Osalemise tingimused
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                  {CONDITIONS.map((c, i) => (
                    <li
                      key={i}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.3)",
                          marginTop: "7px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: 400,
                        }}
                      >
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section style={{ background: "#f7f7f7" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
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
                    color: "#0a0a0a",
                    marginBottom: "24px",
                  }}
                >
                  Kuidas registreeruda
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "rgba(0,0,0,0.55)",
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
                    color: "rgba(0,0,0,0.55)",
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
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ marginBottom: "28px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(0,0,0,0.35)",
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
                      color: "#0a0a0a",
                    }}
                  >
                    €79 / etapp
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "28px",
                    paddingBottom: "28px",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(0,0,0,0.35)",
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
                      color: "#0a0a0a",
                      fontWeight: 500,
                      marginBottom: "4px",
                    }}
                  >
                    MTÜ EKL Race
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(0,0,0,0.5)",
                      fontFamily: "monospace",
                    }}
                  >
                    EE982200221076412074
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(0,0,0,0.4)",
                      marginTop: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    Selgitusse: Talendid Rajale, etapp, sõitja nimi
                  </div>
                </div>
                <a
                  href="mailto:kart@kart.ee"
                  style={{
                    display: "block",
                    padding: "14px 24px",
                    background: "#0a0a0a",
                    color: "#ffffff",
                    fontSize: "13px",
                    fontWeight: 500,
                    textDecoration: "none",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  Registreerimine ja info →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
