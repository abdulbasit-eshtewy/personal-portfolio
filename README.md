# Abdulbasit — Personal Portfolio

A bilingual (English / Arabic) portfolio built with Next.js App Router, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The root route redirects to `/en`; Arabic is available at `/ar`.

## Validation

```bash
npm run typecheck
npm run build
```

## Before publishing

- Replace the sample email address in `src/lib/content.ts` with your preferred contact email.
- Confirm project statuses and descriptions; keep only claims and features you can demonstrate.
- Replace the LinkedIn placeholder URL in `src/app/[locale]/page.tsx` with your profile.
- Set your real production domain in the metadata configuration in `src/app/layout.tsx`.
- Add real project screenshots when available.

## Design palette

- Ice Blue: `#D6E6F3`
- Powder Blue: `#A6C5D7`
- Sapphire: `#0F52BA`
- Deep Navy: `#000926`

Routes use locale prefixes and set the document direction for Arabic (RTL) and English (LTR).
