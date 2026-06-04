import {
  Header,
  Hero,
  GabrielaSection,
  DifferentialsSection,
  ServicesSection,
  TrustSection,
  CTAFinalSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <GabrielaSection />
        <DifferentialsSection />
        <ServicesSection />
        <TrustSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </div>
  );
}
