'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES, products } from '@/lib/products';

const reps: Record<string, string> = {
  protein: 'whey-choc.jpg', 'pre-workout': 'pre-sour-candy.jpg', 'fat-loss': 'fat-burner.jpg',
  strength: 'creatine.jpg', health: 'd3-k2.jpg', recovery: 'ashwagandha.jpg',
};

export default function CategoryGrid() {
  return (
    <section className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-4">The Range</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Six categories. <br /><span className="text-gradient-gold">One standard.</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat, i) => {
            const count = products.filter((p) => p.category === cat.id).length;
            const isHero = i === 0;
            return (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.5, delay: i * 0.05 }} className={isHero ? 'md:col-span-2 md:row-span-2' : ''}>
                <Link href={`/shop?cat=${cat.id}`} className="group relative block h-full bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-gold transition-colors">
                  <div className={`relative ${isHero ? 'aspect-[16/12]' : 'aspect-[4/3]'} bg-brand-dark`}>
                    <Image src={`/products/${reps[cat.id]}`} alt={cat.label} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-brand-gold border border-brand-gold/40 px-2 py-1 rounded-full bg-brand-black/60">{count} PRODUCTS</div>
                  </div>
                  <div className="p-6 flex items-end justify-between">
                    <div><h3 className="font-display text-3xl md:text-4xl">{cat.label}</h3><p className="mt-1 text-sm text-brand-white/60">{cat.tagline}</p></div>
                    <ArrowUpRight className="text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
