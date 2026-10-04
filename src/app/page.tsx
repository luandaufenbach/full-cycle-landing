import {
  Header,
  Hero,
  ClientProfileSection,
  ProcessSection,
  AboutSection,
  DifferentialsSection,
  TrustSection,
  FAQSection,
  ContactSection,
  Footer,
  WhatsAppButton,
} from '@/components';
import { companyData, contactInfo, gabriela, siteUrl } from '@/lib/constants';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: companyData.fullName,
  description: companyData.description,
  url: siteUrl,
  email: contactInfo.email,
  taxID: companyData.cnpj,
  areaServed: { '@type': 'State', name: companyData.serviceArea },
  founder: {
    '@type': 'Person',
    name: gabriela.name,
    jobTitle: gabriela.title,
    knowsLanguage: ['pt-BR', 'en', 'es'],
    sameAs: [contactInfo.linkedin],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-primary focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ClientProfileSection />
        <ProcessSection />
        <AboutSection />
        <DifferentialsSection />
        <TrustSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
