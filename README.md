# Rackform

**Rackform** is a modern SaaS tool for warehouse layout configuration — starting with pallet racking, with future support for mezzanines and partitions.

## 🚀 Features

- Guided step-by-step form flow
- Smart warehouse + pallet configuration
- Toggle add-ons: mesh decks, barriers, labels, powder coating
- Clean modern UI (Horizon-style transitions)
- Generates quotable summary (coming soon: SVG plans)

## 🛠 Tech Stack

- Frontend: **React + Vite**
- Routing: **React Router**
- Animation: **GSAP**
- Hosting: **Vercel**
- (Optional later: Firebase / Supabase for backend + lead DB)

## 🧪 Local Setup

```bash
npm install
npm run dev
```

Then open: `http://localhost:5173`

## 🗂 Project Structure

```
/public         → contains index.html
/src
  /pages        → each step/form page
  main.tsx      → app entry
  App.tsx       → app shell (optional)
vite.config.js  → Vite build config
```

## 🧱 Coming Soon

- SVG layout preview
- Elevation & plan view exports
- Backend admin pricing panel
- Mezzanine + partition configurator

---

Built by [Ve1haus](https://github.com/Ve1haus) — deployed with ❤️ via Vercel.
