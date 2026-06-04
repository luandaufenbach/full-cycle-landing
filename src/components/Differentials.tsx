'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Zap, BookOpen, CheckCircle2, Award } from 'lucide-react';

export function Differentials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const differentials = [
    {
      icon: Globe,
      title: 'Experiência Internacional',
      description:
        'Vivência prática em restauração ecológica na Austrália com acesso a metodologias de classe mundial',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description:
        'Soluções customizadas para cada projeto, entendendo as particularidades de sua empresa',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Soluções Integradas',
      description:
        'Abordagem 360º desde diagnóstico até monitoramento contínuo de resultados ambientais',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BookOpen,
      title: 'Conhecimento Técnico',
      description:
        'Expertise profunda em regulamentações ambientais e melhores práticas do setor',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CheckCircle2,
      title: 'Conformidade Legal',
      description:
        'Garantia de conformidade completa com todas as exigências regulatórias e ambientais',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Atuação Prática em Campo',
      description:
        'Experiência hands-on em implementação de projetos ambientais complexos e desafiadores',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Por que escolher
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Nossos Diferenciais
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Combinamos experiência internacional com conhecimento profundo do mercado brasileiro
          </motion.p>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <div className="h-full p-8 rounded-xl border border-gray-200 hover:border-[#2E7D32] bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Accent Line */}
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r from-[#2E7D32] to-[#81C784] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
