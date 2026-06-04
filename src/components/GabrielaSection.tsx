"use client";

import { motion } from "framer-motion";
import { gabriela } from "@/lib/constants";
import Image from "next/image";

export function GabrielaSection() {
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
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
              {/* Circular Photo Placeholder */}

              <Image
                src="/image/user_image_1.png"
                alt="Gabriela Gomes - Bióloga"
                fill
                priority
                className="rounded-full object-cover border-4 border-primary/10"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-au/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-brazil/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="flex-1">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                {gabriela.name}
              </h2>
              <p className="text-lg font-medium text-secondary mb-1">
                {gabriela.title}
              </p>
              <p className="text-sm text-neutral-600 mb-6">
                {gabriela.specialization}
              </p>
            </motion.div>

            {/* Experience Summary */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-neutral-200"
            >
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-primary">
                  {gabriela.yearsExperience}
                </p>
                <p className="text-sm text-neutral-600">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-primary">
                  {gabriela.projects}
                </p>
                <p className="text-sm text-neutral-600">Projetos Completos</p>
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-3">Formação</h3>
                <ul className="space-y-2">
                  {gabriela.education.map((edu, idx) => (
                    <li key={idx} className="text-sm text-neutral-700">
                      <span className="font-medium">{edu.degree}</span>
                      <span className="text-neutral-600">
                        {" "}
                        • {edu.institution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-3">
                  Certificações
                </h3>
                <ul className="space-y-2">
                  {gabriela.certifications.map((cert, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-neutral-700"
                    >
                      <span className="text-primary font-bold">✓</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-3">Idiomas</h3>
                <div className="flex flex-wrap gap-2">
                  {gabriela.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
