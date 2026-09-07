import type { Metadata } from "next";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import ScrollReveal from "@/components/ScrollReveal";

const siteUrl = "https://heladosnapoles.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Helados Nápoles | Paletas artesanales en Bogotá desde el 2000",
  description:
    "Helados Nápoles: paletas artesanales con pulpa de fruta 100% natural. Tradición familiar desde 1955, en Bogotá desde el año 2000. Pide ahora por WhatsApp.",
  keywords: [
    "helados Bogotá",
    "paletas artesanales",
    "heladería Bogotá",
    "Helados Nápoles",
    "domicilio de helados Bogotá",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Helados Nápoles | Paletas artesanales en Bogotá",
    description:
      "Tradición familiar desde 1955, en Bogotá desde el 2000. Paletas hechas con pulpa de fruta real. Pide por WhatsApp.",
    url: siteUrl,
    siteName: "Helados Nápoles",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Helados Nápoles - Paletas artesanales en Bogotá",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helados Nápoles | Paletas artesanales en Bogotá",
    description:
      "Tradición familiar desde 1955, en Bogotá desde el 2000. Paletas hechas con pulpa de fruta real.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-helados-napoles.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-theme="light">
      <body>
        {children}
        <FloatingActions />
        <ScrollReveal />
      </body>
    </html>
  );
}