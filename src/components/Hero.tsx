'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(135deg, #2D5016 0%, #1F4D4D 50%, #D4A574 100%)`,
        }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo Small */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-serif font-bold">
            logo
          </div>
          <span className="text-xs font-medium text-primary uppercase tracking-widest">
            Full Cycle
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-4 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Restauração Ecológica
        </motion.h1>

        {/* Subtitle with Geographic Focus */}
        <motion.p
          className="text-lg md:text-xl text-neutral-600 mb-6 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Brasil • Austrália • Santa Catarina
        </motion.p>

        {/* Description */}
        <motion.div
          className="max-w-2xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Gabriela Gomes, especialista com <span className="font-semibold text-primary">12+ anos de experiência</span> internacional em restauração e consultoria ambiental.
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed mt-3">
            Trazendo metodologias de classe mundial para resolver seus desafios ambientais.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg"
          >
            Conversar Agora
            <ArrowDown className="rotate-90" size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
