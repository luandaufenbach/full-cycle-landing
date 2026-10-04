import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/constants';
import { SectionHeading } from './SectionHeading';

export function FAQSection() {
  return (
    <section id="duvidas" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          description="As dúvidas mais comuns antes de dar o primeiro passo."
        />

        {/* <details> nativo: acessível e funciona sem JavaScript */}
        <div className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="reveal group rounded-2xl border border-sand-200 transition-colors open:border-primary/30 open:bg-sand-50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-neutral-800 group-open:text-primary [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-neutral-400 transition-transform group-open:rotate-180 group-open:text-primary"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-neutral-600">{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-neutral-600">
          Não encontrou sua dúvida?{' '}
          <a href="#contato" className="font-semibold text-primary underline-offset-4 hover:underline">
            Fale diretamente com a Gabriela
          </a>
        </p>
      </div>
    </section>
  );
}
