'use client';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.2, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);
  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { value: 22, label: 'Products', prefix: '', suffix: '' },
  { value: 6, label: 'Categories', prefix: '', suffix: '' },
  { value: 149, label: 'From (ZAR)', prefix: 'R', suffix: '' },
  { value: 60, label: 'Seconds to order', prefix: '', suffix: 's' },
];

export default function StatsBar() {
  return (
    <section className="border-y border-brand-border bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-gradient-gold leading-none">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-brand-white/60 font-mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
