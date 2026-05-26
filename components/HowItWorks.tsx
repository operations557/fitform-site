'use client';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '@/lib/constants';

const steps = [
  { n: '01', title: 'Save our number', body: 'Add +27 77 356 1532 to your contacts as "FitForm".' },
  { n: '02', title: 'Send NEWORDER', body: 'WhatsApp us "NEWORDER" and we send a tap-to-fill order form. No typing.' },
  { n: '03', title: 'Confirm. Done.', body: 'Confirm, pay, and we dispatch. Track everything via WhatsApp.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-3">How To Order</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Order in 60 seconds.<br /><span className="text-gradient-gold">No app required.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          <div className="hidden md:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
              <div className="w-20 h-20 rounded-full border border-brand-gold/40 bg-brand-card flex items-center justify-center mb-6">
                <span className="font-display text-3xl text-gradient-gold">{s.n}</span>
              </div>
              <h3 className="font-display text-3xl mb-2">{s.title}</h3>
              <p className="text-brand-white/70 leading-relaxed max-w-xs">{s.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={16} /> Order Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
