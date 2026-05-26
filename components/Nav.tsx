'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_ORDER_URL } from '@/lib/constants';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/70 backdrop-blur-xl border-b border-brand-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/fitform-mark-only.svg" alt="FitForm" width={36} height={36} priority />
          <span className="font-display text-2xl tracking-wider text-brand-gold">FITFORM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-brand-white/80">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <Link href="/#how" className="hover:text-brand-gold transition-colors">How to Order</Link>
        </nav>
        <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn-gold text-sm">
          <MessageCircle size={16} /> WhatsApp Order
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-brand-white" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-brand-border px-5 py-6 space-y-5">
          <Link href="/" onClick={() => setOpen(false)} className="block text-brand-white">Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="block text-brand-white">Shop</Link>
          <Link href="/#how" onClick={() => setOpen(false)} className="block text-brand-white">How to Order</Link>
          <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center">
            <MessageCircle size={16} /> WhatsApp Order
          </a>
        </div>
      )}
    </header>
  );
}
