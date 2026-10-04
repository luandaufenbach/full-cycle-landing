import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/constants';

export function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark sm:hidden"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
