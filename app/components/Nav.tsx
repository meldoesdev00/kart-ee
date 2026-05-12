"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "Talendid Rajale", href: "/talendid-rajale" },
  { label: "Kardiakadeemia",  href: "/kardiakadeemia" },
  { label: "Võistlussarjad",  href: "/voistlussarjad" },
  { label: "Tulemused",       href: "/tulemused" },
  { label: "Galerii",         href: "/galerii" },
  { label: "Meist",           href: "/meist" },
];

const SECTIONS = [
  { id: "talendid",  label: "Talendid Rajale" },
  { id: "akadeemia", label: "Kardiakadeemia" },
  { id: "sarjad",    label: "Võistlussarjad" },
  { id: "meist",     label: "Meist" },
];

export default function Nav() {
  const [scrollPct, setScrollPct] = useState(0);
  const [section,   setSection]   = useState("Menüü");
  const [open,      setOpen]      = useState(false);
  const [ready,     setReady]     = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setSection(label);
      }, { threshold: 0.3 });
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [open]);

  return (
    /* Outer header – fixed, full width, pointer-events off so it doesn't
       block scroll. Only the pill has pointer-events. */
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 500,
      display: "flex",
      justifyContent: "center",
      paddingTop: "16px",
      pointerEvents: "none",
      transform: ready ? "translateY(0)" : "translateY(-72px)",
      opacity: ready ? 1 : 0,
      transition: "transform 0.55s cubic-bezier(0.34,1.18,0.64,1), opacity 0.35s ease",
    }}>

      {/* Pill wrapper – relative so dropdown sits below pill */}
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          width: "min(338px, calc(100vw - 32px))",
          pointerEvents: "auto",
        }}
      >
        {/* Outer shell */}
        <div style={{
          borderRadius: "13px",
          background: "rgba(10,10,10,0.13)",
          padding: "3px",
        }}>
          {/* Inner white pill */}
          <div style={{
            position: "relative",
            background: "#ffffff",
            borderRadius: "11px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px 0 14px",
            overflow: "hidden",   /* clips progress bar only */
          }}>
            {/* Logo + divider + section */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0, overflow: "hidden" }}>
              <a href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/kardiliit_white.svg" alt="Kardiliit" style={{ width: "36px", height: "36px", display: "block", filter: "invert(1)" }} />
              </a>
              <div style={{ width: "1px", height: "14px", background: "rgba(0,0,0,0.14)", flexShrink: 0 }} />
              <span style={{
                fontSize: "12.5px", fontWeight: 400, color: "#0a0a0a",
                letterSpacing: "0.005em", whiteSpace: "nowrap",
                overflow: "hidden", textOverflow: "ellipsis",
              }}>
                {section}
              </span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              aria-label="Menüü"
              style={{
                width: "34px", height: "34px", borderRadius: "50%",
                border: "none", background: "transparent", cursor: "pointer",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "4px",
                padding: 0, flexShrink: 0,
              }}
            >
              {[0, 1].map(i => (
                <span key={i} style={{
                  display: "block", width: "13px", height: "1px",
                  background: "#0a0a0a", borderRadius: "1px",
                  transformOrigin: "center",
                  transition: "transform 0.28s cubic-bezier(0.77,0,0.18,1)",
                  transform: open
                    ? i === 0 ? "translateY(2.5px) rotate(45deg)" : "translateY(-2.5px) rotate(-45deg)"
                    : "none",
                }} />
              ))}
            </button>

            {/* Scroll progress – clipped inside pill */}
            <div style={{
              position: "absolute", bottom: 0, left: "14px", right: "14px",
              height: "2px", borderRadius: "2px", background: "rgba(0,0,0,0.07)",
            }}>
              <div style={{
                height: "100%", background: "#0a0a0a", borderRadius: "2px",
                transformOrigin: "left",
                transform: `scaleX(${scrollPct})`,
                transition: "transform 0.08s linear",
              }} />
            </div>
          </div>
        </div>

        {/* Dropdown – OUTSIDE pill overflow, sits below */}
        {open && (
          <div style={{
            position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0,
            background: "#ffffff",
            borderRadius: "13px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.11), 0 1px 4px rgba(0,0,0,0.06)",
            overflow: "hidden",
            zIndex: 10,
          }}>
            {LINKS.map(({ label, href }, i) => (
              <a key={href} href={href} onClick={() => setOpen(false)} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "13px 18px",
                textDecoration: "none", color: "#0a0a0a",
                fontSize: "13.5px", fontWeight: 400,
                borderBottom: i < LINKS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : undefined,
                transition: "background 0.12s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {label}
                <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.28)" }}>→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
