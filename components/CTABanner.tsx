'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <motion.div aria-hidden className="absolute inset-0" animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} style={{ background: 'linear-gradient(120deg, #050b08 0%, #0d2818 35%, #a67c1a 70%, #0d2818 100%)', backgroundSize: '200% 200%', opacity: 0.85 }} />
      <div className="absolute inset-0 bg-brand-black/40" />
      <div className="relative max-w-5xl mx-auto px-5 md:px-10 text-center">
        <h2 className="font-display text-6xl md:text-8xl leading-[0.95]">READY TO <span className="text-gradient-gold">PERFORM?</span></h2>
        <p className="mt-6 text-lg text-brand-white/80 max-w-xl mx-auto">22 premium NPB supplements. Order in 60 seconds on WhatsApp.</p>
        <div className="mt-10">
          <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={16} /> Start Your Order <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
