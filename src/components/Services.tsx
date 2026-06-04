'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  BarChart3,
  CheckSquare,
  RefreshCw,
  Leaf,
  TrendingUp,
  MapPin,
  Zap,
  Microscope,
  TreePine,
  Shield,
  Award,
} from 'lucide-react';

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      category: 'Licenciamento Ambiental',
      items: [
        { title: 'RAP', description: 'Relatório Ambiental Prévio', icon: FileText },
        { title: 'RAS', description: 'Relatório Ambiental Simplificado', icon: FileText },
        { title: 'EAS', description: 'Estudo Ambiental Simplificado', icon: FileText },
      ],
    },
    {
      category: 'Diagnósticos e Estudos',
      items: [
        { title: 'Diagnóstico Ambiental', description: 'Avaliação completa de áreas', icon: Microscope },
        { title: 'Socioambiental', description: 'Diagnóstico Socioambiental integrado', icon: BarChart3 },
        { title: 'Inventário Florestal', description: 'Levantamento de recursos florestais', icon: TreePine },
      ],
    },
    {
      category: 'Regularização Ambiental',
      items: [
        { title: 'CAR', description: 'Cadastro Ambiental Rural', icon: MapPin },
        { title: 'Supressão Vegetal', description: 'Projetos de supressão licenciada', icon: Shield },
        { title: 'Compensação Ambiental', description: 'Reposição Florestal', icon: Leaf },
      ],
    },
    {
      category: 'Recuperação Ambiental',
      items: [
        { title: 'PRAD', description: 'Plano de Recuperação de Áreas Degradadas', icon: RefreshCw },
        { title: 'Restauração Ecológica', description: 'Planejamento e implementação', icon: Leaf },
        { title: 'Monitoramento', description: 'Acompanhamento de recuperação ambiental', icon: TrendingUp },
      ],
    },
    {
      category: 'Sustentabilidade Corporativa',
      items: [
        { title: 'Créditos de Carbono', description: 'Projetos de carbono voluntários', icon: Zap },
        { title: 'ISO 14001', description: 'Certificação de gestão ambiental', icon: Award },
        { title: 'ISO 14064', description: 'Relatório de gases do efeito estufa', icon: TrendingUp },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Nossas Soluções
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Serviços Especializados
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Soluções completas em consultoria ambiental, desde diagnóstico até recuperação e
            monitoramento
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-[#2E7D32] to-[#81C784] rounded-full" />
                {category.category}
              </h3>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, itemIndex) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={itemIndex}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-xl border border-gray-200 hover:border-[#2E7D32] hover:shadow-lg transition-all duration-300 group cursor-pointer bg-gradient-to-br from-gray-50/50 to-white hover:from-[#2E7D32]/5 hover:to-[#81C784]/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#2E7D32]/10 group-hover:bg-[#2E7D32] transition-all duration-300">
                          <Icon className="text-[#2E7D32] group-hover:text-white transition-colors" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h4>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
