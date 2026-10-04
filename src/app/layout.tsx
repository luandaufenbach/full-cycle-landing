import type { Metadata, Viewport } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { companyData, siteUrl } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
});

const title = 'Full Cycle | Consultoria Ambiental e Restauração Ecológica em SC';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: companyData.description,
  keywords: [
    'consultoria ambiental',
    'restauração ecológica',
    'licenciamento ambiental',
    'PRAD',
    'recuperação de áreas degradadas',
    'inventário florestal',
    'Santa Catarina',
  ],
  authors: [{ name: companyData.fullName }],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: companyData.description,
    url: '/',
    siteName: companyData.name,
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#2d5016',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}
