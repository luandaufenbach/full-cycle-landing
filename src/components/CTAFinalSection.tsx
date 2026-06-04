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
          {/* Icon */}
          <motion.div
            className="mb-6 flex justify-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Pronto para Resolver seu Desafio Ambiental?
          </h2>

          {/* Description */}
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Gabriela está disponível para uma conversação inicial sem compromisso.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={20} />
              <span>Iniciar Conversa</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              <Mail size={20} />
              <span>Enviar E-mail</span>
            </a>
          </div>

          {/* Subtext */}
          <p className="text-sm text-neutral-500 mb-8">
            Resposta geralmente em até 2 horas
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-200">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-2xl font-serif font-bold text-primary">12+</p>
              <p className="text-xs text-neutral-600">Anos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-2xl font-serif font-bold text-primary">100+</p>
              <p className="text-xs text-neutral-600">Projetos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-2xl font-serif font-bold text-primary">3</p>
              <p className="text-xs text-neutral-600">Continentes</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
