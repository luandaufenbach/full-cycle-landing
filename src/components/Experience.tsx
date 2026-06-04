'use client';

import { motion } from 'framer-motion';
import { Award, Globe, Leaf } from 'lucide-react';

export function Experience() {
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

  const timeline = [
    {
      year: '2012-2017',
      title: 'Experiência no Brasil',
      description:
        'Desenvolvimento de projetos de licenciamento ambiental, estudos ambientais e monitoramento ambiental com foco em conformidade regulatória.',
      icon: Award,
    },
    {
      year: '2017-2022',
      title: 'Especialização em Restauração',
      description:
        'Consolidação de expertise em recuperação de áreas degradadas e planejamento de restauração ecológica em diversos biomas.',
      icon: Leaf,
    },
    {
      year: '2022-2024',
      title: 'Experiência Internacional (Austrália)',
      description:
        'Trabalho intensivo em restauração ecológica em manguezais, áreas ripárias, dunas, florestas tropicais e habitats de espécies ameaçadas.',
      icon: Globe,
    },
  ];

  const stats = [
    { label: '12+ anos', value: 'Experiência' },
    { label: 'Brasil + Austrália', value: 'Atuação' },
    { label: '5+ ecossistemas', value: 'Atendidos' },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 bg-[#81C784]/20 text-[#2E7D32] rounded-full text-sm font-semibold mb-4"
          >
            Trajetória Profissional
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Experiência da Fundadora
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Gabriela Gomes - Bióloga e Consultora Ambiental com Atuação Nacional e Internacional
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex gap-6">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#1B4332] flex items-center justify-center text-white shadow-lg">
                      <Icon size={24} />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-[#2E7D32] to-gray-200 mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <span className="inline-block px-3 py-1 bg-[#2E7D32]/10 text-[#2E7D32] rounded-full text-xs font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-[#2E7D32]/5 to-[#81C784]/5 border border-[#81C784]/20 hover:border-[#2E7D32]/30 transition-colors"
            >
              <div className="text-3xl font-bold text-[#2E7D32] mb-2">{stat.label}</div>
              <div className="text-gray-600 font-semibold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
