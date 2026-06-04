'use client';

import { motion } from 'framer-motion';
import { Globe, Microscope, CheckCircle2 } from 'lucide-react';
import { differentials } from '@/lib/constants';

export function DifferentialsSection() {
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
    <section
      id="differential"
      className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white"
    >
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
            Por que Escolher Gabriela?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Três pilares que definem nossa diferenciação no mercado
          </motion.p>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {differentials.map((diff, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`p-8 rounded-xl border border-neutral-200 ${diff.color} hover:shadow-card-hover transition-all duration-300 cursor-pointer`}
            >
              <motion.div className="text-4xl mb-4">
                {idx === 0 && <Globe size={40} className="text-primary" />}
                {idx === 1 && <Microscope size={40} className="text-primary" />}
                {idx === 2 && <CheckCircle2 size={40} className="text-primary" />}
              </motion.div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {diff.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
