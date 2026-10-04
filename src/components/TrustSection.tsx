import { Award } from 'lucide-react';
import { gabriela, trustMetrics } from '@/lib/constants';
import { AnimatedNumber } from './AnimatedNumber';
import { SectionHeading } from './SectionHeading';

export function TrustSection() {
  return (
    <section className="bg-sand-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Credibilidade" title="Números que falam por si" />

        <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustMetrics.map((metric) => (
            <div
              key={metric.label}
              className="reveal flex flex-col-reverse justify-end gap-2 rounded-2xl border border-sand-200 bg-white p-6 text-center"
            >
              <dt className="text-sm font-medium text-earth">{metric.label}</dt>
              <dd className="font-serif text-4xl font-bold text-primary md:text-5xl">
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="reveal mx-auto mt-16 max-w-3xl rounded-[2rem] border border-sand-200 bg-white p-8 md:p-10">
          <h3 className="flex items-center justify-center gap-3 text-center font-serif text-2xl font-bold text-primary">
            <Award size={24} aria-hidden="true" className="text-gold" />
            Certificações e formação
          </h3>
          <ul className="mt-8 space-y-4">
            {gabriela.certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-4 border-b border-sand-100 pb-4 last:border-0 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary"
                >
                  ✓
                </span>
                <span className="font-medium text-neutral-800 md:text-lg">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
