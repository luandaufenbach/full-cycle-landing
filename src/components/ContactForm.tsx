'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 bg-[#81C784]/20 text-[#2E7D32] rounded-full text-sm font-semibold mb-4"
          >
            Contato
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Formulário de Contato
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            Preencha o formulário e entraremos em contato em breve
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {isSubmitted ? (
            <div className="p-12 text-center flex flex-col items-center justify-center min-h-96">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <CheckCircle className="text-[#2E7D32] mb-4" size={64} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem enviada com sucesso!</h3>
              <p className="text-gray-600">
                Obrigado pelo contato. Em breve retornaremos com mais informações.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all resize-none"
                  placeholder="Descreva seu projeto e necessidades ambientais..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#2E7D32] to-[#1B4332] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.a
            variants={itemVariants}
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-6 rounded-xl border border-gray-200 hover:border-[#2E7D32] hover:shadow-lg transition-all group"
          >
            <div className="inline-block w-12 h-12 rounded-full bg-[#2E7D32]/10 group-hover:bg-[#2E7D32] transition-all mb-3 flex items-center justify-center">
              <MessageCircle className="text-[#2E7D32] group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-600">(11) 9999-9999</p>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="mailto:contato@fullcycle.com.br"
            className="text-center p-6 rounded-xl border border-gray-200 hover:border-[#2E7D32] hover:shadow-lg transition-all group"
          >
            <div className="inline-block w-12 h-12 rounded-full bg-[#2E7D32]/10 group-hover:bg-[#2E7D32] transition-all mb-3 flex items-center justify-center">
              <Send className="text-[#2E7D32] group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
            <p className="text-sm text-gray-600">contato@fullcycle.com.br</p>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-6 rounded-xl border border-gray-200 hover:border-[#2E7D32] hover:shadow-lg transition-all group"
          >
            <div className="inline-block w-12 h-12 rounded-full bg-[#2E7D32]/10 group-hover:bg-[#2E7D32] transition-all mb-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#2E7D32] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Instagram</h3>
            <p className="text-sm text-gray-600">@fullcycleconsultoria</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
