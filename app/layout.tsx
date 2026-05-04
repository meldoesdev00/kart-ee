import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eesti Kardiliit – kart.ee",
  description: "Eesti kardispordi alus. Talendid Rajale, Kardiakadeemia, Võistlussarjad.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="et">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=aspekta@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
