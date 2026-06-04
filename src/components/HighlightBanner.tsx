'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HighlightBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1B4332] via-[#2E7D32] to-[#1B4332] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-[#4CAF50] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, 50, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-[#81C784] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, -50, 0],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Do diagnóstico à recuperação ambiental:
            <br />
            <span className="text-[#81C784]">Soluções completas para seu projeto</span>
          </h2>

          <p className="text-lg text-[#E0E0E0] mb-8 max-w-2xl mx-auto leading-relaxed">
            Conte com nossa experiência e expertise para implementar soluções ambientais eficazes
            e duradouras
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2E7D32] font-bold rounded-lg hover:bg-[#F5F5F5] transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>Entrar em Contato</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
