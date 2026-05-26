import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export const metadata = {
  title: 'Shop | FitForm — 22 Premium NPB Supplements',
  description: 'Browse the full FitForm range. Protein, pre-workout, creatine, vitamins, recovery. Order via WhatsApp.',
};

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        <section className="pt-28 pb-10 md:pt-36 md:pb-14 bg-brand-black border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="eyebrow mb-4">Catalogue</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              The full <span className="text-gradient-gold">range.</span>
            </h1>
            <p className="mt-4 text-brand-white/70 max-w-xl">
              22 products. 6 categories. Zero compromises.
            </p>
          </div>
        </section>
        <ProductGrid />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
