import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Cycle - Consultoria Ambiental e Restauração Ecológica",
  description: "Consultoria ambiental integrada com experiência nacional e internacional. Licenciamento, recuperação ambiental e sustentabilidade.",
  keywords: "consultoria ambiental, restauração ecológica, licenciamento ambiental, recuperação ambiental, sustentabilidade",
  authors: [{ name: "Full Cycle" }],
  openGraph: {
    title: "Full Cycle - Consultoria Ambiental e Restauração Ecológica",
    description: "Soluções ambientais completas com experiência em Brasil e Austrália",
    url: "https://fullcycle.com.br",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2E7D32" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
