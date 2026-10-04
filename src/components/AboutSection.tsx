import { Languages } from 'lucide-react';
import { contactInfo, gabriela, gabrielaTimeline } from '@/lib/constants';
import { LinkedInIcon } from './LinkedInIcon';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading align="left" eyebrow="Sobre" title="Quem conduz o seu projeto" />
          <div className="reveal mt-6 space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              À frente da Full Cycle está {gabriela.name}, bióloga formada pela UFSC, com uma
              trajetória em restauração ecológica e consultoria ambiental construída na Austrália.
            </p>
            <p>
              Hoje, Gabriela aplica em Santa Catarina o que aprendeu em campo nos dois países:
              diagnóstico criterioso, planejamento técnico e acompanhamento até o resultado.
            </p>
          </div>

          <div className="reveal mt-8 rounded-2xl border border-sand-200 bg-sand-50 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-primary">
              <Languages size={18} aria-hidden="true" />
              Idiomas
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {gabriela.languages.map((lang) => (
                <li
                  key={lang}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-primary ring-1 ring-sand-200"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-primary-50"
          >
            <LinkedInIcon size={16} />
            Ver perfil no LinkedIn
          </a>
        </div>

        <div className="lg:pt-10">
          <h3 className="reveal font-serif text-2xl font-bold text-primary">
            Uma trajetória construída em dois continentes
          </h3>
          <ol className="mt-8">
            {gabrielaTimeline.map((item, index) => {
              const isLast = index === gabrielaTimeline.length - 1;
              const isBrazil = item.country === 'Brasil';
              return (
                <li key={item.year + item.title} className="reveal flex gap-4">
                  <div aria-hidden="true" className="flex w-4 shrink-0 flex-col items-center">
                    <span
                      className={`mt-1.5 size-3 shrink-0 rounded-full ring-4 ring-white ${isBrazil ? 'bg-primary' : 'bg-gold'}`}
                    />
                    {!isLast && <span className="my-1 w-px flex-1 bg-sand-200" />}
                  </div>
                  <div className={isLast ? '' : 'pb-8'}>
                    <p className="flex flex-wrap items-center gap-2 text-xs">
                      <span
                        className={`rounded-full px-2 py-0.5 font-bold ${
                          isBrazil ? 'bg-primary-50 text-primary' : 'bg-sand-100 text-earth'
                        }`}
                      >
                        {item.year}
                      </span>
                      <span className="text-neutral-500">{item.country}</span>
                    </p>
                    <h4 className="mt-1.5 font-semibold text-primary">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
