import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const W = "min(1280px, 100vw - 80px)";

const SARJAD = [
  {
    title: "Talendid Rajale",
    desc: "Noortesari U11 ja U14 vanuseklassides. Eelnev kogemus pole vajalik. 6 etappi üle Eesti, osalustasu €79 etapi kohta.",
    classes: ["U11", "U14"],
    etapid: 6,
    periood: "Aprill – september",
    href: "/talendid-rajale",
  },
  {
    title: "Eesti Meistrivõistlused",
    desc: "Riiklik tippvõistlus kõigis klassides, kus otsustatakse igaaastased Eesti meistrid. Toimub mitmes etapis üle hooaja.",
    classes: ["Mini", "Junior", "Senior", "OK"],
    etapid: 4,
    periood: "Juuni – september",
    href: null,
  },
  {
    title: "Karikasari",
    desc: "Hooajaülene punktiarvestus maist septembrini. Sobib nii algajatele kui ka edasijõudnutele.",
    classes: ["OK-N", "Mini", "Junior"],
    etapid: 6,
    periood: "Mai – september",
    href: null,
  },
];

const KLASSID = [
  { name: "Bambino",  age: "6–8 a",   engine: "60cc",      desc: "Esimene kokkupuude kardispordiga väikelastele." },
  { name: "Mini",     age: "8–12 a",  engine: "60–125cc",  desc: "Esimesed võistlused noortele, rõhk arengul." },
  { name: "Junior",   age: "12–14 a", engine: "125cc",      desc: "Kiireim arengufaas enne täiskasvanute klasse." },
  { name: "Senior",   age: "15+ a",   engine: "125cc",      desc: "Täiskasvanute klass, avatud kõigile." },
  { name: "OK",       age: "15+ a",   engine: "125cc OK",   desc: "Kõrgeim rahvusvaheline klass, CIK-FIA reeglid." },
  { name: "OK-N",     age: "15+ a",   engine: "125cc",      desc: "OK-klassi sisenemistase, taskukohasem varustus." },
];

export default function VoistlussarjadPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="subpage-hero section-inner" style={{ background: "#0a0a0a", paddingTop: "120px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <h1 style={{
              fontSize: "clamp(56px, 8vw, 120px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.93,
              color: "#ffffff",
              marginBottom: "40px",
            }}>
              Võistlussarjad
            </h1>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
              maxWidth: "520px",
            }}>
              Organiseerime Eesti kardikarika etappe kõigis klassides –
              6-aastasest Bambinost kuni rahvusvahelise OK-klassini.
            </p>
          </div>
        </section>

        {/* Sarjad */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}>
            <h2 style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              marginBottom: "40px",
            }}>
              Sarjad 2026
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {SARJAD.map((s, i) => (
                <div key={i} className="sari-card" style={{
                  padding: "36px 40px",
                  borderRadius: "14px",
                  background: "#f9f9f9",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}>
                  <div className="sari-card-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", marginBottom: "16px", flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "10px" }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.55)", lineHeight: 1.65, fontWeight: 400, maxWidth: "560px" }}>
                        {s.desc}
                      </p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: "32px", fontWeight: 500, letterSpacing: "-0.04em", color: "#0a0a0a", lineHeight: 1 }}>
                        {s.etapid}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.4)", marginTop: "3px" }}>etappi</div>
                    </div>
                  </div>
                  <div className="sari-card-foot" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.08)", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "13px", color: "#0a0a0a", fontWeight: 500 }}>{s.periood}</span>
                      <div style={{ display: "flex", gap: "5px" }}>
                        {s.classes.map(c => (
                          <span key={c} style={{
                            fontSize: "10px", padding: "3px 9px",
                            border: "1px solid rgba(0,0,0,0.15)", borderRadius: "100px",
                            color: "rgba(0,0,0,0.5)", letterSpacing: "0.04em",
                          }}>{c}</span>
                        ))}
                      </div>
                    </div>
                    {s.href && (
                      <a href={s.href} style={{
                        fontSize: "12px",
                        color: "#0a0a0a",
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}>
                        Vaata lähemalt →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Klassid */}
        <section style={{ background: "#0a0a0a" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 120px" }}>
            <div className="section-header-grid" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "end",
              marginBottom: "56px",
            }}>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#ffffff",
              }}>
                Võistlusklassid
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                Igal sõitjal on oma klass vanuse ja kogemuse järgi. <br />
                Kõik klassid on CIK-FIA poolt reguleeritud.
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {KLASSID.map((k, i) => (
                <div key={i} className="klass-row" style={{
                  display: "grid",
                  gridTemplateColumns: "120px 120px 1fr",
                  gap: "32px",
                  alignItems: "center",
                  padding: "22px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ fontSize: "17px", fontWeight: 500, color: "#ffffff", letterSpacing: "-0.01em" }}>
                    {k.name}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "2px" }}>{k.age}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>{k.engine}</div>
                  </div>
                  <div className="klass-desc" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5, fontWeight: 400 }}>
                    {k.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to start */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}>
            <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#0a0a0a" }}>
                Kuidas alustada võistluskardiga
              </h2>
              <div>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(0,0,0,0.55)", fontWeight: 400, marginBottom: "28px" }}>
                  Tule tutvu kardispordiga Talendid Rajale sarjas – varasem kogemus ei ole vajalik.
                  Registreerimisvorm ja lisainfo on leitav e-posti teel.
                </p>
                <a href="mailto:kart@kart.ee" style={{
                  display: "inline-block",
                  padding: "14px 28px",
                  background: "#0a0a0a",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "100px",
                }}>
                  Registreerimine ja info
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
