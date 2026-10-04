import Image from 'next/image';
import { ArrowDown, MapPin, MessageCircle } from 'lucide-react';
import { contactInfo, gabriela } from '@/lib/constants';
import gabrielaPhoto from '@/assets/gabriela-gomes.png';

const proofPoints = ['100+ projetos entregues', 'Austrália e Brasil', 'ISO 14001 e ISO 14064'];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sand-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_85%_-10%,rgb(212_165_116/0.22),transparent),radial-gradient(40rem_30rem_at_-10%_110%,rgb(45_80_22/0.10),transparent)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-28">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1 text-xs font-semibold text-primary">
            <MapPin size={14} aria-hidden="true" />
            Consultoria ambiental · Santa Catarina
          </p>

          <h1 className="mt-6 animate-fade-up font-serif text-4xl font-bold leading-[1.15] text-primary [animation-delay:60ms] sm:text-5xl lg:text-[3.25rem]">
            Sua empresa tem pendências <span className="text-earth">ambientais em SC?</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-neutral-700 [animation-delay:120ms]">
            <strong className="font-semibold text-neutral-900">{gabriela.name}</strong> resolve
            licenças, CAR, relatórios ambientais e restauração ecológica, com metodologia
            científica e mais de 12 anos de experiência internacional.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:180ms] sm:flex-row">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar com Gabriela
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-white/60 px-7 py-3.5 font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-white"
            >
              Ver como podemos ajudar
              <ArrowDown
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>

          <ul className="mt-10 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 text-sm text-earth [animation-delay:240ms]">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms] lg:max-w-[25rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-gold/35 via-transparent to-teal/25 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/15 ring-1 ring-black/5">
            <Image
              src={gabrielaPhoto}
              alt="Gabriela Gomes em trabalho de campo"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 640px) 400px, 90vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur sm:-left-8 sm:right-auto sm:px-5">
            <p className="font-serif font-bold text-primary">{gabriela.name}</p>
            <p className="text-sm text-earth">{gabriela.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
