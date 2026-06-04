'use client';

import { MessageCircle, Mail } from 'lucide-react';
import { companyData, contactInfo } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-serif font-bold">
                FC
              </div>
              <span className="font-serif font-bold text-white">Full Cycle</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              Consultoria Ambiental e Restauração Ecológica
            </p>
            <p className="text-xs text-neutral-500">
              <span className="block">CNPJ: {companyData.cnpj}</span>
              <span className="block">Atendimento: {companyData.serviceArea}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#profile" className="hover:text-primary transition-colors">
                  Qual é o seu caso?
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre Gabriela
                </a>
              </li>
              <li>
                <a href="#differential" className="hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-neutral-700">
          <p className="text-xs text-neutral-500">
            © {currentYear} Full Cycle Consultoria e Restauração Ecológica.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
