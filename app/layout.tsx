import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const display = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = DM_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'FitForm | Premium Performance Nutrition',
  description: '22 premium-grade NPB supplements. Whey protein, pre-workout, creatine, vitamins and more. Order in 60 seconds via WhatsApp. South Africa.',
  keywords: 'protein, supplements, whey, pre-workout, creatine, South Africa, NPB',
  icons: {
    icon: [{ url: '/logo/fitform-mark-only.svg', type: 'image/svg+xml' }],
    apple: '/logo/fitform-icon-square.svg',
  },
  openGraph: {
    title: 'FitForm | Premium Performance Nutrition',
    description: 'Order premium NPB supplements via WhatsApp. Fast delivery across South Africa.',
    url: 'https://fitform.co.za',
    siteName: 'FitForm',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-brand-black text-brand-white min-h-screen">{children}</body>
    </html>
  );
}
