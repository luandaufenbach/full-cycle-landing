'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    'Consultoria ambiental integrada',
    'Diagnóstico até recuperação ambiental',
    'Monitoramento contínuo de projetos',
    'Conformidade com legislação ambiental',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1 bg-[#81C784]/20 text-[#2E7D32] rounded-full text-sm font-semibold mb-4">
                Sobre a Full Cycle
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Consultoria Ambiental de Excelência
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              A Full Cycle oferece consultoria ambiental integrada, atuando desde o diagnóstico até
              a recuperação ambiental e monitoramento. Nossa abordagem combina conhecimento técnico
              profundo com experiência prática em campo.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Liderada por Gabriela Gomes, bióloga e consultora ambiental com mais de 12 anos de
              experiência, a empresa atua em diversos projetos que exigem expertise técnica e
              conhecimento regulatório profundo.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#2E7D32] flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-[#1B4332] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <p className="text-white text-lg font-semibold">Consultoria Ambiental</p>
                  <p className="text-[#81C784] text-sm mt-2">Experiência Nacional e Internacional</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4CAF50]/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#81C784]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
