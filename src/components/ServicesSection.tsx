'use client';

import { motion } from 'framer-motion';
import { serviceCategories } from '@/lib/constants';

export function ServicesSection() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
          >
            Serviços & Soluções
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Gabriela trabalha em três frentes que caminham juntas
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-gradient-to-b ${category.bgColor} rounded-xl border border-neutral-200 p-8 hover:shadow-card-hover transition-all duration-300 hover:border-primary/20`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{category.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {category.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                {category.subtitle}
              </p>

              {/* Services List */}
              <ul className="space-y-2">
                {category.services.map((service, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
