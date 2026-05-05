"use client";

import { useState, useEffect } from "react";

const POLICY_SECTIONS = [
  {
    title: "1. Sissejuhatus",
    body: `Käesolevad privaatsustingimused selgitavad, kuidas Eesti Kardiliit MTÜ (edaspidi „meie") töötleb isikuandmeid, kui kasutate veebilehte kart.ee.

Oleme isikuandmete vastutav töötleja kooskõlas isikuandmete kaitse üldmäärusega (EL) 2016/679 (IKÜM) ja Eesti isikuandmete kaitse seadusega.

Küsimuste korral võtke ühendust: info@kart.ee`,
  },
  {
    title: "2. Vastutav töötleja",
    body: `Eesti Kardiliit MTÜ
Registrikood: 80106439
Pirni tn 3, 10614 Tallinn, Eesti
E-post: info@kart.ee`,
  },
  {
    title: "3. Kogutavad andmed",
    body: `Kogume ainult veebilehe külastusega seotud andmeid Google Analytics abil:

• IP-aadress (anonümiseeritud)
• Brauseri tüüp, seade ja operatsioonisüsteem
• Külastatud lehed, sessioonide kestus ja navigeerimisteed
• Ligikaudne geograafiline asukoht (riik, linn) IP-aadressi põhjal
• Külastuse kuupäev ja kellaaeg
• Vanusevahemik ja sugu (Google'i agregeeritud hinnangul, mitte otse kogutud)

Me ei kogu ega töötle eriliigilisi isikuandmeid (nt tervise- ega biomeetrilisi andmeid).
Meil puudub kasutajakonto süsteem, online-broneerimine ja veebipood – isikuandmeid otse ei koguta.`,
  },
  {
    title: "4. Töötlemise eesmärk ja õiguslik alus",
    body: `Kasutame Google Analytics't üksnes statistilisel eesmärgil: mõistmaks, kui palju inimesi meie lehte külastavad, millistest riikidest ja linnadest nad tulevad ning millised leheküljed pakuvad huvi.

Õiguslik alus: teie nõusolek (IKÜM art 6(1)(a)). Analüütilisi küpsiseid kasutatakse ainult siis, kui olete küpsisebänneris vajutanud „Nõustun". Nõusolekust keeldumisel ei edastata andmeid Google'ile.`,
  },
  {
    title: "5. Küpsised",
    body: `Kasutame kahte liiki küpsiseid:

Hädavajalikud küpsised — tagavad veebilehe tehnilise toimimise (nt nõusoleku meelde jätmine). Ei nõua nõusolekut.

Analüütikaküpsised (Google Analytics) — koguvad anonümiseeritud külastusstatistikat. Kasutatakse ainult teie nõusolekul.

Küpsiste eelistusi saate muuta oma brauseri seadetes või võtta meiega ühendust.`,
  },
  {
    title: "6. Andmete jagamine",
    body: `Me ei müü ega edasta isikuandmeid kolmandatele isikutele, välja arvatud:

Google LLC (Google Analytics) — andmetöötlus toimub vastavalt Google'i andmetöötlustingimustele. Google võib andmeid edastada väljapoole Euroopa Majanduspiirkonda (USA), tagades kaitse standardlepinguklauslitega (SCC).

Muudele kolmandatele isikutele andmeid ei edastata.`,
  },
  {
    title: "7. Andmete säilitamine",
    body: `Analüütilisi andmeid säilitatakse Google Analytics'is kuni 14 kuud, pärast mida anonüümistab Google need automaatselt.

Nõusoleku valikut mäletab teie brauser (localStorage) kuni kustutamiseni.`,
  },
  {
    title: "8. Teie õigused",
    body: `Teil on õigus:
• tutvuda oma andmetega ja nõuda nende parandamist
• nõuda andmete kustutamist
• piirata töötlemist
• võtta nõusolek igal ajal tagasi (mõjutab ainult edasist töötlust)
• esitada kaebus Andmekaitse Inspektsioonile (info@aki.ee, aki.ee)

Taotlused saatke aadressile info@kart.ee — vastame 30 päeva jooksul.`,
  },
  {
    title: "9. Turvalisus ja muudatused",
    body: `Veebileht kasutab TLS-krüpteeringut (HTTPS). Andmeid analüütikaks kogutakse anonümiseeritud kujul.

Privaatsustingimusi võime uuendada. Oluliste muudatuste korral teavitame sellest veebilehel. Viimati uuendatud: 05. mai 2026.`,
  },
];

function PrivacyModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

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
          background: "#ffffff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "24px 28px 20px",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          flexShrink: 0,
        }}>
          <div>
            <p style={{ fontSize: "17px", fontWeight: 500, color: "#0a0a0a", letterSpacing: "-0.01em" }}>
              Privaatsuspoliitika
            </p>
            <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.38)", marginTop: "2px" }}>
              Viimati uuendatud: 05. mai 2026
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "32px", height: "32px",
              borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.12)",
              background: "transparent",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", color: "rgba(0,0,0,0.5)",
              flexShrink: 0,
            }}
            aria-label="Sulge"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: "auto", padding: "24px 28px 32px", flex: 1 }}>
          {POLICY_SECTIONS.map((s, i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <p style={{
                fontSize: "13px", fontWeight: 500, color: "#0a0a0a",
                letterSpacing: "-0.01em", marginBottom: "8px",
              }}>
                {s.title}
              </p>
              <p style={{
                fontSize: "13px", lineHeight: 1.75,
                color: "rgba(0,0,0,0.55)", whiteSpace: "pre-line",
              }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const respond = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
    setShowPolicy(false);
  };

  return (
    <>
      {visible && (
        <div data-cookie-banner style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          justifyContent: "flex-end",
          pointerEvents: "none",
          animation: "cookieSlideIn 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both",
        }}>
          <div style={{
            width: "100%",
            maxWidth: "360px",
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.09)",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            pointerEvents: "all",
          }}>
            <p style={{
              fontSize: "15px", fontWeight: 500, color: "#0a0a0a",
              marginBottom: "10px", letterSpacing: "-0.01em",
            }}>
              Privaatsuseelistused
            </p>
            <p style={{
              fontSize: "13px", lineHeight: 1.65,
              color: "rgba(0,0,0,0.52)", marginBottom: "20px",
            }}>
              Kasutame Google Analytics&apos;t külastatavuse mõõtmiseks (riik, linn, vanusegrupp).
              Analüütilised küpsised eeldavad teie nõusolekut vastavalt EL küpsiste direktiivile.{" "}
              <button
                onClick={() => setShowPolicy(true)}
                style={{
                  background: "none", border: "none", padding: 0,
                  color: "rgba(0,0,0,0.4)", textDecoration: "underline",
                  cursor: "pointer", fontSize: "13px", fontFamily: "inherit",
                }}
              >
                Privaatsuspoliitika
              </button>
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => respond(false)}
                style={{
                  flex: 1, padding: "10px 16px",
                  background: "transparent",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "100px", fontSize: "13px",
                  fontWeight: 400, color: "rgba(0,0,0,0.6)",
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                Keeldu
              </button>
              <button
                onClick={() => respond(true)}
                style={{
                  flex: 1, padding: "10px 16px",
                  background: "#0a0a0a", border: "none",
                  borderRadius: "100px", fontSize: "13px",
                  fontWeight: 500, color: "#ffffff",
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                Nõustun
              </button>
            </div>
          </div>
        </div>
      )}

      {showPolicy && <PrivacyModal onClose={() => setShowPolicy(false)} />}
    </>
  );
}
