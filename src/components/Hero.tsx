'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
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
        {/* Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full border border-primary/20">
            Consultoria Ambiental • Santa Catarina
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-4 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Sua empresa tem pendências
          <br className="hidden sm:block" />
          <span className="text-secondary"> ambientais em SC?</span>
        </motion.h1>

        {/* Description */}
        <motion.div
          className="max-w-2xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            Gabriela Gomes resolve licenças, CAR, relatórios ambientais e restauração ecológica — com metodologia científica e <span className="font-semibold text-primary">12+ anos de experiência internacional</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-base"
          >
            <MessageCircle size={20} />
            Falar com Gabriela
          </a>
          <a
            href="#profile"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 text-base"
          >
            Ver como posso ajudar
            <ChevronDown size={18} />
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            100+ projetos entregues
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Austrália & Brasil
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            ISO 14001 & ISO 14064
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
