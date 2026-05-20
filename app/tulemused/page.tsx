import type { Metadata } from "next";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { client } from "@/sanity/lib/client";
import { HOOAJA_TULEMUSED_QUERY } from "@/sanity/lib/queries";

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

type Lnk  = { nimetus: string; url: string };
type Group = { _id: string; pealkiri: string; lingid: Lnk[] };

export default async function TulemUsedPage() {
  const groups: Group[] = await client.fetch(
    HOOAJA_TULEMUSED_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

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
              {groups.map((group, gi) => (
                <div
                  key={group._id}
                  style={{
                    paddingTop: gi === 0 ? "0" : "56px",
                    paddingBottom: "56px",
                    borderBottom: gi < groups.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
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
                    {group.pealkiri}
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {group.lingid?.map((link, li) => (
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
                          {link.nimetus}
                        </span>
                        <a
                          href={link.url}
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
