import { Mail, MessageCircle } from 'lucide-react';
import { companyData, contactInfo, navItems } from '@/lib/constants';
import { LinkedInIcon } from './LinkedInIcon';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Consultoria ambiental e restauração ecológica com experiência no Brasil e na
              Austrália.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-sm font-semibold text-white">Navegação</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-neutral-800 pt-8 text-xs sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {companyData.fullName}
          </p>
          <p>
            CNPJ {companyData.cnpj} · Atendimento em {companyData.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}
