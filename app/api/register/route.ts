import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const PROGRAM_LABEL: Record<string, string> = {
  "talendid-rajale": "Talendid Rajale 2026",
  "kardiakadeemia": "Kardiakadeemia",
};

export async function POST(req: NextRequest) {
  const { nimi, vanus, pikkus, kaal, linn, vastutava, telefon, email, program } = await req.json();

  const label = PROGRAM_LABEL[program] ?? program;

  const rows = [
    ["Programm", label],
    ["Sõitja nimi", nimi],
    ["Vanus", vanus],
    ["Pikkus", `${pikkus} cm`],
    ["Kaal", `${kaal} kg`],
    ["Linn", linn],
    ["Vastutava isiku nimi", vastutava],
    ["Telefon", telefon],
    ["E-mail", email],
  ];

  const tableRows = rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666;font-size:13px;white-space:nowrap">${k}</td><td style="padding:6px 12px;font-size:13px;font-weight:500;color:#0a0a0a">${v}</td></tr>`)
    .join("");

  const adminHtml = `
    <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto">
      <p style="font-size:18px;font-weight:600;color:#0a0a0a;margin-bottom:4px">Uus registreerimistaotlus</p>
      <p style="font-size:13px;color:#888;margin-bottom:24px">${label}</p>
      <table style="width:100%;border-collapse:collapse;background:#f7f7f7;border-radius:10px;overflow:hidden">
        <tbody>${tableRows}</tbody>
      </table>
    </div>`;

  const autoReplyHtml = `
    <div style="font-family:system-ui,sans-serif;max-width:520px;margin:0 auto">
      <p style="font-size:18px;font-weight:600;color:#0a0a0a;margin-bottom:4px">Aitäh registreerimast!</p>
      <p style="font-size:14px;color:#555;line-height:1.7;margin-bottom:24px">
        Tere ${nimi},<br><br>
        Oleme Teie registreerimistaotluse kätte saanud ja võtame Teiega ühendust esimesel võimalusel.
      </p>
      <p style="font-size:13px;color:#888">Eesti Kardiliit · <a href="https://kart.ee" style="color:#888">kart.ee</a></p>
    </div>`;

  try {
    await resend.emails.send({
      from: "Eesti Kardiliit <info@kart.ee>",
      to: "timo@kart.ee",
      replyTo: email,
      subject: `Uus registreerimistaotlus – ${label}`,
      html: adminHtml,
    });

    await resend.emails.send({
      from: "Eesti Kardiliit <info@kart.ee>",
      to: email,
      subject: `Registreerimistaotlus vastu võetud – ${label}`,
      html: autoReplyHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false, error: "Saatmine ebaõnnestus" }, { status: 500 });
  }
}
