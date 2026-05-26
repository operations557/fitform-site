'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '@/lib/constants';

const words = ['FUEL', 'YOUR'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(13,40,24,0.9) 0%, rgba(5,11,8,1) 65%)' }} />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 items-center w-full">
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow mb-6">NPB Premium Series</motion.div>
          <h1 className="font-display leading-[0.9] text-[18vw] md:text-[7.5rem] tracking-tight">
            {words.map((w, i) => (
              <motion.span key={w} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }} className="block">{w}</motion.span>
            ))}
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }} className="block text-gradient-gold">PERFORMANCE</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }} className="mt-8 max-w-lg text-brand-white/70 text-lg leading-relaxed">
            22 premium-grade supplements. Engineered for athletes who don&apos;t negotiate with results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold"><MessageCircle size={16} /> Order on WhatsApp <ArrowRight size={16} /></a>
            <Link href="/shop" className="btn-ghost">Browse All Products <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
        <div className="md:col-span-5">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 blur-3xl opacity-50" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.55) 0%, rgba(212,175,55,0) 65%)' }} />
            <Image src="/products/whey-vanilla.jpg" alt="NPB Whey Vanilla" fill priority sizes="(max-width: 768px) 80vw, 40vw" className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
