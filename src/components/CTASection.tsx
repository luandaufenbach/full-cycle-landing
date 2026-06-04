'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Leaf } from 'lucide-react';

export function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#1B4332] flex items-center justify-center">
              <Leaf className="text-[#81C784]" size={32} />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Precisa de apoio para seu projeto ambiental?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Entre em contato e descubra como a Full Cycle pode auxiliar em todas as etapas do seu
            projeto ambiental
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2E7D32] to-[#1B4332] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#2E7D32]/50 transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="mailto:contato@fullcycle.com.br"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#2E7D32] text-[#2E7D32] font-bold rounded-lg hover:bg-[#2E7D32]/5 transition-all duration-300 group w-full sm:w-auto"
            >
              <Mail size={20} />
              <span>Enviar E-mail</span>
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 mt-8"
          >
            Responderemos em breve. Aguardamos por sua mensagem! 🌿
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
