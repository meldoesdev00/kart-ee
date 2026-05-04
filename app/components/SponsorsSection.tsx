"use client";

import { useState } from "react";

const W = "min(1280px, 100vw - 80px)";

const LOGOS = [
  "https://static.wixstatic.com/media/8ccd18_06d3e63a47ac439b9f341f1d03b13e65~mv2.png",
  "https://static.wixstatic.com/media/f55c36_415f5c4f4f14494a9e43ee918ee52a8d~mv2.jpg",
  "https://static.wixstatic.com/media/f55c36_02355ea5dfd946718ca857bad94ef708~mv2.jpg",
  "https://static.wixstatic.com/media/f55c36_f956a74235cc4aec812653bf6251fe22~mv2.jpg",
  "https://static.wixstatic.com/media/f55c36_0bc0b15d13824ac28bfbabec2b1f1808~mv2.jpg",
  "https://static.wixstatic.com/media/8ccd18_38591f935d164df0b28c4db64ceec7af~mv2.png",
  "https://static.wixstatic.com/media/8ccd18_e957e5d9c1bf411da33a2d8b8992b2c1~mv2.png",
  "https://static.wixstatic.com/media/f55c36_d763bcc5cb5d42a882a4a619adb0377a~mv2.png",
  "https://static.wixstatic.com/media/f55c36_327a90b9c80d496f8d0e98fb6967823e~mv2.png/v1/fill/w_214,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cornimet%20logo.png"
];

function LogoItem({ src }: { src: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="sponsor-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        style={{
          height: "36px",
          width: "auto",
          maxWidth: "120px",
          objectFit: "contain",
          display: "block",
          mixBlendMode: "multiply",
          filter: hovered
            ? "grayscale(0%) opacity(1)"
            : "grayscale(100%) opacity(0.35)",
          transition: "filter 0.25s ease",
        }}
      />
    </div>
  );
}

export default function SponsorsSection() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
      </div>
      <div style={{ maxWidth: W, margin: "0 auto", padding: "48px 40px 56px" }}>
        <div className="sponsors-grid" style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}>
          {LOGOS.map((src, i) => (
            <LogoItem key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
