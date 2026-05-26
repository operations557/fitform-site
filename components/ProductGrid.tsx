'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { products, Category } from '@/lib/products';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';

function Inner() {
  const params = useSearchParams();
  const initial = (params.get('cat') as Category) || 'all';
  const [active, setActive] = useState<Category | 'all'>(initial);
  useEffect(() => {
    const c = params.get('cat') as Category | null;
    if (c) setActive(c);
  }, [params]);
  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  );
  return (
    <>
      <FilterBar active={active} onChange={setActive} />
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default function ProductGrid() {
  return (
    <Suspense fallback={null}>
      <Inner />
    </Suspense>
  );
}
