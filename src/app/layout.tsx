import type { Metadata, Viewport } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import { siteUrl } from "@/lib/constants";
import "./globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const title = "Full Cycle | Consultoria ambiental em Santa Catarina";
const description =
  "Licenciamento ambiental, CAR, ISO 14001 e restauração ecológica em Santa Catarina, com a bióloga Gabriela Gomes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "consultoria ambiental",
    "licenciamento ambiental",
    "CAR",
    "restauração ecológica",
    "Santa Catarina",
  ],
  authors: [{ name: "Full Cycle" }],
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3b2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
