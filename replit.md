# IntelloMind AI Consulting Website

## Overview
A modern, dark-themed website for IntelloMind, an AI consulting company. Inspired by the makeit-ai.de design with a bold dark aesthetic, pink/magenta accents, and dynamic hover effects. All content is in German.

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
│   │   ├── hero-section.tsx       # Gradient text hero with orbs
│   │   ├── features-section.tsx   # 4 feature cards (24/7, costs, revenue, scale)
│   │   ├── integrations-section.tsx # Scrolling logo marquee
│   │   ├── services-section.tsx   # "Was ist IntelloMind" - 3 service cards
│   │   ├── about-section.tsx      # Benefits grid
│   │   ├── industries-section.tsx # 10 industry use-case cards
│   │   ├── contact-section.tsx    # Contact form with CTA
│   │   ├── footer.tsx             # Dark footer
│   │   └── chatbot-button.tsx     # Floating chat placeholder
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
1. **Dark Theme Design**: Black background with pink/magenta gradient accents
2. **Hero Section**: Large gradient text "Hol dir KI-Power!" with floating orb effects
3. **Features Section**: 4 cards (24/7, Kosten senken, Umsatz steigern, Skalieren)
4. **Integrations Marquee**: Scrolling logo row (WhatsApp, OpenAI, Instagram, etc.)
5. **Services Section**: 3 main offerings (Anrufassistent, Terminbuchung, Chat-Automatisierung)
6. **Industries Section**: 10 industry use-case cards
7. **Contact Form**: Functional form with API integration, dark glass design
8. **Chatbot Placeholder**: Floating button bottom-right with pulse animation
9. **Hover Effects**: hover-float, hover-glow, glow-border throughout

## API Endpoints
- `POST /api/contact` - Submit contact form inquiry
- `GET /api/contact` - Retrieve all contact submissions (admin)

## Design System
- **Primary Color**: Pink/Magenta (#FF3067)
- **Secondary Color**: Purple (#9B30FF)
- **Background**: Pure Black (#000000)
- **Typography**: Urbanist (Google Fonts)
- **Border Radius**: 1rem default
- **Card Style**: Glass effect with subtle pink border glow

## Custom CSS Utilities
- `.gradient-text` - Pink to purple gradient text
- `.glass-card` - Dark frosted glass effect
- `.glass-nav` - Navigation blur effect
- `.hover-float` - Card lift on hover with shadow
- `.hover-glow` - Button glow effect on hover
- `.glow-border` - Animated border glow on hover
- `.animate-scroll-left` - Infinite scroll animation for logos
- `.bg-gradient-orb-pink/.purple` - Decorative background orbs

## Recent Changes
- 2024-12-30: Complete redesign to match makeit-ai.de style
  - Switched to always-dark theme with pink/magenta accents
  - Added Urbanist font from Google Fonts
  - Created new sections: Features, Integrations, Industries
  - Redesigned all existing sections with glass-card effects
  - Added floating chatbot placeholder
  - Implemented hover effects throughout
  - All branding changed to IntelloMind

## Development
The app runs on port 5000 with `npm run dev`. The Express server serves both the API and the Vite-built frontend.
