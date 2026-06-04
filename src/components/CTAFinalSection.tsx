'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

export function CTAFinalSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-brazil rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Dê o primeiro passo.
            <br />
            <span className="text-secondary">A conversa é gratuita.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-600 mb-3 leading-relaxed">
            Conte sua situação e Gabriela indica o caminho mais rápido e seguro para resolver seu desafio ambiental.
          </p>
          <p className="text-sm text-neutral-500 mb-10">
            Sem compromisso • Resposta em até 2 horas • Atende toda Santa Catarina
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-base"
            >
              <MessageCircle size={20} />
              <span>Iniciar Conversa</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 text-base"
            >
              <Mail size={20} />
              <span>Enviar E-mail</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
