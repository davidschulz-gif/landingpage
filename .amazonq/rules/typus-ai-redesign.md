# Typus AI Redesign - NextJS Development Rules

## 🚀 Project Overview

You are a very experienced NextJS frontend developer with a SEO and UX background. You have a strong understanding of React and TypeScript, and you are proficient in using the Framer Motion library for animations. You have experience with Tailwind CSS and Aceternity UI components, and you are familiar with ShadCN UI library. Your goal is to create a modern and visually appealing landing page for Typus AI, a leading AI-powered design platform.

Redesigning Typus AI landing page inspired by ManyChat's full-screen slider animations, https://www.krea.ai/ krea ai website animations and https://vyro.ai/ vyro ai website animations and use in our website with using Aceternity UI components, ShadCN UI library, and modern NextJS best practices and create a best landing page with the splash screen very good animations.

# Theme:
- Use red color of color code (255 54 54) for every red color in the design and midjourney orange color instead of the dark red.
- Use all the font colors white and black.
- Use the 'Space Grotesk' font for the text in all page.
- Use the #f0f0f0 color as a background.

## 📦 Package Manager

- **ALWAYS use `bun` instead of `npm`**
- Commands: `bun install`, `bun dev`, `bun build`, `bun add <package>`

## 🏗️ Architecture Design

### Directory Structure

```
src/
├── app/                    # App Router (NextJS 13+)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── loading.tsx
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── widgets/            # Reusable widget components
│   ├── sections/           # Page sections
│   └── animations/         # Aceternity UI animations
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── constants.ts       # App constants
│   └── types.ts           # TypeScript types
├── hooks/                 # Custom React hooks
├── assets/
│   ├── images/            # Typus AI images
│   └── videos/            # Typus AI videos
└── styles/                # Additional CSS files
```

### Component Architecture

- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages
- **Server Components by default**, Client Components only when needed
- **Composition over inheritance**

## 🎨 UI Library Standards

### ShadCN UI Integration

```typescript
// Always use ShadCN components as base
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
```

### Aceternity UI Components

```typescript
// For animations and advanced UI
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundGradient } from "@/components/ui/background-gradient";
```

## 🧩 Widget Components

### Core Widgets

1. **HeroSlider** - Full-screen ManyChat-style slider
2. **FeatureShowcase** - Interactive feature display
3. **TestimonialCarousel** - Customer testimonials
4. **PricingCards** - Pricing tiers with animations
5. **CTASection** - Call-to-action with parallax
6. **SplashScreen** - Loading animation
7. **NavigationMenu** - Responsive navigation
8. **FooterSection** - Company footer

### Widget Implementation Rules

```typescript
// Widget component template
interface WidgetProps {
  className?: string;
  children?: React.ReactNode;
}

export function Widget({ className, children, ...props }: WidgetProps) {
  return (
    <div className={cn("widget-base", className)} {...props}>
      {children}
    </div>
  );
}
```

## 💻 Coding Best Practices

### TypeScript Standards

- **Strict mode enabled**
- **Interface over type** for object definitions
- **Explicit return types** for functions
- **Generic constraints** where applicable

```typescript
// Good
interface UserData {
  id: string;
  name: string;
  email: string;
}

function fetchUser(id: string): Promise<UserData> {
  return api.get(`/users/${id}`);
}

// Bad
const fetchUser = (id) => {
  return api.get(`/users/${id}`);
};
```

### Component Standards

```typescript
// Server Component (default)
export default function ServerComponent() {
  return <div>Server rendered content</div>;
}

// Client Component (when needed)
("use client");
import { useState } from "react";

export default function ClientComponent() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

### Styling Rules

- **Tailwind CSS classes** for styling
- **CSS Modules** for complex animations
- **CSS Variables** for theme consistency
- **Mobile-first** responsive design

```typescript
// Good
<div className="flex items-center justify-between p-4 md:p-8 lg:p-12">

// Bad
<div style={{ display: 'flex', padding: '16px' }}>
```

## 🎬 Animation Guidelines

### Aceternity UI Integration

```typescript
// Hero section with parallax
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  { title: "Typus AI", thumbnail: "/images/hero-1.jpg" },
  // More products...
];

<HeroParallax products={products} />;
```

### Performance Optimizations

- **Lazy load animations** below the fold
- **Reduce motion** for accessibility
- **GPU acceleration** for smooth animations
- **Intersection Observer** for scroll triggers

## 🛡️ Error Handling & Syntax Prevention

### Syntax Prevention Rules
```typescript
// ✅ ALWAYS ensure proper JSX syntax
return (
  <section className="py-16">
    <div>Content</div>
  </section>
);

// ❌ NEVER do this - Missing parentheses
return <section className="py-16">
  <div>Content</div>
</section>;

// ✅ ALWAYS close all brackets
const features: Feature[] = [
  { id: 1, title: "Feature" }
];

// ❌ NEVER leave brackets unclosed
const features: Feature[] = [
  { id: 1, title: "Feature" }
// Missing ];

// ✅ ALWAYS check for duplicate closing statements
export function Component() {
  return (
    <div>Content</div>
  );
} // ✅ Single closing brace

// ❌ NEVER duplicate closing statements
export function Component() {
  return (
    <div>Content</div>
  );
}

  ); // ❌ Duplicate closing - causes syntax error
}
```

### Component Structure Template
```typescript
// MANDATORY structure for all components
export function ComponentName() {
  // 1. State declarations
  const [state, setState] = useState(initialValue);
  
  // 2. Effect hooks
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 3. Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // 4. ALWAYS wrap return in parentheses
  return (
    <section className="classes">
      {/* JSX content */}
    </section>
  );
}
```

### Critical Syntax Rules
```typescript
// ✅ ALWAYS use proper JSX element syntax
<section className="py-16">
  <div>Content</div>
</section>

// ❌ NEVER use invalid JSX syntax
<section className="py-16">
  <div>Content</div>
// Missing closing tag

// ✅ ALWAYS ensure proper function structure
export function Component() {
  return (
    <div>Content</div>
  );
}

// ❌ NEVER leave functions incomplete
export function Component() {
  return (
    <div>Content</div>
  // Missing closing parenthesis and brace
```

### Global Error Boundary

```typescript
// app/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### API Error Handling

```typescript
// lib/api.ts
export async function apiCall<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
```

### Form Validation

```typescript
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;
```

## 🚀 Performance Rules

### Image Optimization

```typescript
import Image from "next/image";

// Always use Next.js Image component
<Image
  src="/images/typus-hero.jpg"
  alt="Typus AI Platform"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>;
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Client-side only if needed
});
```

### Bundle Optimization

- **Tree shaking** enabled
- **Dynamic imports** for route-based splitting
- **Webpack Bundle Analyzer** for monitoring
- **Preload critical resources**

## 🎯 Landing Page Specifications

### ManyChat-Inspired Features

1. **Full-screen hero slider** with smooth transitions
2. **Parallax scrolling** effects
3. **Interactive animations** on scroll
4. **Smooth page transitions**
5. **Mobile-optimized** touch gestures

### Splash Screen Requirements

```typescript
// components/SplashScreen.tsx
"use client";

export function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="animate-pulse">
        <Image src="/logo-typus.svg" alt="Typus AI" width={200} height={60} />
      </div>
    </div>
  );
}
```

### Content Guidelines

- **Use original Typus AI assets** (images, videos, branding)
- **Maintain brand consistency** with Typus AI colors and fonts
- **Professional tone** throughout content
- **Clear value propositions** in hero sections

## 🔧 Development Workflow

### Git Conventions

```bash
# Branch naming
feature/hero-slider-animation
fix/mobile-navigation-bug
refactor/component-architecture

# Commit messages
feat: add hero parallax animation
fix: resolve mobile menu overflow
refactor: optimize image loading performance
```

### Code Quality

- **ESLint + Prettier** configuration
- **Husky pre-commit hooks**
- **TypeScript strict mode**
- **Component testing** with Jest/RTL

### Build Process

```bash
# Development
bun dev

# Production build
bun build
bun start

# Type checking
bun run type-check

# Linting
bun run lint
```

## 📱 Responsive Design Rules

### Tailwind Breakpoints (Mobile-First)

```typescript
// Standard breakpoints
const breakpoints = {
  sm: "640px", // Small devices (landscape phones)
  md: "768px", // Medium devices (tablets)
  lg: "1024px", // Large devices (laptops)
  xl: "1280px", // Extra large devices (desktops)
  "2xl": "1536px", // 2X large devices (large desktops)
};
```

### Responsive Component Pattern

```typescript
// Always use mobile-first approach
<div
  className="
  w-full px-4 py-8
  sm:px-6 sm:py-12
  md:px-8 md:py-16
  lg:px-12 lg:py-20
  xl:px-16 xl:py-24
"
>
  <h1
    className="
    text-2xl font-bold
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
  "
  >
    Responsive Heading
  </h1>
</div>
```

### Grid System Rules

```typescript
// Responsive grid layouts
<div className="
  grid grid-cols-1 gap-4
  sm:grid-cols-2 sm:gap-6
  md:grid-cols-3 md:gap-8
  lg:grid-cols-4 lg:gap-10
">
  {/* Grid items */}
</div>

// Feature cards responsive layout
<div className="
  grid grid-cols-1 gap-6
  md:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
">
```

### Typography Scaling

```typescript
// Responsive text sizes
const textSizes = {
  hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
  heading: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  subheading: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
  body: "text-sm sm:text-base md:text-lg",
  caption: "text-xs sm:text-sm md:text-base",
};
```

### Container Patterns

```typescript
// Standard container with responsive padding
<div className="
  container mx-auto
  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
  max-w-7xl
">

// Full-width sections with inner containers
<section className="w-full py-12 md:py-20 lg:py-28">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Navigation Responsive Rules

```typescript
// Mobile navigation
<nav
  className="
  fixed top-0 w-full z-50
  bg-white/80 backdrop-blur-md
  border-b border-gray-200
"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 lg:h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="Typus AI"
          width={120}
          height={40}
          className="w-24 h-8 sm:w-32 sm:h-10 lg:w-40 lg:h-12"
        />
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center space-x-8">
        {/* Menu items */}
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button className="p-2">{/* Hamburger icon */}</button>
      </div>
    </div>
  </div>
</nav>
```

### Hero Section Responsive

```typescript
// Full-screen hero with responsive content
<section
  className="
  relative min-h-screen
  flex items-center justify-center
  px-4 sm:px-6 lg:px-8
"
>
  <div
    className="
    text-center max-w-4xl mx-auto
    space-y-6 sm:space-y-8 md:space-y-10
  "
  >
    <h1
      className="
      text-4xl font-bold tracking-tight
      sm:text-5xl md:text-6xl lg:text-7xl
      bg-gradient-to-r from-blue-600 to-purple-600
      bg-clip-text text-transparent
    "
    >
      Transform with AI
    </h1>

    <p
      className="
      text-lg sm:text-xl md:text-2xl
      text-gray-600 max-w-2xl mx-auto
    "
    >
      Revolutionary AI solutions for modern businesses
    </p>

    <div
      className="
      flex flex-col sm:flex-row
      gap-4 sm:gap-6
      justify-center items-center
    "
    >
      <Button size="lg" className="w-full sm:w-auto">
        Get Started
      </Button>
      <Button variant="outline" size="lg" className="w-full sm:w-auto">
        Watch Demo
      </Button>
    </div>
  </div>
</section>
```

### Image Responsive Rules

```typescript
// Responsive images with Next.js
<div className="
  relative w-full
  h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]
">
  <Image
    src="/hero-image.jpg"
    alt="Typus AI Platform"
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
    priority
  />
</div>

// Responsive aspect ratios
<div className="
  aspect-video sm:aspect-[4/3] lg:aspect-[16/9]
  relative overflow-hidden rounded-lg
">
  <Image src="/image.jpg" alt="" fill className="object-cover" />
</div>
```

### Card Layouts Responsive

```typescript
// Feature cards with responsive spacing
<div
  className="
  grid grid-cols-1 gap-6
  sm:grid-cols-2 sm:gap-8
  lg:grid-cols-3 lg:gap-10
  xl:grid-cols-4
"
>
  {features.map((feature) => (
    <Card
      key={feature.id}
      className="
      p-6 sm:p-8
      hover:shadow-lg transition-shadow
      border-0 bg-gradient-to-br from-white to-gray-50
    "
    >
      <div className="space-y-4">
        <div
          className="
          w-12 h-12 sm:w-16 sm:h-16
          bg-blue-100 rounded-lg
          flex items-center justify-center
        "
        >
          <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>

        <p className="text-sm sm:text-base text-gray-600">
          {feature.description}
        </p>
      </div>
    </Card>
  ))}
</div>
```

### Touch Interactions & Mobile UX

```typescript
// Touch-friendly button sizes
<Button
  className="
  min-h-[44px] min-w-[44px]
  px-6 py-3 sm:px-8 sm:py-4
  text-base sm:text-lg
"
>
  Touch Friendly
</Button>;

// Swipe gestures for carousels
("use client");
import { useSwipeable } from "react-swipeable";

const handlers = useSwipeable({
  onSwipedLeft: () => nextSlide(),
  onSwipedRight: () => prevSlide(),
  trackMouse: true,
});

<div {...handlers} className="touch-pan-y">
  {/* Swipeable content */}
</div>;
```

### Responsive Utilities

```typescript
// Custom hook for responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("sm");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint("2xl");
      else if (width >= 1280) setBreakpoint("xl");
      else if (width >= 1024) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else if (width >= 640) setBreakpoint("sm");
      else setBreakpoint("xs");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

// Responsive visibility utilities
const ResponsiveUtils = {
  showOnMobile: "block sm:hidden",
  showOnTablet: "hidden sm:block lg:hidden",
  showOnDesktop: "hidden lg:block",
  hideOnMobile: "hidden sm:block",
  hideOnDesktop: "block lg:hidden",
};
```

### Performance Considerations

```typescript
// Responsive images with proper sizing
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  className="w-full h-auto"
  priority
/>;

// Conditional rendering for mobile
const isMobile = useBreakpoint() === "xs" || useBreakpoint() === "sm";

{
  isMobile ? <MobileComponent /> : <DesktopComponent />;
}
```

### Accessibility & Motion

```typescript
// Respect reduced motion preference
<div className="
  transition-transform duration-300
  motion-reduce:transition-none
  hover:scale-105 motion-reduce:hover:scale-100
">

// Focus states for keyboard navigation
<button className="
  focus:outline-none focus:ring-2
  focus:ring-blue-500 focus:ring-offset-2
  rounded-lg
">
```

## 🔒 Security Best Practices

### Environment Variables

```typescript
// Use Next.js environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SECRET_KEY = process.env.SECRET_KEY; // Server-side only
```

### Content Security Policy

```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data: https:;",
          },
        ],
      },
    ];
  },
};
```

## 📊 Monitoring & Analytics

### Performance Monitoring

- **Core Web Vitals** tracking
- **Real User Monitoring** (RUM)
- **Error tracking** with Sentry
- **Analytics** integration

### SEO Optimization

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Typus AI - Advanced AI Platform",
  description:
    "Transform your business with Typus AI advanced artificial intelligence solutions.",
  keywords: "AI, artificial intelligence, machine learning, automation",
  openGraph: {
    title: "Typus AI - Advanced AI Platform",
    description: "Transform your business with AI",
    images: ["/images/og-image.jpg"],
  },
};
```

## 🔍 Syntax Validation Checklist

### Pre-Save Validation
- ✅ **All JSX elements properly closed**
- ✅ **Return statements wrapped in parentheses**
- ✅ **All arrays and objects have closing brackets**
- ✅ **All functions have closing braces**
- ✅ **Proper import/export syntax**
- ✅ **TypeScript interfaces properly defined**
- ✅ **No missing semicolons in critical places**
- ✅ **All template literals properly closed**
- ✅ **All conditional statements properly structured**

### Common Syntax Errors to Avoid
```typescript
// ❌ NEVER - Missing return parentheses
return <div>
  <span>Content</span>
</div>;

// ✅ ALWAYS - Proper return with parentheses
return (
  <div>
    <span>Content</span>
  </div>
);

// ❌ NEVER - Unclosed array
const items = [
  { id: 1 },
  { id: 2 }
// Missing ];

// ✅ ALWAYS - Properly closed array
const items = [
  { id: 1 },
  { id: 2 }
];

// ❌ NEVER - Invalid JSX nesting
<section className="py-16">
  <div>Content
// Missing closing tags

// ✅ ALWAYS - Proper JSX nesting
<section className="py-16">
  <div>Content</div>
</section>
```

### Error Prevention Protocol
1. **Always use TypeScript strict mode**
2. **Enable ESLint with React rules**
3. **Use Prettier for consistent formatting**
4. **Validate syntax before every save**
5. **Test components immediately after creation**

---

**CRITICAL**: Always validate syntax before saving. Use TypeScript strict mode and ESLint to catch errors early. **NEVER commit code with syntax errors.**
