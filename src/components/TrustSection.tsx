'use client';

import { motion } from 'framer-motion';
import { trustMetrics, gabriela } from '@/lib/constants';

export function TrustSection() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-serif font-bold text-primary mb-10 text-center"
          >
            Números que Falam
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg border border-neutral-200 p-6 text-center hover:shadow-card transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {metric.value}
                </p>
                <p className="text-xs md:text-sm text-neutral-600 font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center"
          >
            Certificações Reconhecidas
          </motion.h3>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10 p-8 md:p-12">
            <ul className="space-y-4">
              {gabriela.certifications.map((cert, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl text-primary">✓</span>
                  <span className="text-base md:text-lg text-neutral-800 font-medium">
                    {cert}
                  </span>
                </motion.li>
              ))}
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-4 pt-4 border-t border-primary/10"
              >
                <span className="text-2xl text-primary">✓</span>
                <span className="text-base md:text-lg text-neutral-800 font-medium">
                  Diploma of Horticulture • South Regional TAFE (Austrália)
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
