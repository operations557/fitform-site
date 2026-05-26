'use client';
import { CATEGORIES, products, Category } from '@/lib/products';

interface Props {
  active: Category | 'all';
  onChange: (c: Category | 'all') => void;
}

export default function FilterBar({ active, onChange }: Props) {
  const counts: Record<string, number> = { all: products.length };
  CATEGORIES.forEach((c) => {
    counts[c.id] = products.filter((p) => p.category === c.id).length;
  });
  const items: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  ];
  return (
    <div className="sticky top-16 z-40 bg-brand-black/85 backdrop-blur-xl border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex gap-2 overflow-x-auto no-scrollbar">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button key={it.id} onClick={() => onChange(it.id)} className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-colors ${isActive ? 'bg-brand-gold text-brand-black border-brand-gold' : 'border-brand-border text-brand-white/80 hover:border-brand-gold hover:text-brand-gold'}`}>
              <span>{it.label}</span>
              <span className={`font-mono text-[11px] ${isActive ? 'opacity-80' : 'text-brand-gold/80'}`}>({counts[it.id]})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
