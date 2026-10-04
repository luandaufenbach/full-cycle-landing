'use client';

import { useRef, useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { clientProfiles, contactInfo } from '@/lib/constants';
import { SectionHeading } from './SectionHeading';

export function ClientProfileSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const active = clientProfiles[activeIndex];
  const ActiveIcon = active.icon;

  // Navegação por setas entre as abas (padrão WAI-ARIA)
  function onKeyDown(event: React.KeyboardEvent) {
    const last = clientProfiles.length - 1;
    const next =
      event.key === 'ArrowRight' || event.key === 'ArrowDown'
        ? activeIndex === last ? 0 : activeIndex + 1
        : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
          ? activeIndex === 0 ? last : activeIndex - 1
          : null;
    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <section id="servicos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Qual é a sua situação?"
          description="Selecione o perfil que melhor descreve o seu caso."
        />

        <div
          role="tablist"
          aria-label="Perfil do cliente"
          onKeyDown={onKeyDown}
          className="reveal mt-12 grid gap-3 sm:grid-cols-3"
        >
          {clientProfiles.map((profile, index) => {
            const Icon = profile.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={profile.id}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`perfil-${profile.id}`}
                aria-selected={isActive}
                aria-controls="perfil-painel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 rounded-2xl border px-5 py-4 text-left font-semibold transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                    : 'border-sand-200 bg-white text-neutral-700 hover:border-primary/40 hover:bg-primary-50'
                }`}
              >
                <Icon size={22} aria-hidden="true" className={isActive ? 'text-gold' : 'text-primary'} />
                {profile.label}
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          role="tabpanel"
          id="perfil-painel"
          aria-labelledby={`perfil-${active.id}`}
          className="mt-6 grid animate-fade-up gap-10 rounded-[2rem] border border-sand-200 bg-sand-50 p-6 sm:p-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12"
        >
          <div>
            <p className="flex items-start gap-3 text-lg font-medium text-neutral-800">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <ActiveIcon size={20} aria-hidden="true" />
              </span>
              {active.painPoint}
            </p>
            <p className="mt-6 rounded-r-lg border-l-4 border-primary bg-white px-4 py-3 text-sm font-semibold text-primary">
              {active.highlight}
            </p>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-earth">
              Serviços para este perfil
            </h3>
            <ul className="mt-4 space-y-3">
              {active.services.map((service) => (
                <li key={service.name} className="flex gap-3 text-neutral-700">
                  <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    {service.acronym && (
                      <strong className="font-semibold text-neutral-900">{service.acronym} — </strong>
                    )}
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-5 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-sand-200 sm:p-8">
            <p className="leading-relaxed text-neutral-700">
              Gabriela analisa o seu caso e indica o caminho mais rápido e seguro.
            </p>
            <p className="text-sm text-earth">Conversa inicial gratuita · Sem compromisso</p>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <MessageCircle size={18} aria-hidden="true" className="shrink-0" />
              {active.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
