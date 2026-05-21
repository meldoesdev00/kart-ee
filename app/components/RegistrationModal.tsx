"use client";
import { useState, useEffect } from "react";

export type RegistrationProgram = "talendid-rajale" | "kardiakadeemia";

const INPUT: React.CSSProperties = {
  width: "100%", padding: "10px 14px",
  border: "1px solid rgba(0,0,0,0.15)",
  borderRadius: "10px", fontSize: "14px",
  color: "#0a0a0a", background: "#fafafa",
  outline: "none", fontFamily: "inherit",
  appearance: "none" as const,
};

const LBL: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 500,
  color: "rgba(0,0,0,0.4)", letterSpacing: "0.08em",
  textTransform: "uppercase" as const, marginBottom: "5px",
};

type TalendidForm = { nimi: string; vanuseklass: string; kool: string; etapp: string; vastutava: string; telefon: string; email: string };
type AkadeemiaForm = { nimi: string; vanus: string; pikkus: string; kaal: string; linn: string; vastutava: string; telefon: string; email: string };

const ETAPID = [
  "II etapp – EST1 Karting Aravete",
  "III etapp – Kartdagö Käina",
  "IV etapp – Kartdagö Tabasalu",
  "V etapp – LaitseRallyPark",
  "VI etapp – EST1 Karting Rapla",
];
const VANUSEKLASSID = ["U11", "U14"];

function SuccessView() {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <div style={{
        width: "48px", height: "48px", borderRadius: "50%", background: "#0a0a0a",
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10l5 5 7-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p style={{ fontSize: "17px", fontWeight: 500, color: "#0a0a0a", marginBottom: "10px", letterSpacing: "-0.01em" }}>
        Aitäh registreerimast!
      </p>
      <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(0,0,0,0.5)", maxWidth: "320px", margin: "0 auto" }}>
        Võtame Teiega ühendust esimesel võimalusel.
      </p>
    </div>
  );
}

function SelectWrapper({ label, value, onChange, options, placeholder }: {
  label: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[]; placeholder: string;
}) {
  return (
    <div>
      <label style={LBL}>{label}</label>
      <div style={{ position: "relative" }}>
        <select
          required
          value={value}
          onChange={onChange}
          style={{ ...INPUT, cursor: "pointer", paddingRight: "36px" }}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        >
          <path d="M2 4l4 4 4-4" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function TalendidForm({ onSubmit, loading }: { onSubmit: (data: TalendidForm) => Promise<void>; loading: boolean }) {
  const [form, setForm] = useState<TalendidForm>({ nimi: "", vanuseklass: "", kool: "", etapp: "", vastutava: "", telefon: "", email: "" });
  const set = (k: keyof TalendidForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <form
      onSubmit={async e => { e.preventDefault(); await onSubmit(form); }}
      style={{ display: "flex", flexDirection: "column", gap: "14px" }}
    >
      <div>
        <label style={LBL}>Sõitja nimi</label>
        <input type="text" required value={form.nimi} onChange={set("nimi")} placeholder="Eesnimi Perenimi" style={INPUT} />
      </div>

      <SelectWrapper
        label="Vanuseklass"
        value={form.vanuseklass}
        onChange={set("vanuseklass") as (e: React.ChangeEvent<HTMLSelectElement>) => void}
        options={VANUSEKLASSID}
        placeholder="Vali vanuseklass"
      />

      <div>
        <label style={LBL}>Kool</label>
        <input type="text" required value={form.kool} onChange={set("kool")} placeholder="nt Tallinna Reaalkool" style={INPUT} />
      </div>

      <SelectWrapper
        label="Etapp"
        value={form.etapp}
        onChange={set("etapp") as (e: React.ChangeEvent<HTMLSelectElement>) => void}
        options={ETAPID}
        placeholder="Vali etapp"
      />

      <div>
        <label style={LBL}>Vastutava isiku nimi</label>
        <input type="text" required value={form.vastutava} onChange={set("vastutava")} placeholder="Lapsevanema täisnimi" style={INPUT} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div>
          <label style={LBL}>Telefon</label>
          <input type="tel" required value={form.telefon} onChange={set("telefon")} placeholder="+372 ..." style={INPUT} />
        </div>
        <div>
          <label style={LBL}>E-mail</label>
          <input type="email" required value={form.email} onChange={set("email")} placeholder="email@näide.ee" style={INPUT} />
        </div>
      </div>

      <SubmitButton loading={loading} />
    </form>
  );
}

function AkadeemiaFormComponent({ onSubmit, loading }: { onSubmit: (data: AkadeemiaForm) => Promise<void>; loading: boolean }) {
  const [form, setForm] = useState<AkadeemiaForm>({ nimi: "", vanus: "", pikkus: "", kaal: "", linn: "", vastutava: "", telefon: "", email: "" });
  const set = (k: keyof AkadeemiaForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <form
      onSubmit={async e => { e.preventDefault(); await onSubmit(form); }}
      style={{ display: "flex", flexDirection: "column", gap: "14px" }}
    >
      <div>
        <label style={LBL}>Sõitja nimi</label>
        <input type="text" required value={form.nimi} onChange={set("nimi")} placeholder="Eesnimi Perenimi" style={INPUT} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
        <div>
          <label style={LBL}>Vanus</label>
          <input type="text" required value={form.vanus} onChange={set("vanus")} placeholder="nt 12" style={INPUT} />
        </div>
        <div>
          <label style={LBL}>Pikkus (cm)</label>
          <input type="text" required value={form.pikkus} onChange={set("pikkus")} placeholder="nt 150" style={INPUT} />
        </div>
        <div>
          <label style={LBL}>Kaal (kg)</label>
          <input type="text" required value={form.kaal} onChange={set("kaal")} placeholder="nt 45" style={INPUT} />
        </div>
      </div>

      <div>
        <label style={LBL}>Linn</label>
        <input type="text" required value={form.linn} onChange={set("linn")} placeholder="nt Tallinn" style={INPUT} />
      </div>

      <div>
        <label style={LBL}>Vastutava isiku nimi</label>
        <input type="text" required value={form.vastutava} onChange={set("vastutava")} placeholder="Lapsevanema täisnimi" style={INPUT} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div>
          <label style={LBL}>Telefon</label>
          <input type="tel" required value={form.telefon} onChange={set("telefon")} placeholder="+372 ..." style={INPUT} />
        </div>
        <div>
          <label style={LBL}>E-mail</label>
          <input type="email" required value={form.email} onChange={set("email")} placeholder="email@näide.ee" style={INPUT} />
        </div>
      </div>

      <SubmitButton loading={loading} />
    </form>
  );
}

function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <>
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "4px", padding: "14px",
          background: loading ? "rgba(0,0,0,0.4)" : "#0a0a0a", color: "#ffffff",
          border: "none", borderRadius: "10px",
          fontSize: "13px", fontWeight: 500,
          cursor: loading ? "default" : "pointer",
          fontFamily: "inherit", letterSpacing: "0.01em",
          transition: "background 0.2s",
        }}
      >
        {loading ? "Saadan…" : "Saada registreerimistaotlus →"}
      </button>
      <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)", lineHeight: 1.6, textAlign: "center" }}>
        Andmeid kasutatakse üksnes registreerimispäringule vastamiseks.
      </p>
    </>
  );
}

export function RegistrationModal({ program, onClose }: { program: RegistrationProgram; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = async (data: TalendidForm | AkadeemiaForm) => {
    setLoading(true);
    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, program }),
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "rgba(10,10,10,0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "cookieSlideIn 0.3s ease both",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#ffffff", borderRadius: "20px",
          width: "100%", maxWidth: "520px", maxHeight: "90vh",
          display: "flex", flexDirection: "column",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)", overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 28px 20px", borderBottom: "1px solid rgba(0,0,0,0.07)", flexShrink: 0,
        }}>
          <p style={{ fontSize: "17px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
            Registreerimine
          </p>
          <button
            onClick={onClose}
            style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.12)", background: "transparent",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "16px", color: "rgba(0,0,0,0.5)", flexShrink: 0,
            }}
            aria-label="Sulge"
          >×</button>
        </div>

        {/* Body */}
        <div style={{ overflowY: "auto", padding: "24px 28px 32px", flex: 1 }}>
          {submitted ? (
            <SuccessView />
          ) : program === "talendid-rajale" ? (
            <TalendidForm onSubmit={handleSubmit} loading={loading} />
          ) : (
            <AkadeemiaFormComponent onSubmit={handleSubmit} loading={loading} />
          )}
        </div>
      </div>
    </div>
  );
}
