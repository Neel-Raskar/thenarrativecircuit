# The Narrative Circuit - Website Project

## Project Overview

**Project Name:** The Narrative Circuit  
**Type:** Nightlife Events & Artist Management Company Website  
**Tech Stack:** Angular 21 (Standalone Components) + SCSS

---

## Brand Identity

### Brand Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| Narrative (cream) | `#efece6` | "The Narrative" text in logo |
| Circuit (gold) | `#d5a946` | "Circuit" text in logo |
| Tagline | `#f1eae0` | Tagline text "Connect. Create. Circulate." |
| Brand Primary (cyan) | `#2596be` | Accents, buttons, stats, particles, effects |
| Brand Primary Light | `#4db8d6` | Gradient highlights |
| Brand Primary Dark | `#1a7a9e` | Hover states |

### Brand Values & Aesthetic
- Nightlife energy & excitement
- Trust & professionalism (events/artist management)
- Modern, cutting-edge vibe
- Creative flow ("Circuit" - connections)

---

## Current Project State

### Completed
- ✅ Hero Section (fully styled with brand colors)
- ✅ Design System (CSS variables in `styles.scss`)
- ✅ Logo with split-color text
- ✅ Tagline in #f1eae0
- ✅ Stats section (150+ Events, 50+ Artists, 10+ Years)
- ✅ CTA buttons (Explore Our Work, Get in Touch)
- ✅ Animated background with particles & glow effects

### Files Modified

**`src/styles.scss`**
- Added brand color variables (`--brand-primary`, etc.)
- Updated accent gradient to use cyan (#2596be)
- Added RGBA alpha variants for brand colors

**`src/app/features/home/components/hero/`**
- `hero.ts` - Added `brandNameFirst` and `brandNameSecond` properties
- `hero.html` - Split logo text into two spans for different colors
- `hero.scss` - Updated all colors, added glow effect

**`src/app/core/constants/app.constants.ts`**
- Added `brandNameFirst` and `brandNameSecond` constants

**`src/app/core/models/hero.model.ts`**
- Added `brandNameFirst` and `brandNameSecond` to HeroContent interface

---

## Project Structure

```
tnc-app/
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   └── home/
│   │   │       └── components/
│   │   │           └── hero/          # DONE ✓
│   │   ├── core/
│   │   │   ├── constants/
│   │   │   │   └── app.constants.ts  # Content config
│   │   │   └── models/
│   │   │       └── hero.model.ts      # TypeScript interfaces
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── icon/              # Icon component (arrow-right)
│   │   ├── app.ts                     # Root component
│   │   ├── app.html                   # Template (just <app-hero>)
│   │   ├── app.routes.ts              # Routes (empty for now)
│   │   └── app.config.ts              # App configuration
│   ├── styles.scss                    # Global design system
│   ├── index.html                     # HTML shell with Google Fonts
│   └── main.ts                        # Bootstrap entry
├── public/
│   └── logo.jpg                       # Brand logo
└── package.json
```

---

## Services (Planned)

The following services will be displayed in the Services section:

1. **Event Curation** - Planning & organizing nightlife events
2. **Artist Management** - Managing performers & talent
3. **Sound Production** - Audio engineering & equipment
4. **PR & Marketing** - Promotion & brand visibility

---

## Recommended Next Steps

1. **Services Section** - Create new component at `src/app/features/home/components/services/`
2. **Set up Routing** - Configure Angular routes in `app.routes.ts`
3. **Navigation Header** - Add nav bar with routes
4. **Portfolio Section** - Gallery of past events
5. **About Section** - Company story & team
6. **Testimonials Section** - Client reviews
7. **Contact Section** - Contact form
8. **Footer** - Links, social media, copyright

---

## Commands

```bash
# Start development server
ng serve
# or
npm start

# Build for production
ng build
# or
npm run build
```

---

## Design System Reference

### Colors (in `styles.scss`)
```scss
--brand-primary: #2596be;
--brand-primary-light: #4db8d6;
--brand-primary-dark: #1a7a9e;

--bg-primary: #0a0a0a;
--bg-secondary: #141414;
--bg-tertiary: #1f1f1f;

--text-primary: #ffffff;
--text-secondary: #a1a1aa;
--text-muted: #71717a;
```

### Typography
- **Display Font:** Syne (700, 800)
- **Body Font:** Inter (300, 400, 500, 600)

### Spacing
```scss
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 2rem;
--space-lg: 4rem;
--space-xl: 8rem;
--space-2xl: 12rem;
```

---

*Last updated: Feb 14, 2026*
