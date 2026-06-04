import {
  Header,
  Hero,
  ClientProfileSection,
  GabrielaSection,
  DifferentialsSection,
  TrustSection,
  FAQSection,
  CTAFinalSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientProfileSection />
        <GabrielaSection />
        <DifferentialsSection />
        <TrustSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </div>
  );
}
