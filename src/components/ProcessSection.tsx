import { processSteps } from '@/lib/constants';
import { SectionHeading } from './SectionHeading';

export function ProcessSection() {
  return (
    <section id="como-funciona" className="bg-sand-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="O ciclo completo, etapa por etapa"
          description="Um processo claro para você saber o que acontece em cada fase do projeto."
        />

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map(({ title, description, icon: Icon }, index) => (
            <li key={title} className="reveal relative">
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-16 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-gold/70 to-primary/20 lg:block"
                />
              )}
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={22} aria-hidden="true" />
              </span>
              <p className="mt-6 text-sm font-semibold text-earth">Etapa {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
