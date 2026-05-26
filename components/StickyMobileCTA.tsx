'use client';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-gold text-brand-black h-14 flex items-center justify-center gap-2 font-semibold text-sm shadow-[0_-10px_30px_rgba(0,0,0,0.4)]">
      <MessageCircle size={18} /> Order via WhatsApp <ArrowRight size={16} />
    </a>
  );
}
