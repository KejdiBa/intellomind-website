# IntelloMind AI Consulting Website

## Overview
A modern, professional website for IntelloMind, an AI consulting company. The site features a compelling homepage with services overview, detailed AI capabilities section, about/team section, and a contact form for customer inquiries.

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
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui base components
│   │   ├── navigation.tsx # Fixed header with nav links
│   │   ├── hero-section.tsx # Hero with stats
│   │   ├── services-section.tsx # 6 service cards
│   │   ├── about-section.tsx # Company values & team
│   │   ├── contact-section.tsx # Contact form
│   │   ├── footer.tsx     # Footer with links
│   │   ├── theme-provider.tsx # Dark/light mode
│   │   └── theme-toggle.tsx # Theme toggle button
│   ├── pages/
│   │   ├── home.tsx       # Main landing page
│   │   └── not-found.tsx  # 404 page
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   ├── App.tsx            # App entry point
│   └── index.css          # Tailwind + custom styles
server/
├── routes.ts              # API endpoints
├── storage.ts             # In-memory data storage
└── index.ts               # Server entry point
shared/
└── schema.ts              # Zod schemas & TypeScript types
```

## Key Features
1. **Responsive Navigation**: Fixed header with blur effect on scroll, mobile hamburger menu
2. **Hero Section**: Large gradient background with animated elements, company stats
3. **Services Section**: 6 AI service cards with icons and descriptions
4. **About Section**: Company values grid and leadership team
5. **Contact Form**: Validated form with API integration
6. **Footer**: Multi-column layout with newsletter signup
7. **Dark/Light Mode**: Theme toggle with localStorage persistence

## API Endpoints
- `POST /api/contact` - Submit contact form inquiry
- `GET /api/contact` - Retrieve all contact submissions (admin)

## Design System
- **Primary Color**: Indigo (#6366F1)
- **Accent Color**: Tech Green (#10B981)
- **Background**: Navy (#0A0E27) for hero and footer
- **Typography**: Inter (body), Space Grotesk (mono/display)
- **Spacing**: 24px base grid, rounded corners (12px)

## Recent Changes
- 2024-12-29: Initial implementation of full landing page
  - Created all main sections (Hero, Services, About, Contact, Footer)
  - Implemented dark/light mode theme support
  - Added contact form with validation
  - Set up responsive navigation

## Development
The app runs on port 5000 with `npm run dev`. The Express server serves both the API and the Vite-built frontend.
