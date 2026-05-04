import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Tulemused",
  description:
    "Eesti kardivõistluste tulemused 2024–2026. Talendid Rajale, Kardiakadeemia ja Võistlussarjade tulemused PDF-formaadis.",
  openGraph: {
    title: "Tulemused | Eesti Kardiliit",
    description:
      "Eesti kardivõistluste tulemused 2024–2026 PDF-formaadis.",
    url: "https://kart.ee/tulemused",
  },
  alternates: { canonical: "https://kart.ee/tulemused" },
};

const W = "min(1280px, 100vw - 80px)";

const GROUPS = [
  {
    title: "Talendid Rajale Talvekarikas 2026",
    links: [
      {
        label: "U11 hooaja tulemused",
        href: "https://www.kart.ee/_files/ugd/f55c36_b211a85fd0df4c029eb8fb55e932b48b.pdf",
      },
      {
        label: "U14 hooaja tulemused",
        href: "https://www.kart.ee/_files/ugd/f55c36_94954bc659a74b0bb2f7b663202adad9.pdf",
      },
    ],
  },
  {
    title: "Talendid Rajale 2025",
    links: [
      {
        label: "U11 hooaja tulemused",
        href: "https://www.kart.ee/_files/ugd/f55c36_c611546dbea84b488fffa1381845b604.pdf",
      },
      {
        label: "U14 hooaja tulemused",
        href: "https://www.kart.ee/_files/ugd/f55c36_da6d894f4af6437c9a94c93740e62a86.pdf",
      },
      {
        label: "Koolide punktiarvestus",
        href: "https://www.kart.ee/_files/ugd/f55c36_9c5cbbca31f34b53969e3f7a7b07496c.pdf",
      },
    ],
  },
  {
    title: "Talendid Rajale 2024 ja 28. Hiiumaa Karikas",
    links: [
      {
        label: "U20 hooaja tulemused",
        href: "https://www.kart.ee/_files/ugd/f55c36_b425760e4296485ba7df8223958314d8.pdf",
      },
      {
        label: "U12 hooaja tulemused",
        href: "https://www.kart.ee/_files/ugd/f55c36_efb5bf4af12c4577aca4d9e329d02cd1.pdf",
      },
      {
        label: "Koolide punktiarvestus",
        href: "https://www.kart.ee/_files/ugd/f55c36_64dcc06e4c3446699ab86b47d66944a5.pdf",
      },
      {
        label: "28. Hiiumaa Karikas",
        href: "https://padlet.com/asper_timing/09-10-08-2024-28-hiiumaa-karikas-kardispordis-talendid-rajal-ejluh6y5qvm1225q",
      },
    ],
  },
];

export default function TulemUsedPage() {
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
                fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 0.93,
                color: "#ffffff",
              }}
            >
              Tulemused
            </h1>
          </div>
        </section>

        {/* Results */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div
            className="section-pad section-inner"
            style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 112px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {GROUPS.map((group, gi) => (
                <div
                  key={gi}
                  style={{
                    paddingTop: gi === 0 ? "0" : "56px",
                    paddingBottom: "56px",
                    borderBottom: gi < GROUPS.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "#0a0a0a",
                      marginBottom: "28px",
                    }}
                  >
                    {group.title}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {group.links.map((link, li) => (
                      <div
                        key={li}
                        className="result-row"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "24px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          className="result-label"
                          style={{
                            fontSize: "15px",
                            color: "rgba(0,0,0,0.6)",
                            fontWeight: 400,
                          }}
                        >
                          {link.label}
                        </span>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="result-btn"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "9px 18px",
                            border: "1px solid rgba(0,0,0,0.2)",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#0a0a0a",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            transition: "border-color 0.15s ease",
                            flexShrink: 0,
                          }}
                        >
                          Ava dokument
                          <span style={{ fontSize: "12px", opacity: 0.5 }}>↗</span>
                        </a>
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
