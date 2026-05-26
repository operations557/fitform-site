'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Product, priceFormat, CATEGORIES } from '@/lib/products';
import { whatsappProductUrl } from '@/lib/constants';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const catLabel = CATEGORIES.find((c) => c.id === product.category)?.label ?? product.category;
  return (
    <motion.article layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }} whileHover={{ y: -4 }} className="group bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-gold/60 hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)] transition-all">
      <div className="relative aspect-square bg-brand-dark overflow-hidden">
        <Image src={`/products/${product.image}`} alt={product.name} fill sizes="(max-width: 768px) 50vw, 25vw" quality={85} className="object-contain p-4 group-hover:scale-[1.04] transition-transform duration-500" />
      </div>
      <div className="p-5">
        <div className="font-mono text-[10px] tracking-widest text-brand-gold uppercase">{catLabel}</div>
        <h3 className="mt-2 text-[15px] leading-snug text-brand-white min-h-[3rem]">{product.name}</h3>
        <div className="mt-4 flex items-end justify-between"><div className="font-display text-2xl text-gradient-gold">{priceFormat(product.price)}</div></div>
        <a href={whatsappProductUrl(product.name)} target="_blank" rel="noopener noreferrer" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/40 text-brand-gold py-2.5 text-sm font-medium hover:bg-brand-gold hover:text-brand-black transition-colors">
          <MessageCircle size={14} /> Order via WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
