'use client';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';

const ids = [1, 5, 12, 11];

export default function Bestsellers() {
  const list = ids.map((id) => products.find((p) => p.id === id)!).filter(Boolean);
  return (
    <section className="py-24 md:py-32 bg-brand-dark border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div><div className="eyebrow mb-3">Bestsellers</div><h2 className="font-display text-5xl md:text-6xl">Most ordered this month</h2></div>
          <a href="/shop" className="btn-ghost">View full range</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {list.map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}
        </div>
      </div>
    </section>
  );
}
