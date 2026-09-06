import type { Metadata } from "next";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Helados Nápoles | Sabor artesanal con pulpa de fruta real",
  description:
    "Helados Nápoles: paletas artesanales con pulpa de fruta 100% natural. Herederos de una tradición familiar, presentes en Bogotá desde el 2000. Pide ahora por WhatsApp.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-helados-napoles.png",
  }
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