"use client";

import { motion } from "framer-motion";
import { gabriela, gabrielaTimeline, contactInfo } from "@/lib/constants";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GabrielaSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left: Photo + Bio */}
          <motion.div variants={itemVariants} className="flex-shrink-0 w-full md:w-72">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0 mb-6">
              <Image
                src="/image/user_image_1.png"
                alt="Gabriela Gomes - Bióloga"
                fill
                priority
                className="rounded-full object-cover border-4 border-primary/10"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-au/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-brazil/20 rounded-full blur-2xl" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                {gabriela.name}
              </h2>
              <p className="text-base font-medium text-secondary mb-1">
                {gabriela.title}
              </p>
              <p className="text-sm text-neutral-600 mb-5">
                {gabriela.specialization}
              </p>

              {/* Languages */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                  Idiomas
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {gabriela.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex justify-center md:justify-start">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 text-primary text-sm font-medium hover:bg-primary/5 hover:border-primary/40 transition-all duration-200"
                >
                  <LinkedInIcon size={15} />
                  Ver perfil no LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div variants={itemVariants} className="flex-1">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-8">
              Uma trajetória construída em dois continentes
            </h3>

            <div className="space-y-0">
              {gabrielaTimeline.map((item, idx) => {
                const isLast = idx === gabrielaTimeline.length - 1;
                const isBrazil = item.country === 'Brasil';

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center flex-shrink-0 w-4">
                      <div
                        className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ring-2 ring-white ${
                          isBrazil ? 'bg-primary' : 'bg-accent-au'
                        }`}
                      />
                      {!isLast && (
                        <div className="w-0.5 flex-1 bg-neutral-200 my-1" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-7 ${isLast ? 'pb-0' : ''}`}>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            isBrazil
                              ? 'bg-primary/10 text-primary'
                              : 'bg-accent-au/25 text-secondary'
                          }`}
                        >
                          {item.year}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {item.country}
                        </span>
                      </div>
                      <h4 className="font-semibold text-primary text-sm mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
