import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyData, contactInfo } from '@/lib/constants';

export function ContactSection() {
  return (
    <section id="contato" className="bg-white px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
      <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-20%,rgb(212_165_116/0.25),transparent),radial-gradient(30rem_20rem_at_100%_120%,rgb(31_77_77/0.7),transparent)]"
        />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            Dê o primeiro passo. <span className="text-gold">A conversa é gratuita.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-100">
            Conte sua situação e Gabriela indica o caminho mais rápido e seguro para resolver o
            seu desafio ambiental.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-primary transition-colors hover:bg-sand-100"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Iniciar conversa
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail size={20} aria-hidden="true" />
              Enviar e-mail
            </a>
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-primary-100">
            <MapPin size={16} aria-hidden="true" />
            Sem compromisso · Resposta em até 2 horas · Atendimento em toda{' '}
            {companyData.serviceArea}
          </p>
        </div>
      </div>
    </section>
  );
}
