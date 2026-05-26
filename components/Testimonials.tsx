'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const quotes = [
  { q: 'Ordered Monday, delivered Wednesday. The Whey tastes incredible.', a: 'Dylan T.', city: 'Cape Town' },
  { q: 'The pre-workout hits differently. No jitters, just clean energy.', a: 'Sarah M.', city: 'Johannesburg' },
  { q: 'Easy ordering on WhatsApp. This is how online shopping should work.', a: 'Marco S.', city: 'Durban' },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-5">
          <div className="eyebrow mb-2">Real Athletes</div>
          <h2 className="font-display text-5xl md:text-6xl mb-8 leading-[0.95]">Proof, not promises.</h2>
          {quotes.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 bg-brand-card border border-brand-border rounded-xl">
              <p className="text-brand-white text-lg leading-relaxed">&ldquo;{t.q}&rdquo;</p>
              <footer className="mt-3 text-sm text-brand-white/60 font-mono">— {t.a}, {t.city}</footer>
            </motion.blockquote>
          ))}
        </div>
        <div className="md:col-span-5">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xs aspect-[9/19] rounded-[2.5rem] border-[10px] border-brand-card bg-brand-black p-5 shadow-2xl">
            <div className="text-center text-brand-white/40 text-[10px] mb-3 font-mono">WhatsApp · FitForm</div>
            <div className="bg-[#075e54] text-white rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed">
              <div className="font-bold flex items-center gap-1 text-brand-gold-light"><Check size={14} /> ORDER CONFIRMED</div>
              <div className="mt-2 space-y-1 text-[13px]">
                <div>ID: FF-29481</div>
                <div>Product: NPB Whey Vanilla 980g</div>
                <div>Qty: 1</div>
                <div>Total: R 669.99</div>
                <div className="mt-2 opacity-90">Dispatch: Tomorrow AM</div>
                <div className="opacity-90">Tracking via WhatsApp ✓</div>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-brand-white/40 text-right font-mono">14:32</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
