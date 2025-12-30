# IntelloMind AI Consulting Website

## Overview
A modern, dark-themed website for IntelloMind, an AI consulting company. Following the intellomind.ai design with a professional dark aesthetic, purple/indigo gradient accents, glass-effect cards, and smooth animations. All content is in German.

## Tech Stack
- **Frontend**: React with TypeScript, Vite, TailwindCSS, Framer Motion
- **Backend**: Express.js with TypeScript
- **UI Components**: shadcn/ui components
- **Data Fetching**: TanStack Query
- **Routing**: wouter
- **Form Handling**: react-hook-form with Zod validation
- **Storage**: In-memory storage (MemStorage)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui base components
│   │   ├── navigation.tsx         # Glass-effect fixed header
│   │   ├── hero-section.tsx       # "Intelligenz neu gedacht" + mockups
│   │   ├── features-section.tsx   # 4 feature cards
│   │   ├── integrations-section.tsx # Scrolling logo marquee
│   │   ├── services-section.tsx   # KI-Produkte section
│   │   ├── about-section.tsx      # KI-Partner section + benefits
│   │   ├── industries-section.tsx # 10 industry use-case cards
│   │   ├── contact-section.tsx    # 2-column: form + info box
│   │   ├── footer.tsx             # Dark footer with cookie link
│   │   ├── chatbot-button.tsx     # Floating chat placeholder
│   │   └── cookie-banner.tsx      # GDPR cookie consent
│   ├── pages/
│   │   ├── home.tsx               # Main landing page
│   │   └── not-found.tsx          # 404 page
│   ├── hooks/                     # Custom hooks
│   ├── lib/                       # Utilities
│   ├── App.tsx                    # App entry point
│   └── index.css                  # Tailwind + dark theme utilities
server/
├── routes.ts                      # API endpoints
├── storage.ts                     # In-memory data storage
└── index.ts                       # Server entry point
shared/
└── schema.ts                      # Zod schemas & TypeScript types
```

## Key Features
1. **Dark Theme Design**: Professional dark background with purple/indigo accents
2. **Hero Section**: "Intelligenz neu gedacht – mit IntelloMind" with smartphone mockups
3. **Sticky Phone Section**: Scroll-driven 2-column layout with 3D phone animation
   - 4 Steps: Splash → Login → Inbox → Dashboard
   - Smooth device rotation and screen transitions
   - Step indicators with progress dots
4. **Features Section**: 4 benefit cards with animated icons
5. **Integrations Marquee**: Scrolling logo row
6. **Products Section**: KI-Telefonassistent, KI-Chatbot, KI-Mailbot
7. **About Section**: "Dein KI-Partner fürs Wachstum" with 4 benefits
8. **Industries Section**: 10 industry use-case cards
9. **Contact Section**: 2-column layout (form + info box with clickable links)
10. **Cookie Banner**: GDPR-compliant with banner + settings modal
11. **Chatbot Placeholder**: Floating button bottom-right

## API Endpoints
- `POST /api/contact` - Submit contact form inquiry
- `GET /api/contact` - Retrieve all contact submissions (admin)

## Design System
- **Primary Color**: Purple (#8B5CF6)
- **Secondary Color**: Indigo (#6366F1)
- **Background**: Dark blue-gray (#070A10)
- **Typography**: Inter (Google Fonts)
- **Border Radius**: 0.5rem default
- **Card Style**: Glass effect with subtle purple border glow

## Custom CSS Utilities
- `.gradient-text` - Purple to indigo gradient text
- `.glass-card` - Dark frosted glass effect
- `.glass-nav` - Navigation blur effect
- `.hover-float` - Card lift on hover with shadow
- `.hover-glow` - Button glow effect on hover
- `.glow-border` - Animated border glow on hover
- `.animate-scroll-left` - Infinite scroll animation for logos
- `.bg-gradient-orb-pink/.purple` - Decorative background orbs

## Cookie Consent
- GDPR-compliant banner with 3 buttons
- Settings modal with 4 toggle categories
- 12-month LocalStorage persistence
- Footer link to reopen settings

## Contact Info
- Email: info@intellomind.ai
- Phone: +49 176 70599 319
- Address: Hüingser Ring 1, 58710 Menden

## Recent Changes
- 2024-12-30: Sticky Phone Section hinzugefügt
  - Scroll-driven 2-Spalten Layout (Text links, Sticky Phone rechts)
  - 4 Steps mit Screen-Wechsel (Splash, Login, Inbox, Dashboard)
  - 3D Device Motion mit Framer Motion (rotateY, rotateZ, translate, scale)
  - Smooth Crossfade zwischen Screens
  - Responsive: Mobile zeigt Phone oben, Steps wechseln beim Scrollen
  - IntelloMind Branding in allen Screens

- 2024-12-30: Complete redesign to match intellomind.ai style
  - Updated color scheme to purple/indigo gradients
  - New hero text "Intelligenz neu gedacht – mit IntelloMind"
  - Added smartphone mockups to hero section
  - New products section (KI-Telefonassistent, KI-Chatbot, KI-Mailbot)
  - New about section "Dein KI-Partner fürs Wachstum"
  - GDPR-compliant cookie banner + settings modal
  - 2-column contact section with info box
  - Footer updated to © 2026, social icons removed
  - Cookie-Einstellungen link in footer

## Development
The app runs on port 5000 with `npm run dev`. The Express server serves both the API and the Vite-built frontend.
