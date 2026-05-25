# FitForm Site

Next.js 14 (App Router) · Tailwind · Framer Motion · WhatsApp-first ordering.

## Setup
```
npm install
npm run dev
```
Open http://localhost:3000

## Build
```
npm run build && npm start
```

## Images
22 product images are in `public/products/` keyed by slug:
`whey-vanilla.jpg`, `whey-choc.jpg`, … see `lib/products.ts`.

**HEADS UP:** images were mapped to slugs in alphabetical filename order from the WhatsApp zip. Verify each image matches its product — if any are swapped, just rename or replace the files in `public/products/`.

## WhatsApp
Single source of truth in `lib/constants.ts`. Change `WHATSAPP_NUMBER` to update every CTA.

## Deploy
Vercel-ready. No server-only deps. `next start` works fine on any Node 18+ host.
