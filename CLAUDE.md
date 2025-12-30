# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro portfolio website using React islands for interactive components. The architecture combines Astro's server-side rendering with React's client-side interactivity for an optimized, animated portfolio experience.

**Key Tech Stack:**
- **Astro 5.16** - Main framework with island architecture
- **React 19.2** - Client-side interactive components
- **Motion 12** (Framer Motion) - Animation library
- **Tailwind CSS v4** - Styling with Vite plugin
- **Aceternity UI** - Pre-built animated components
- **Tabler Icons** - Icon library

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI
npm run astro [command]
```

## Architecture Patterns

### Island Architecture (React + Astro)

This project uses Astro's island architecture pattern. Static content is server-rendered by Astro, while interactive components are client-side React components loaded only where needed.

**Critical Rule:** JSX/React code (including React elements like icons) cannot be used in Astro `.astro` frontmatter (the section between `---`). All React components with JSX must be in `.tsx` files.

**Example of WRONG pattern:**
```astro
---
// This will FAIL - JSX in Astro frontmatter
const icon = <IconHome className="..." />
---
```

**Example of CORRECT pattern:**
```tsx
// src/config/navigation.tsx - Separate .tsx file
import { IconHome } from "@tabler/icons-react";

export const navigationItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full" />,
    href: "/",
  },
];
```

Then import in Astro:
```astro
---
import { navigationItems } from "../config/navigation";
import { FloatingDockWrapper } from "../components/floating-dock-wrapper";
---

<FloatingDockWrapper client:load />
```

### Component Loading Directives

Use Astro client directives to control when React components hydrate:

- `client:load` - Load immediately when page loads (for above-fold content)
- `client:idle` - Load after page becomes idle
- `client:visible` - Load when component enters viewport
- `client:media={query}` - Load when media query matches

**Common usage:**
```astro
<!-- Hero section - immediate load -->
<Hero client:load />

<!-- Navigation - always visible -->
<FloatingDockWrapper client:load />

<!-- Below-fold components - lazy load -->
<Projects client:visible />
```

### Navigation Architecture

The floating dock navigation spans multiple components:

1. **`floating-dock-wrapper.tsx`** - Main wrapper that exports `navigationItems` (with JSX icons) and `FloatingDockWrapper` component
2. **`ui/floating-dock-navbar.tsx`** - Core dock component with desktop/mobile variants, scroll-based show/hide
3. **`Layout.astro`** - Imports and renders `<FloatingDockWrapper client:load />` in layout

**Navigation items are centralized in `floating-dock-wrapper.tsx`** because they contain JSX icons that can't be defined in Astro files.

### React Component Structure

All interactive components follow this pattern:

```tsx
"use client";  // Required for client-side interactivity
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  // ... other props
}

export const Component = ({ className, ...props }: ComponentProps) => {
  // React hooks (useState, useEffect, etc.)
  const [state, setState] = useState(initialValue);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("base-classes", className)}
    >
      {/* Component content */}
    </motion.div>
  );
};
```

### Animation Patterns (Motion 12)

This project uses `motion/react` (Motion 12) for animations:

**Stagger animations:**
```tsx
import { stagger } from "motion/react";

animate(
  "span",
  { opacity: 1 },
  { delay: stagger(0.2) }
);
```

**Mouse tracking effects:**
```tsx
let mouseX = useMotionValue(Infinity);

<motion.div
  onMouseMove={(e) => mouseX.set(e.pageX)}
  onMouseLeave={() => mouseX.set(Infinity)}
>
```

**Spring physics for smooth interactions:**
```tsx
let width = useSpring(widthTransform, {
  mass: 0.1,
  stiffness: 150,
  damping: 12,
});
```

**Scroll-based show/hide:**
```tsx
const { scrollYProgress } = useScroll();

useMotionValueEvent(scrollYProgress, "change", (current) => {
  const direction = current - scrollYProgress.getPrevious();
  if (direction < 0) setVisible(true);  // Scrolling up
  else setVisible(false);  // Scrolling down
});
```

### Styling System

**Tailwind v4 with CSS Variables:**
- Colors use CSS custom properties for theming
- Dark mode via `.dark` class
- Utility function `cn()` combines clsx + tailwind-merge

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)} />
```

**Container component for responsive layouts:**
```astro
<Container>
  <YourContent />
</Container>
```
Provides responsive max-widths and padding for all screen sizes.

### Aceternity UI Components

Located in `src/components/ui/`, these are pre-built animated components:

- **Text effects:** `text-generate-effect.tsx`, `typewriter-effect.tsx`
- **Layout:** `bento-grid.tsx`, `timeline.tsx`, `carousel.tsx`
- **Cards:** `card-hover-effect.tsx`, `direction-aware-hover.tsx`, `wobble-card.tsx`
- **Navigation:** `floating-dock.tsx`, `floating-dock-navbar.tsx`
- **Specialty:** `animated-testimonials.tsx`, `apple-cards-carousel.tsx`

All use `"use client"` directive and require client hydration in Astro.

### Path Aliases

Configured in `tsconfig.json`:
- `@/*` maps to `./src/*`
- Use for imports: `import { Component } from "@/components/..."`

### Type Safety

- TypeScript strict mode enabled
- `components.json` configures shadcn/ui registry (Aceternity)
- React types: `@types/react`, `@types/react-dom`

## Key Files

- **`astro.config.mjs`** - Astro configuration (React integration, Tailwind plugin)
- **`components.json`** - Component library configuration
- **`src/layouts/Layout.astro`** - Main layout wrapper
- **`src/components/floating-dock-wrapper.tsx`** - Navigation config + wrapper
- **`src/lib/utils.ts`** - Utility functions (`cn()` helper)
