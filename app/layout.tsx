import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/app/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://kart.ee"),
  title: {
    template: "%s | Eesti Kardiliit",
    default: "Eesti Kardiliit – kart.ee",
  },
  description:
    "Eesti kardispordi alus. Talendid Rajale noortesari U11 ja U14, Kardiakadeemia koolitusprogramm ning rahvusvahelised võistlussarjad.",
  keywords: [
    "karting",
    "kardisport",
    "Eesti Kardiliit",
    "kart",
    "Talendid Rajale",
    "Kardiakadeemia",
    "hobikart",
    "võistluskart",
  ],
  authors: [{ name: "Eesti Kardiliit", url: "https://kart.ee" }],
  creator: "Eesti Kardiliit",
  publisher: "Eesti Kardiliit",
  openGraph: {
    type: "website",
    locale: "et_EE",
    url: "https://kart.ee",
    siteName: "Eesti Kardiliit",
    title: "Eesti Kardiliit – kart.ee",
    description:
      "Eesti kardispordi alus. Talendid Rajale noortesari, Kardiakadeemia koolitusprogramm ja Võistlussarjad.",
    images: [
      {
        url: "/photos/talendidrajale.jpg",
        alt: "Eesti Kardiliit – Talendid Rajale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eesti Kardiliit – kart.ee",
    description:
      "Eesti kardispordi alus. Talendid Rajale, Kardiakadeemia, Võistlussarjad.",
    images: ["/photos/talendidrajale.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kart.ee",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Eesti Kardiliit",
  url: "https://kart.ee",
  logo: "https://kart.ee/kardiliit_white.svg",
  description:
    "Eesti kardispordi katusorganisatsioon. Korraldame Talendid Rajale noortesarja, Kardiakadeemia koolitusprogrammi ja rahvusvahelisi võistlussarjasid.",
  sport: "Karting",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EE",
  },
  sameAs: ["https://kart.ee"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MDW2BMXCMF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-MDW2BMXCMF');`,
          }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
