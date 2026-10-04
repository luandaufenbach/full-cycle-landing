'use client';

import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { contactInfo, navItems } from '@/lib/constants';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-200/70 bg-white/90 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#inicio" aria-label="Full Cycle — início" onClick={() => setIsOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Falar no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            className="-mr-2 rounded-lg p-2 text-neutral-700 transition-colors hover:bg-sand-100 lg:hidden"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="menu-mobile" className="border-t border-sand-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
