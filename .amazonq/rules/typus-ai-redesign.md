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

### useEffect Dependency Array Rules
```typescript
// ✅ ALWAYS include ALL dependencies that are used inside useEffect
// ✅ ALWAYS ensure dependency arrays have CONSISTENT SIZE across renders
const Component = ({ src, shouldPlay, preload }) => {
  useEffect(() => {
    // Uses src, shouldPlay, preload
  }, [src, shouldPlay, preload]); // All dependencies included
};

// ❌ NEVER have inconsistent dependency array sizes
// This causes "useEffect changed size between renders" error
const BadComponent = ({ src, shouldPlay }) => {
  useEffect(() => {
    if (shouldPlay) {
      // Uses src when shouldPlay is true
    }
  }, shouldPlay ? [src] : []); // ❌ Array size changes!
};

// ✅ CORRECT: Always include all possible dependencies
const GoodComponent = ({ src, shouldPlay }) => {
  useEffect(() => {
    if (shouldPlay) {
      // Uses src when shouldPlay is true
    }
  }, [src, shouldPlay]); // ✅ Consistent array size
};
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
6. **CRITICAL: Always ensure useEffect dependency arrays have consistent size across renders**
7. **Include ALL dependencies used inside useEffect, even if conditionally used**

---

## 🏛️ World-Class Next.js Architecture Patterns

### Advanced Component Architecture

```typescript
// Component Layer Architecture
src/
├── components/
│   ├── atoms/              # Basic UI elements (Button, Input, Icon)
│   ├── molecules/          # Simple combinations (SearchBox, Card)
│   ├── organisms/          # Complex sections (Header, ProductList)
│   ├── templates/          # Page layouts
│   └── pages/              # Full page components
├── hooks/
│   ├── core/               # Essential hooks (useLocalStorage, useDebounce)
│   ├── api/                # Data fetching hooks
│   └── ui/                 # UI-specific hooks (useModal, useToast)
├── services/
│   ├── api/                # API layer
│   ├── auth/               # Authentication
│   └── analytics/          # Tracking services
├── stores/
│   ├── global/             # Global state management
│   └── features/           # Feature-specific stores
├── utils/
│   ├── helpers/            # Pure utility functions
│   ├── constants/          # App constants
│   └── validators/         # Validation schemas
└── types/
    ├── api/                # API response types
    ├── ui/                 # UI component types
    └── global/             # Global type definitions
```

### Advanced Patterns Implementation

```typescript
// Provider Pattern for Global State
interface AppContextType {
  theme: Theme;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook for Context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
```

### Component Composition Pattern

```typescript
// Compound Component Pattern
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  );
}

function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
}

function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
}

// Export as compound component
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };
```

### Higher-Order Components (HOC) for Reusability

```typescript
// HOC for loading states
function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent(props: P & { isLoading?: boolean }) {
    const { isLoading, ...restProps } = props;
    
    if (isLoading) {
      return <LoadingSpinner />;
    }
    
    return <Component {...(restProps as P)} />;
  };
}

// HOC for error boundaries
function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithErrorBoundaryComponent(props: P) {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
```

## 🎯 Task Management & Code Review Workflow

### Pre-Development Task Creation Protocol

**MANDATORY**: Before any development work, create detailed tasks using this structure:

```typescript
// Task Creation Template
interface DevelopmentTask {
  id: string;
  title: string;
  description: string;
  type: 'component' | 'feature' | 'animation' | 'responsive' | 'optimization';
  priority: 'critical' | 'high' | 'medium' | 'low';
  estimatedTime: string;
  dependencies: string[];
  acceptanceCriteria: string[];
  designReference?: string;
  animationSpecs?: AnimationSpecs;
}

// Example Task Structure
const sampleTask: DevelopmentTask = {
  id: 'TASK-001',
  title: 'Create Hero Section with Parallax Animation',
  description: 'Implement hero section matching ManyChat-style animations',
  type: 'component',
  priority: 'critical',
  estimatedTime: '4-6 hours',
  dependencies: ['hero-parallax-component', 'responsive-design-system'],
  acceptanceCriteria: [
    'Full-screen hero with smooth parallax scrolling',
    'Mobile-responsive design',
    'Performance optimized animations',
    'Accessibility compliant',
    'Cross-browser compatibility'
  ],
  designReference: 'https://manychat.com',
  animationSpecs: {
    duration: '0.8s',
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    triggerPoint: 'viewport-entry'
  }
};
```

### Code Review Checklist

**BEFORE implementing any feature:**

1. **Architecture Review**
   - ✅ Component follows atomic design principles
   - ✅ Proper separation of concerns
   - ✅ Reusable and composable structure
   - ✅ TypeScript interfaces defined
   - ✅ Performance implications considered

2. **Animation Review**
   - ✅ Smooth 60fps animations
   - ✅ Hardware acceleration utilized
   - ✅ Reduced motion preferences respected
   - ✅ Mobile performance optimized
   - ✅ Animation timing matches design specs

3. **Responsive Review**
   - ✅ Mobile-first approach implemented
   - ✅ All breakpoints tested
   - ✅ Touch interactions optimized
   - ✅ Content accessibility maintained
   - ✅ Performance across devices validated

4. **Code Quality Review**
   - ✅ No unused imports or variables
   - ✅ Consistent naming conventions
   - ✅ Proper error handling
   - ✅ Accessibility standards met
   - ✅ SEO optimization implemented

### Automated Code Cleanup Rules

```typescript
// ESLint configuration for automatic cleanup
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    // Remove unused imports
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    
    // Enforce consistent component naming
    'react/display-name': 'error',
    
    // Remove console.logs in production
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    
    // Enforce proper hook dependencies
    'react-hooks/exhaustive-deps': 'error',
    
    // Consistent import ordering
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
  }
};
```

## 🎨 Premium Animation System

### World-Class Animation Standards

```typescript
// Animation Configuration System
interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
  stagger?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

// Premium Animation Presets
export const AnimationPresets = {
  // Apple-style animations
  apple: {
    smooth: {
      duration: 0.8,
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    bounce: {
      duration: 1.2,
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  
  // ManyChat-style animations
  manychat: {
    slide: {
      duration: 0.6,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    scale: {
      duration: 0.4,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  },
  
  // Performance optimized
  performance: {
    fade: {
      duration: 0.3,
      easing: 'ease-out'
    },
    transform: {
      duration: 0.2,
      easing: 'ease-in-out'
    }
  }
};

// Animation Hook
export function useAnimation(preset: keyof typeof AnimationPresets) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return { ref, controls, preset: AnimationPresets[preset] };
}
```

### Scroll-Triggered Animation System

```typescript
// Advanced Scroll Animation Hook
export function useScrollAnimation({
  threshold = 0.1,
  triggerOnce = true,
  stagger = 0.1
}: ScrollAnimationOptions = {}) {
  const [ref, inView] = useInView({ threshold, triggerOnce });
  const controls = useAnimation();
  
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: stagger
      }
    }
  };
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return { ref, controls, variants };
}
```

## 📱 World-Class Responsive Design System

### Advanced Breakpoint System

```typescript
// Extended Breakpoint Configuration
const breakpoints = {
  xs: '320px',   // Small phones
  sm: '640px',   // Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Small laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Large desktops
  '3xl': '1920px', // Ultra-wide
  '4xl': '2560px'  // 4K displays
} as const;

// Responsive Hook with Device Detection
export function useResponsive() {
  const [screenSize, setScreenSize] = useState<keyof typeof breakpoints>('md');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      
      // Determine screen size
      if (width >= 2560) setScreenSize('4xl');
      else if (width >= 1920) setScreenSize('3xl');
      else if (width >= 1536) setScreenSize('2xl');
      else if (width >= 1280) setScreenSize('xl');
      else if (width >= 1024) setScreenSize('lg');
      else if (width >= 768) setScreenSize('md');
      else if (width >= 640) setScreenSize('sm');
      else setScreenSize('xs');
      
      // Device type detection
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };
    
    updateScreenSize();
    window.addEventListener('resize', debounce(updateScreenSize, 100));
    
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  
  return {
    screenSize,
    isMobile,
    isTablet,
    isDesktop,
    breakpoints
  };
}
```

### Fluid Typography System

```typescript
// Fluid Typography Calculator
function clamp(min: number, preferred: number, max: number): string {
  return `clamp(${min}rem, ${preferred}vw, ${max}rem)`;
}

// Fluid Typography Scale
export const fluidTypography = {
  // Display text
  display: {
    '4xl': clamp(2.5, 8, 4.5),   // 40px - 72px
    '3xl': clamp(2, 6, 3.75),    // 32px - 60px
    '2xl': clamp(1.75, 5, 3),    // 28px - 48px
    xl: clamp(1.5, 4, 2.25),     // 24px - 36px
  },
  
  // Heading text
  heading: {
    h1: clamp(1.75, 4, 2.5),     // 28px - 40px
    h2: clamp(1.5, 3.5, 2),      // 24px - 32px
    h3: clamp(1.25, 3, 1.75),    // 20px - 28px
    h4: clamp(1.125, 2.5, 1.5),  // 18px - 24px
  },
  
  // Body text
  body: {
    lg: clamp(1.125, 2, 1.25),   // 18px - 20px
    base: clamp(1, 1.5, 1.125),  // 16px - 18px
    sm: clamp(0.875, 1.25, 1),   // 14px - 16px
    xs: clamp(0.75, 1, 0.875),   // 12px - 14px
  }
};

// Usage in Tailwind config
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontSize: fluidTypography
    }
  }
};
```

### Container Queries Support

```typescript
// Container Query Hook
export function useContainerQuery(containerRef: RefObject<HTMLElement>) {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });
    
    resizeObserver.observe(containerRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);
  
  return {
    ...containerSize,
    isMobile: containerSize.width < 640,
    isTablet: containerSize.width >= 640 && containerSize.width < 1024,
    isDesktop: containerSize.width >= 1024
  };
}
```

## 🧩 Component Consistency Framework

### Design Token System

```typescript
// Design Tokens
export const designTokens = {
  colors: {
    primary: {
      50: '#fef2f2',
      500: '#ef4444', // Red (255, 54, 54)
      900: '#7f1d1d'
    },
    accent: {
      500: '#f97316'  // Midjourney orange
    },
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      800: '#1f2937',
      900: '#111827'
    },
    background: '#f0f0f0'
  },
  
  spacing: {
    section: {
      xs: '2rem',
      sm: '4rem',
      md: '6rem',
      lg: '8rem',
      xl: '12rem'
    },
    container: {
      padding: {
        mobile: '1rem',
        tablet: '2rem',
        desktop: '3rem'
      }
    }
  },
  
  typography: {
    fontFamily: {
      primary: ['Space Grotesk', 'sans-serif']
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  }
};
```

### Component Variant System

```typescript
// Button Component with Variants
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10"
      },
      animation: {
        none: "",
        scale: "hover:scale-105 active:scale-95 transition-transform",
        slide: "hover:translate-x-1 transition-transform",
        glow: "hover:shadow-lg hover:shadow-primary/25 transition-shadow"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### Component Documentation Template

```typescript
/**
 * Component: PremiumCard
 * 
 * @description A premium card component with advanced animations and responsive design
 * 
 * @features
 * - Responsive design with fluid typography
 * - Smooth hover animations
 * - Accessibility compliant
 * - Performance optimized
 * - Consistent with design system
 * 
 * @usage
 * ```tsx
 * <PremiumCard
 *   variant="elevated"
 *   animation="scale"
 *   className="max-w-md"
 * >
 *   <PremiumCard.Header>
 *     <h3>Card Title</h3>
 *   </PremiumCard.Header>
 *   <PremiumCard.Content>
 *     <p>Card content goes here</p>
 *   </PremiumCard.Content>
 * </PremiumCard>
 * ```
 * 
 * @responsive
 * - Mobile: Stack content vertically
 * - Tablet: 2-column grid layout
 * - Desktop: 3-column grid layout
 * 
 * @animation
 * - Entry: Fade up with stagger delay
 * - Hover: Scale with shadow elevation
 * - Exit: Fade out smoothly
 * 
 * @accessibility
 * - ARIA labels for screen readers
 * - Keyboard navigation support
 * - Focus indicators
 * - Reduced motion support
 */
```

## 🚀 Performance Optimization Rules

### Code Splitting Strategy

```typescript
// Route-based code splitting
const HomePage = dynamic(() => import('../pages/home'), {
  loading: () => <PageSkeleton />,
  ssr: true
});

const AboutPage = dynamic(() => import('../pages/about'), {
  loading: () => <PageSkeleton />,
  ssr: false // Client-side only if needed
});

// Component-based code splitting
const HeavyChart = dynamic(() => import('../components/HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
});

// Conditional loading
const AdminPanel = dynamic(() => import('../components/AdminPanel'), {
  loading: () => <AdminSkeleton />
});

// Usage with conditional rendering
function App() {
  const { user } = useAuth();
  
  return (
    <div>
      {user?.role === 'admin' && <AdminPanel />}
    </div>
  );
}
```

### Bundle Optimization

```typescript
// next.config.js - Advanced optimization
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  
  webpack: (config, { dev, isServer }) => {
    // Bundle analyzer
    if (!dev && !isServer) {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
          analyzerMode: 'static',
          openAnalyzer: false
        })
      );
    }
    
    // Optimize imports
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': 'framer-motion/dist/framer-motion',
    };
    
    return config;
  },
  
  // Image optimization
  images: {
    formats: ['webp', 'avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000 // 1 year
  }
};
```

## 🎯 Client-Centric Design Rules

### Picky Client Satisfaction Protocol

**CRITICAL**: For demanding clients who expect pixel-perfect implementations:

1. **Design Reference Matching**
   ```typescript
   // Always create a design comparison tool
   interface DesignComparison {
     referenceUrl: string;
     implementationUrl: string;
     tolerancePixels: number; // Max 2px difference
     matchingCriteria: {
       layout: boolean;
       typography: boolean;
       spacing: boolean;
       colors: boolean;
       animations: boolean;
       interactions: boolean;
     };
   }
   
   // Automated design diff checking
   export async function validateDesignMatch(
     reference: string,
     implementation: string
   ): Promise<DesignComparison> {
     // Implementation for design comparison
     return {
       referenceUrl: reference,
       implementationUrl: implementation,
       tolerancePixels: 2,
       matchingCriteria: {
         layout: true,
         typography: true,
         spacing: true,
         colors: true,
         animations: true,
         interactions: true
       }
     };
   }
   ```

2. **Animation Precision Requirements**
   ```typescript
   // Exact animation matching system
   interface AnimationSpec {
     property: string;
     duration: number; // Exact milliseconds
     easing: string;   // Exact cubic-bezier values
     delay: number;
     startValue: any;
     endValue: any;
     tolerance: number; // Max 50ms difference
   }
   
   // Animation validator
   export function validateAnimation(
     spec: AnimationSpec,
     implementation: CSSAnimation
   ): boolean {
     const durationDiff = Math.abs(spec.duration - implementation.duration);
     return durationDiff <= spec.tolerance;
   }
   ```

3. **Quality Assurance Checklist**
   ```typescript
   interface QualityCheck {
     pixelPerfect: boolean;      // ±2px tolerance
     performanceScore: number;   // Lighthouse score >90
     crossBrowser: boolean;      // Chrome, Firefox, Safari, Edge
     mobileOptimized: boolean;   // All device sizes
     accessibilityScore: number; // WCAG 2.1 AA compliance
     loadTime: number;           // <3 seconds
     animationSmooth: boolean;   // 60fps consistent
   }
   
   const qualityStandards: QualityCheck = {
     pixelPerfect: true,
     performanceScore: 95,
     crossBrowser: true,
     mobileOptimized: true,
     accessibilityScore: 100,
     loadTime: 2500, // 2.5 seconds max
     animationSmooth: true
   };
   ```

### Client Feedback Integration System

```typescript
// Feedback tracking and implementation
interface ClientFeedback {
  id: string;
  timestamp: Date;
  component: string;
  issue: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  expectedBehavior: string;
  currentBehavior: string;
  designReference?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'approved';
}

// Feedback management hook
export function useFeedbackManagement() {
  const [feedback, setFeedback] = useState<ClientFeedback[]>([]);
  
  const addFeedback = (item: Omit<ClientFeedback, 'id' | 'timestamp'>) => {
    const newFeedback: ClientFeedback = {
      ...item,
      id: generateId(),
      timestamp: new Date()
    };
    setFeedback(prev => [...prev, newFeedback]);
  };
  
  const updateFeedbackStatus = (id: string, status: ClientFeedback['status']) => {
    setFeedback(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status } : item
      )
    );
  };
  
  return { feedback, addFeedback, updateFeedbackStatus };
}
```

## 🧪 Testing & Validation Framework

### Component Testing Standards

```typescript
// Component test template
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ComponentName } from './ComponentName';

expect.extend(toHaveNoViolations);

describe('ComponentName', () => {
  // Visual regression test
  it('matches design specification', async () => {
    const { container } = render(<ComponentName />);
    
    // Take screenshot for visual regression
    expect(container).toMatchSnapshot();
    
    // Check accessibility
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  // Animation test
  it('has smooth animations', async () => {
    render(<ComponentName />);
    
    const element = screen.getByTestId('animated-element');
    fireEvent.mouseEnter(element);
    
    // Check animation properties
    await waitFor(() => {
      expect(element).toHaveStyle('transform: scale(1.05)');
    });
    
    // Check animation duration
    const computedStyle = window.getComputedStyle(element);
    expect(computedStyle.transitionDuration).toBe('0.3s');
  });
  
  // Responsive test
  it('is responsive across all breakpoints', () => {
    const breakpoints = [320, 640, 768, 1024, 1280, 1536];
    
    breakpoints.forEach(width => {
      // Set viewport width
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width
      });
      
      window.dispatchEvent(new Event('resize'));
      
      const { container } = render(<ComponentName />);
      
      // Verify responsive behavior
      expect(container.firstChild).toBeInTheDocument();
      expect(container).toMatchSnapshot(`responsive-${width}px`);
    });
  });
});
```

### E2E Testing for Animations

```typescript
// Playwright E2E test for animations
import { test, expect } from '@playwright/test';

test.describe('Landing Page Animations', () => {
  test('hero section parallax animation works smoothly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for hero section to load
    await page.waitForSelector('[data-testid="hero-section"]');
    
    // Scroll and measure animation performance
    await page.evaluate(() => {
      window.scrollTo(0, 500);
    });
    
    // Check if parallax effect is working
    const heroElement = page.locator('[data-testid="hero-parallax"]');
    const transform = await heroElement.evaluate(el => 
      window.getComputedStyle(el).transform
    );
    
    expect(transform).not.toBe('none');
    
    // Performance check
    const metrics = await page.evaluate(() => {
      return JSON.stringify(performance.getEntriesByType('navigation'));
    });
    
    const navigationTiming = JSON.parse(metrics)[0];
    const loadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
    
    expect(loadTime).toBeLessThan(3000); // Less than 3 seconds
  });
});
```

## 📋 Advanced Project Structure

### Feature-Based Architecture

```typescript
// Advanced project structure
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Route groups
│   │   ├── page.tsx       # Landing page
│   │   ├── about/
│   │   └── contact/
│   ├── (dashboard)/       # Protected routes
│   ├── api/               # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── loading.tsx
├── components/
│   ├── atoms/             # Basic UI elements
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.module.css
│   │   ├── Input/
│   │   └── Icon/
│   ├── molecules/         # Composite components
│   │   ├── SearchBox/
│   │   ├── Card/
│   │   └── Modal/
│   ├── organisms/         # Complex sections
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── ProductGrid/
│   ├── templates/         # Page layouts
│   │   ├── LandingLayout/
│   │   └── DashboardLayout/
│   └── pages/             # Complete pages
├── features/              # Feature modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── stores/
│   │   └── types/
│   ├── landing/
│   └── dashboard/
├── shared/                # Shared utilities
│   ├── components/        # Reusable components
│   ├── hooks/            # Custom hooks
│   ├── services/         # API services
│   ├── stores/           # Global state
│   ├── types/            # TypeScript types
│   ├── utils/            # Utility functions
│   └── constants/        # App constants
├── styles/               # Global styles
│   ├── globals.css
│   ├── components.css
│   └── animations.css
└── public/               # Static assets
    ├── images/
    ├── videos/
    └── icons/
```

### Component Development Workflow

```typescript
// Component development checklist
interface ComponentDevelopmentSteps {
  planning: {
    requirements: string[];
    designReference: string;
    acceptanceCriteria: string[];
    estimatedTime: string;
  };
  development: {
    structure: boolean;      // Component structure defined
    types: boolean;          // TypeScript interfaces
    styles: boolean;         // Responsive styles
    animations: boolean;     // Smooth animations
    accessibility: boolean;  // ARIA compliance
  };
  testing: {
    unit: boolean;          // Unit tests written
    integration: boolean;    // Integration tests
    visual: boolean;        // Visual regression tests
    performance: boolean;   // Performance tests
    accessibility: boolean; // Accessibility tests
  };
  documentation: {
    storybook: boolean;     // Storybook stories
    readme: boolean;        // Component documentation
    examples: boolean;      // Usage examples
    api: boolean;          // Props documentation
  };
  review: {
    codeReview: boolean;    // Peer review completed
    designReview: boolean;  // Design approval
    clientReview: boolean;  // Client approval
    qa: boolean;           // QA testing
  };
}

// Workflow enforcement
export function enforceWorkflow(component: string): ComponentDevelopmentSteps {
  return {
    planning: {
      requirements: [],
      designReference: '',
      acceptanceCriteria: [],
      estimatedTime: ''
    },
    development: {
      structure: false,
      types: false,
      styles: false,
      animations: false,
      accessibility: false
    },
    testing: {
      unit: false,
      integration: false,
      visual: false,
      performance: false,
      accessibility: false
    },
    documentation: {
      storybook: false,
      readme: false,
      examples: false,
      api: false
    },
    review: {
      codeReview: false,
      designReview: false,
      clientReview: false,
      qa: false
    }
  };
}
```

---

## 🚨 CRITICAL IMPLEMENTATION RULES

### Mandatory Pre-Development Protocol

1. **ALWAYS create tasks before any development work**
2. **ALWAYS review existing code for cleanup opportunities**
3. **ALWAYS implement animations that match reference designs exactly**
4. **ALWAYS ensure responsive design works across all devices**
5. **ALWAYS validate client requirements before implementation**
6. **ALWAYS test on multiple browsers and devices**
7. **ALWAYS optimize for performance (Lighthouse score >90)**
8. **ALWAYS maintain component consistency**
9. **ALWAYS document component usage and API**
10. **ALWAYS get client approval before marking tasks complete**

### Error Prevention & Code Quality

- ✅ **TypeScript strict mode ALWAYS enabled**
- ✅ **ESLint with React hooks rules ALWAYS enforced**
- ✅ **Prettier for consistent formatting ALWAYS used**
- ✅ **Husky pre-commit hooks ALWAYS active**
- ✅ **Component tests ALWAYS written**
- ✅ **Visual regression tests ALWAYS included**
- ✅ **Performance budgets ALWAYS monitored**
- ✅ **Accessibility standards ALWAYS met**
- ✅ **SEO optimization ALWAYS implemented**
- ✅ **Bundle size ALWAYS optimized**

---

**ULTIMATE RULE**: Never compromise on quality. Client satisfaction is paramount. Every pixel, every animation, every interaction must be perfect. If it's not exactly matching the reference design and exceeding client expectations, it's not ready for delivery.

**CRITICAL**: Always validate syntax before saving. Use TypeScript strict mode and ESLint to catch errors early. **NEVER commit code with syntax errors.**
