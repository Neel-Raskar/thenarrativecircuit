# The Narrative Circuit - Website Project

## Project Overview

**Project Name:** The Narrative Circuit  
**Type:** Nightlife Events & Artist Management Company Website  
**Tech Stack:** Angular 21 (Standalone Components) + SCSS  
**Status:** In Development

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

### Completed Features
- ✅ **Hero Section** - Landing page with animated background, stats, CTA buttons
- ✅ **Services Section** - 5 services with icons, titles, taglines, and descriptions
- ✅ **Portfolio Section** - Gallery of events and artists with filtering
- ✅ **Contact Section** - Contact form with validation
- ✅ **Header Component** - Navigation with logo and menu links
- ✅ **Not Found Page** - 404 error page
- ✅ **Routing** - Full routing setup with lazy loading
- ✅ **Design System** - CSS variables, typography, spacing
- ✅ **Icon Component** - Reusable icon component
- ✅ **CTA Buttons** - "Explore Our Work" → Services, "Get in Touch" → Contact

### Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | HeroComponent | Landing page |
| `/services` | ServicesComponent | Services listing |
| `/portfolio` | PortfolioComponent | Portfolio gallery |
| `/contact` | ContactComponent | Contact form |
| `/**` | NotFoundComponent | 404 page |

---

## Project Structure

```
tnc-app/
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   └── home/
│   │   │       └── components/
│   │   │           ├── hero/              # Landing page
│   │   │           ├── services/          # Services listing
│   │   │           ├── portfolio/         # Portfolio gallery
│   │   │           ├── contact/           # Contact form
│   │   │           └── index.ts           # Barrel exports
│   │   ├── core/
│   │   │   ├── constants/
│   │   │   │   ├── app.constants.ts       # Content config (hero, services, routes)
│   │   │   │   └── index.ts
│   │   │   └── models/
│   │   │       ├── hero.model.ts          # TypeScript interfaces
│   │   │       └── index.ts
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── header/                # Navigation header
│   │   │       ├── icon/                  # Icon component
│   │   │       ├── not-found/            # 404 page
│   │   │       └── index.ts
│   │   ├── app.ts                         # Root component
│   │   ├── app.html                      # Root template
│   │   ├── app.routes.ts                # Routing configuration
│   │   ├── app.config.ts                # App configuration
│   │   └── app.scss                     # Root styles
│   ├── styles.scss                       # Global design system
│   ├── index.html                        # HTML shell with Google Fonts
│   └── main.ts                           # Bootstrap entry
├── public/
│   ├── assets/
│   │   ├── portfolio/                    # Portfolio images
│   │   │   ├── artists/                  # Artist photos
│   │   │   └── events/                   # Event photos
│   │   └── logos/                        # Brand logos
│   └── favicon.ico
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Services Offered

The following services are displayed in the Services section:

1. **Event Curation** - Planning & organizing nightlife events
2. **Artist Management** - Managing performers & talent
3. **Sound Production** - Audio engineering & equipment
4. **PR & Marketing** - Promotion & brand visibility
5. **Influencer Collaborations** - Influencer partnerships

---

## Commands

```bash
# Install dependencies
npm install

# Start development server
ng serve
# or
npm start

# Build for production
ng build
# or
npm run build

# Run tests
ng test
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

## Key Files

| File | Purpose |
|------|---------|
| `src/app/core/constants/app.constants.ts` | Hero content, services data, routes config |
| `src/app/core/models/hero.model.ts` | TypeScript interfaces (StatItem, Service) |
| `src/styles.scss` | Global design system with CSS variables |
| `src/app/app.routes.ts` | Route definitions with lazy loading |

---

*Last updated: Feb 22, 2026*
