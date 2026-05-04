import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { NEWS } from "@/app/lib/newsData";

const W = "min(1280px, 100vw - 80px)";

export function generateStaticParams() {
  return NEWS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = NEWS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Eesti Kardiliit`,
      description: post.excerpt,
      url: `https://kart.ee/uudised/${post.slug}`,
      ...(post.img ? { images: [{ url: post.img, alt: post.title }] } : {}),
    },
    alternates: { canonical: `https://kart.ee/uudised/${post.slug}` },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = NEWS.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.body.split("\n\n").filter(Boolean);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="subpage-hero section-inner" style={{ background: "#0a0a0a", paddingTop: "120px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ marginBottom: "20px" }}>
              <a href="/uudised" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.04em" }}>
                ← Uudised
              </a>
            </div>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "20px" }}>
              {post.date}
            </span>
            <h1 style={{
              fontSize: "clamp(32px, 5vw, 72px)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.97,
              color: "#ffffff",
              maxWidth: "700px",
            }}>
              {post.title}
            </h1>
          </div>
        </section>

        {/* Optional image */}
        {post.img && (
          <section style={{ background: "#0a0a0a" }}>
            <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px 80px" }}>
              <div style={{ width: "100%", height: "clamp(240px, 44vh, 520px)", borderRadius: "20px", overflow: "hidden", background: "#111" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.img}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.75 }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        <section style={{ background: "#ffffff" }}>
          <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ height: "1px", background: "rgba(0,0,0,0.1)" }} />
          </div>
          <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "72px 40px 120px" }}>
            <div style={{ maxWidth: "640px" }}>
              {paragraphs.map((para, i) => (
                <p key={i} style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "rgba(0,0,0,0.65)",
                  fontWeight: 400,
                  marginBottom: i < paragraphs.length - 1 ? "24px" : "0",
                }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
