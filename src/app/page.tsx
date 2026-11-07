import {
  Header,
  Hero,
  ServicesSection,
  AboutSection,
  FAQSection,
  ContactSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
