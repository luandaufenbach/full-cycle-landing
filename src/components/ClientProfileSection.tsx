'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Tractor, Sprout, CheckCircle2, MessageCircle } from 'lucide-react';
import { clientProfiles, contactInfo } from '@/lib/constants';

const iconMap = {
  building: Building2,
  tractor: Tractor,
  sprout: Sprout,
};

export function ClientProfileSection() {
  const [activeId, setActiveId] = useState(clientProfiles[0].id);

  const active = clientProfiles.find((p) => p.id === activeId)!;
  const ActiveIcon = iconMap[active.icon as keyof typeof iconMap];

  return (
    <section id="profile" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            Qual é a sua situação?
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Selecione o perfil que melhor descreve o seu caso
          </motion.p>
        </div>

        {/* Profile Tabs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {clientProfiles.map((profile) => {
            const Icon = iconMap[profile.icon as keyof typeof iconMap];
            const isActive = profile.id === activeId;
            return (
              <button
                key={profile.id}
                onClick={() => setActiveId(profile.id)}
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border-2 text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-lg'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <Icon size={22} className={isActive ? 'text-white' : 'text-primary'} />
                <span className="font-semibold text-sm md:text-base">{profile.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Profile Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="bg-gradient-to-br from-primary/5 to-white rounded-2xl border border-primary/15 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Problem + Services */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ActiveIcon size={20} className="text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-neutral-700 leading-snug font-medium">
                    {active.painPoint}
                  </p>
                </div>

                <div className="mb-6 p-4 bg-primary/8 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-primary font-semibold">{active.highlight}</p>
                </div>

                <h3 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wide">
                  Serviços para este perfil
                </h3>
                <ul className="space-y-2.5">
                  {active.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle2
                        size={16}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col justify-center items-start md:items-center text-left md:text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center self-center md:self-auto">
                  <ActiveIcon size={32} className="text-primary" />
                </div>
                <div>
                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-2">
                    Gabriela analisa o seu caso e indica o caminho mais rápido e seguro.
                  </p>
                  <p className="text-xs text-neutral-500">
                    Conversa inicial gratuita • Sem compromisso
                  </p>
                </div>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <MessageCircle size={18} />
                  {active.cta}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
