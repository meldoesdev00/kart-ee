import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { NEWS } from "@/app/lib/newsData";

const W = "min(1280px, 100vw - 80px)";

export default function UudisedPage() {
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
            }}>
              Uudised
            </h1>
          </div>
        </section>

        {/* News list */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 120px" }}>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              {NEWS.map((post) => (
                <a
                  key={post.slug}
                  href={`/uudised/${post.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px 1fr auto",
                    gap: "40px",
                    alignItems: "start",
                    padding: "32px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.07)",
                    textDecoration: "none",
                  }}
                  className="news-list-row"
                >
                  <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)", fontWeight: 400, paddingTop: "3px" }}>
                    {post.date}
                  </span>
                  <div>
                    <h2 style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#0a0a0a",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      marginBottom: "10px",
                    }}>
                      {post.title}
                    </h2>
                    <p style={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.45)",
                      lineHeight: 1.65,
                      fontWeight: 400,
                    }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.3)", paddingTop: "3px", whiteSpace: "nowrap" }}>
                    Loe →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
