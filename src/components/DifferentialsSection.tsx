import { differentials } from '@/lib/constants';
import { SectionHeading } from './SectionHeading';

export function DifferentialsSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_25rem_at_100%_0%,rgb(212_165_116/0.18),transparent),radial-gradient(40rem_25rem_at_0%_100%,rgb(31_77_77/0.6),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Diferenciais"
          title="Por que escolher a Full Cycle"
          description="Conhecimento técnico construído em dois países, aplicado com rigor a cada projeto."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {differentials.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="reveal rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-primary-100">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
