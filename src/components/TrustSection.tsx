'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { trustMetrics, gabriela } from '@/lib/constants';

function AnimatedCounter({
  numericValue,
  suffix,
  label,
}: {
  numericValue: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, numericValue]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl border border-neutral-200 p-6 text-center hover:shadow-card transition-all duration-300"
    >
      <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-neutral-600 font-medium">{label}</p>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
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
            Números que falam por si
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustMetrics.map((metric, idx) => (
              <AnimatedCounter
                key={idx}
                numericValue={metric.numericValue}
                suffix={metric.suffix}
                label={metric.label}
              />
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
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
