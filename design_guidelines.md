# Design Guidelines: AI Consulting Website

## Design Approach
**Reference-Based: AI Industry Leaders**
Drawing inspiration from OpenAI, Anthropic, and DeepMind's corporate websites - characterized by clean, trustworthy presentations with excellent UX. This approach balances technical sophistication with approachability.

## Color System
- **Primary**: #0A0E27 (Deep Navy) - Headers, navigation, key sections
- **Secondary**: #6366F1 (Modern Indigo) - Interactive elements, accents
- **Accent**: #10B981 (Tech Green) - CTAs, highlights, success states
- **Background**: #FFFFFF (White) - Main backgrounds
- **Light Background**: #F8FAFC (Soft Grey) - Alternating sections
- **Text**: #1E293B (Slate) - Body text, content

**Gradient Applications**: Subtle gradients using Primary→Secondary or Secondary→Accent for hero backgrounds, card highlights, and section dividers.

## Typography
- **Primary Font**: Inter (body text, UI elements)
- **Secondary Font**: Plus Jakarta Sans (headings, emphasis)
- **Accent Font**: Space Grotto (hero headlines, bold statements)

**Hierarchy**:
- Hero Headline: 56-72px (Space Grotto, bold)
- Section Headers: 36-48px (Plus Jakarta Sans, semibold)
- Subsection Headers: 24-32px (Plus Jakarta Sans, medium)
- Body Text: 16-18px (Inter, regular)
- Small Text: 14px (Inter, regular)

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24 (p-4, p-6, p-8, p-12, p-16, p-24)
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12
- Content max-width: max-w-7xl
- Text content: max-w-4xl
- Grid system: 24px base grid with responsive breakpoints

## Component Library

**Navigation**
- Fixed header with logo left, menu center/right
- Transparent background with blur on scroll
- Mobile: Hamburger menu with slide-in panel

**Hero Section**
- Large immersive hero (80vh) with professional AI-themed imagery
- Headline + subheadline + dual CTAs (primary + secondary)
- Gradient overlay for text readability
- Buttons with blurred backgrounds when on images

**Services/Solutions Cards**
- 3-column grid (desktop), stacked (mobile)
- Icon + title + description + "Learn More" link
- Subtle hover lift effect (shadow increase)
- 12px rounded corners

**About Section**
- Team grid with photos, names, titles
- Company stats (clients, projects, years) in 4-column layout
- Mission statement with supporting imagery

**Contact Form**
- Left: Form fields (name, email, company, message)
- Right: Contact info + office hours + response time
- Submit button uses Accent color

**Footer**
- Multi-column layout: Company info, Services, Resources, Contact
- Social links, copyright, privacy/terms
- Newsletter signup integrated

## Visual Elements
- **Shadows**: Subtle (shadow-sm, shadow-md) for cards and elevated elements
- **Corners**: 12px radius standard (rounded-xl)
- **Animations**: Minimal - fade-in on scroll, subtle hover states only
- **Borders**: 1px solid with opacity for dividers

## Images
**Hero Image**: Large, professional photograph or abstract visualization representing AI/technology - neural networks, data visualization, or futuristic workspace. Full-width, gradient overlay for text contrast.

**Services Section**: Icon-based (no large images), use modern line icons from Heroicons

**About Section**: Team headshots (professional, consistent style), office environment photo (optional enhancement)

**Throughout**: AI-themed abstract graphics sparingly - geometric patterns, data visualizations, tech imagery

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Multi-column layouts collapse to single column on mobile
- Font sizes scale down 20-30% on mobile
- Hero height: 60vh mobile, 80vh desktop

## Key Differentiators
- Modern gradient accents throughout (not flat colors)
- Generous white space (don't cram content)
- Professional, trustworthy aesthetic (vs flashy/gimmicky)
- Clear information hierarchy
- Strategic use of the tech green accent for important actions
- Clean, readable typography with strong contrast