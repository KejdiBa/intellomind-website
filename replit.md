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
- 2026-04-04: SEO-Produktseiten + Meta-Tags
  - Neue Seiten: /ki-telefonassistent, /ki-chatbot, /ki-mailbot
  - Jede Seite: Hero, "Was ist es?", 6 Feature-Cards, Anwendungsfälle, FAQ (accordion), CTA, Querlinks zu anderen Produkten
  - useMetaTags-Hook (client/src/hooks/use-meta-tags.ts): setzt document.title, meta description und OG-Tags dynamisch
  - Meta-Tags für alle Seiten: /, /preise, /ki-*, /impressum, /datenschutz, /datenschutz-webapp, /agb, /leistungsbeschreibung
  - services-section.tsx: "Mehr erfahren"-Buttons linken jetzt auf Produktseiten (wouter Link)
  - App.tsx: 3 neue Routen registriert

- 2026-04-04: Preise-Seite hinzugefügt (/preise)
  - Neue Route /preise mit vollständiger Preisübersicht für alle 3 KI-Produkte
  - 3 Produkt-Tabs: KI-Telefonassistent, KI-Chatassistent, KI-Mailassistent
  - Monatlich/Jährlich Toggle mit -15% Rabatt (Preise passen sich dynamisch an)
  - TelefonCards: Solo (99€/85€), Team (299€/255€), Business (Individuell)
  - ChatCards + MailCards: Starter/Pro/Enterprise mit Transaktions-Tabellen
  - Full-Service Paket Sektion (4 Checkmarks, "Beratung vereinbaren" → /#contact)
  - FAQ 2×2 Grid (4 Fragen)
  - Dynamischer Kostenersparnis-Rechner "Wie viel sparen Sie?" mit Slidern:
    - KI-Telefonassistent: Anrufe/Tag, Gesprächsdauer, Nachbearbeitungszeit, Mitarbeiterkosten
    - KI-Chatassistent: Chats/Tag, Bearbeitungszeit, Mitarbeiterkosten
    - KI-Mailassistent: E-Mails/Tag, Bearbeitungszeit, Mitarbeiterkosten
    - Live-Berechnung: Personalkosten, KI-Kosten, Monatliche Ersparnis, Jährliche Ersparnis
  - Navigation: "Preise" zwischen "Leistungen" und "Über uns"
  - Footer: "Preise" unter "Unternehmen" nach "Über uns"


- 2026-03-29: Leistungsbeschreibung-Seite hinzugefügt
  - Neue Route /leistungsbeschreibung mit vollständiger Leistungsbeschreibung (Stand: 06.03.2026, 10 Abschnitte)
  - Identisches Design wie andere Rechtstexte: glass-cards, cyan→blue→purple Gradientenüberschriften, AnimatedBackground, Navigation (isSubPage), Footer, CookieBanner
  - Alle 10 Abschnitte: Gegenstand der Leistungen (KI-Chatbots, KI-E-Mail-Assistenten, Konfiguration über Systemprompts), Telefonassistenten/Fonio AI, Individuelle Projektleistungen, Technische Bereitstellung, Verfügbarkeit, Datensicherheit/Hosting, Support/Onboarding, Leistungsgrenzen/Haftung, Mitwirkungspflichten, Weiterentwicklung
  - Unterüberschriften als <h3>, Bullet-Listen als <ul><li>, E-Mail als mailto:-Link
  - Footer um "Leistungsbeschreibung" Link (/leistungsbeschreibung) ergänzt (nach "Datenschutz Webapp")
  - App.tsx mit /leistungsbeschreibung Route registriert

- 2026-03-29: Datenschutz-Webapp-Seite hinzugefügt
  - Neue Route /datenschutz-webapp mit vollständiger Datenschutzerklärung für https://app.intellomind.ai (11 Abschnitte)
  - Identisches Design wie Impressum und Datenschutz Website: glass-cards, cyan→blue→purple Gradientenüberschriften
  - Webapp-spezifische Inhalte: B2B-SaaS-Plattform-Absatz (2.), Registrierung/Nutzerkonto (5.2.1/5.2.2), Kommunikations-Services mit KI-Dienste (6.3), Payment Abwicklung/Stripe (11.)
  - AnimatedBackground, Navigation (isSubPage), Footer, CookieBanner
  - Footer um "Datenschutz Webapp" Link (/datenschutz-webapp) ergänzt (nach "Datenschutz Website")
  - App.tsx mit /datenschutz-webapp Route registriert

- 2026-03-29: Datenschutz-Seite hinzugefügt
  - Neue Route /datenschutz mit vollständiger Datenschutzerklärung (10 Abschnitte)
  - Identisches Design wie Impressum: glass-cards, cyan→blue→purple Gradientenüberschriften
  - Alle 10 Abschnitte: Allgemeines, Datenverarbeitung (2.1-2.9), Betroffenenrechte (3.1-3.11), Cookies (4.1-4.4), Services, Kommunikation (6.1-6.6), Hosting (7.1-7.3), Tracking, Mailings, Social Media
  - Klickbare E-Mail (mailto:) und Telefon (tel:) Links
  - AnimatedBackground, Navigation (isSubPage), Footer, CookieBanner
  - Footer um "Datenschutz Website" Link (/datenschutz) ergänzt (vor Impressum)
  - App.tsx mit /datenschutz Route registriert

- 2026-03-29: Impressum-Seite hinzugefügt
  - Neue Route /impressum mit vollständigem Impressum-Text (aus Pflichtangaben gemäß § 5 DDG)
  - Styled mit glass-cards, gradient headings (cyan→blue→purple), passend zum Website-Design
  - Navigation-Komponente um isSubPage-Prop erweitert (Links navigieren zu /#section statt smooth-scroll)
  - Footer-Impressum-Link auf /impressum geändert (wouter Link-Komponente)
  - client/public/.htaccess mit SPA-Rewrite-Regel für IONOS Static Hosting hinzugefügt
  - E-Mail und Telefon als klickbare Links (mailto: / tel:)
  - Zurück-zur-Startseite-Link am Seitenanfang

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
