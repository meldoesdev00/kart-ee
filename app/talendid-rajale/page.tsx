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

export default function TalendidRajalePage() {
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
              Talendid Rajale
            </h1>
            <p style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
              maxWidth: "540px",
              marginBottom: "48px",
            }}>
              Eesti Kardiliidu kardisari noortele U11 ja U14 vanuseklassides.
              Varasem kogemus ei ole vajalik – sari sobib nii algajatele kui ka kogenud sõitjatele.
            </p>

            {/* Key facts strip */}
            <div className="facts-strip" style={{
              display: "flex",
              gap: "0",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              overflow: "hidden",
              maxWidth: "600px",
            }}>
              {[
                { n: "€79", l: "Osalustasu etapi kohta" },
                { n: "U11 / U14", l: "Vanuseklassid" },
                { n: "6", l: "Etappi üle Eesti" },
              ].map((f, i) => (
                <div key={i} style={{
                  flex: 1,
                  padding: "24px 20px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                }}>
                  <div style={{ fontSize: "22px", fontWeight: 500, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "4px" }}>
                    {f.n}
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 400, lineHeight: 1.4 }}>
                    {f.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image */}
        <section style={{ background: "#0a0a0a" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px 80px" }}>
            <div style={{ width: "100%", height: "clamp(260px, 44vh, 540px)", borderRadius: "20px", overflow: "hidden", background: "#111" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/talendidrajale_2.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.75 }}
              />
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#0a0a0a" }}>
                Etapid 2026
              </h2>
              <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", fontWeight: 400 }}>
                Aprill – september
              </span>
            </div>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              {ETAPID.map((e, i) => (
                <div key={i} className="etapp-row" style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr auto",
                  gap: "28px",
                  alignItems: "center",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                }}>
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
                  <div className="etapp-date" style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}>
                    {e.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration */}
        <section style={{ background: "#f7f7f7" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 100px" }}>
            <div className="section-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 500, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "24px" }}>
                  Kuidas registreeruda
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(0,0,0,0.55)", fontWeight: 400, marginBottom: "16px" }}>
                  Registreeru igale etapile eraldi. Koht on kinnitatud pärast osalustasu laekumist.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(0,0,0,0.55)", fontWeight: 400 }}>
                  Varasem kogemus ei ole vajalik. Sari on avatud kõigile noortele, kes soovivad kardispordiga tutvuda.
                </p>
              </div>
              <div style={{ padding: "32px", background: "#ffffff", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div style={{ marginBottom: "28px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Osalustasu
                  </div>
                  <div style={{ fontSize: "36px", fontWeight: 500, letterSpacing: "-0.04em", color: "#0a0a0a" }}>
                    €79 / etapp
                  </div>
                </div>
                <div style={{ marginBottom: "28px", paddingBottom: "28px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
                    Makse saaja
                  </div>
                  <div style={{ fontSize: "14px", color: "#0a0a0a", fontWeight: 500, marginBottom: "4px" }}>MTÜ EKL Race</div>
                  <div style={{ fontSize: "13px", color: "rgba(0,0,0,0.5)", fontFamily: "monospace" }}>EE982200221076412074</div>
                  <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", marginTop: "8px", lineHeight: 1.6 }}>
                    Selgitusse: Talendid Rajale, etapp, sõitja nimi
                  </div>
                </div>
                <a href="mailto:kart@kart.ee" style={{
                  display: "block",
                  padding: "14px 24px",
                  background: "#0a0a0a",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "10px",
                  textAlign: "center",
                }}>
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
