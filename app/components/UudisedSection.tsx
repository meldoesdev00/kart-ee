"use client";

import { useState } from "react";
import { NEWS } from "@/app/lib/newsData";

const W = "min(1280px, 100vw - 80px)";

const FEATURED = NEWS[0];
const POSTS = NEWS.slice(1);

function SmallArrowBtn({ hovered }: { hovered: boolean }) {
  return (
    <div style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: hovered ? "#ffffff" : "rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.25s ease",
      flexShrink: 0,
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke={hovered ? "#0a0a0a" : "rgba(255,255,255,0.6)"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={`/uudised/${post.slug}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: hov ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        textDecoration: "none",
        transition: "background 0.2s ease",
        minHeight: "200px",
      }}
    >
      <div>
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
            {post.date}
          </span>
        </div>
        <h3 className="postcard-title" style={{
          fontSize: "15px",
          fontWeight: 400,
          color: "#ffffff",
          lineHeight: 1.45,
          letterSpacing: "-0.01em",
        }}>
          {post.title}
        </h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "24px" }}>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Loe lähemalt</span>
        <SmallArrowBtn hovered={hov} />
      </div>
    </a>
  );
}

export default function UudisedSection() {
  const [featHov, setFeatHov] = useState(false);

  return (
    <section style={{ background: "#0a0a0a" }}>

      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div className="section-pad section-inner" style={{ maxWidth: W, margin: "0 auto", padding: "80px 40px 120px" }}>

        {/* Header */}
        <div className="uudised-header" style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "56px",
        }}>
          <h2 style={{
            fontSize: "clamp(48px, 6vw, 88px)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 0.93,
            color: "#ffffff",
          }}>
            Uudised
          </h2>

          <a
            href="/uudised"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              background: "#ffffff",
              color: "#0a0a0a",
              fontSize: "13px",
              fontWeight: 500,
              padding: "13px 20px 13px 24px",
              borderRadius: "100px",
              letterSpacing: "0.01em",
              marginBottom: "8px",
            }}
          >
            Vaata kõiki
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Featured article */}
        <a
          href={`/uudised/${FEATURED.slug}`}
          onMouseEnter={() => setFeatHov(true)}
          onMouseLeave={() => setFeatHov(false)}
          className="uudised-featured"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            textDecoration: "none",
            marginBottom: "12px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {/* Image */}
          <div style={{ overflow: "hidden", height: "360px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FEATURED.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: featHov ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
            />
          </div>

          {/* Content */}
          <div style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            <div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
                  {FEATURED.date}
                </span>
              </div>
              <h3 className="featured-article-title" style={{
                fontSize: "clamp(20px, 2.2vw, 28px)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}>
                {FEATURED.title}
              </h3>
              <p className="featured-article-excerpt" style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                fontWeight: 400,
              }}>
                {FEATURED.excerpt}
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Loe lähemalt</span>
              <SmallArrowBtn hovered={featHov} />
            </div>
          </div>
        </a>

        {/* Post cards */}
        <div className="uudised-posts" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
          {POSTS.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
}
