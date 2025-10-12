# Roze Fitness - Next.js

A modern, high-performance fitness website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Modular React Components** following BEM-inspired patterns
- **Custom Fonts** (Pano Bold Trial)
- **Image Optimization** with Next.js Image
- **Responsive Design** mobile-first approach
- **Hot Module Replacement** for fast development

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## 🎨 Component Architecture

All components follow a **modular, reusable pattern** with proper separation of concerns:

### Button System (BEM-inspired)

```tsx
// Base button - minimal defaults
<a className="btn">Button</a>

// Color modifiers
<a className="btn btn--primary">Primary</a>
<a className="btn btn--outline">Outline</a>

// Size modifiers
<a className="btn btn--hero">Hero CTA</a>

// Combining modifiers (modular!)
<a className="btn btn--primary btn--hero">Large Primary</a>
```

### Key Components

- **Header** - Sticky navigation with responsive menu
- **Hero** - Full-screen hero with animated chevrons
- **ProgramSection** - Reusable program display with media panel
- **AboutSection** - About content with gradient overlay
- **PillarsSection** - Core pillars display
- **ResultsSection** - Testimonials grid
- **AppSection** - Mobile app promotion
- **Footer** - Site footer with copyright

## 🎯 Design Guidelines

### Typography

- **Headings**: Pano Bold Trial (custom font)
- **Body**: Montserrat
- **Hero Headlines**: 52px fixed
- **Section Titles**: Responsive with `clamp()`

### Colors

- **Primary/Accent**: `#E8FF3B` (lime green)
- **Dark Background**: `#2b3436`
- **Light Background**: `#fcfdfd`
- **Muted Text**: `#6a7679`

### Button Sizing

- **Base**: `12px 24px` padding
- **Hero CTA**: `14px 48px` padding (using `btn--hero` modifier)

## 📁 Project Structure

```
roze-fitness/
├── app/
│   ├── globals.css      # Global styles + custom button classes
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProgramSection.tsx
│   ├── AboutSection.tsx
│   ├── PillarsSection.tsx
│   ├── ResultsSection.tsx
│   ├── AppSection.tsx
│   └── Footer.tsx
├── public/
│   └── fonts/          # Custom Pano Trial fonts
├── .cursor/
│   └── rules/          # Cursor AI coding guidelines
│       ├── typography.mdc
│       └── modular-components.mdc
└── tailwind.config.ts  # Tailwind + custom animations
```

## 🔧 Modular Component Philosophy

This project follows strict **modular component guidelines**:

1. ✅ Base classes have minimal, generic defaults
2. ✅ Modifiers adjust specific variants (color, size, state)
3. ✅ No style conflicts between base and modifiers
4. ✅ Components can be composed with multiple modifiers
5. ✅ Single responsibility principle for each class

See `.cursor/rules/modular-components.mdc` for detailed guidelines.

## 🌐 Deployment

This site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
vercel
```

## 📝 Migration Notes

This project was migrated from a static HTML/CSS site to Next.js to:

- Improve component modularity and reusability
- Fix CSS specificity issues with proper base + modifier patterns
- Enable hot reload without browser caching issues
- Add TypeScript for better DX and fewer bugs
- Leverage Next.js Image for automatic optimization
- Set up proper build pipeline for production

## 🤝 Contributing

1. Follow the modular component guidelines in `.cursor/rules/`
2. Use BEM-inspired naming for CSS classes
3. Keep components small and focused
4. Test button modifiers work correctly together

## 📄 License

© 2025 Roze Fitness. All rights reserved.
