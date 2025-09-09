# Typus AI - Modern Landing Page Redesign

A cutting-edge, AI-powered architectural visualization platform built with Next.js 15, featuring stunning animations, responsive design, and optimized performance.

## 🚀 Project Overview

This is a complete redesign of the Typus AI landing page, inspired by modern design patterns from ManyChat, Krea.ai, and Vyro.ai. The project showcases AI-powered architectural visualization capabilities through immersive animations and interactive components.

### Key Features

- **Full-screen Hero Parallax** with smooth scrolling animations
- **Interactive Video Showcases** with tabbed navigation
- **Sticky Scroll Sections** for enhanced user engagement
- **Responsive Design** optimized for all devices
- **Performance Optimized** with lazy loading and code splitting
- **SEO Optimized** with structured data and meta tags
- **Modern UI Components** using ShadCN UI and Aceternity UI

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React 19** - Latest React features

### UI Libraries
- **ShadCN UI** - Modern component library
- **Aceternity UI** - Advanced animation components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Package Manager
- **Bun** - Fast JavaScript runtime and package manager

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main landing page
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── ui/                # ShadCN UI components
│   ├── sections/          # Page sections
│   ├── magicui/           # Magic UI components
│   └── video/             # Video components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── hero-parallax-images/
│   ├── logo/
│   └── videos/
└── styles/                # Additional CSS
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#ff3636` (RGB: 255, 54, 54)
- **Background**: `#f0f0f0`
- **Text**: White and Black
- **Accent**: Midjourney Orange

### Typography
- **Primary Font**: Space Grotesk
- **Secondary Font**: Source Serif 4

### Responsive Breakpoints
- **Mobile**: 640px and below
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above
- **Large Desktop**: 1280px and above

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd typus-ai-redesign-final
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
bun build

# Start production server
bun start
```

## 📦 Key Components

### Hero Section
- **HeroParallax**: Full-screen parallax with architectural images
- **SplashScreen**: Loading animation with Typus AI branding

### Interactive Sections
- **VideoShowcaseSection**: Tabbed video demonstrations
- **StickySliderSection**: Scroll-triggered content reveals
- **FeatureShowcaseWidget**: Interactive feature highlights
- **ReviewsSection**: Customer testimonials with embedded reviews

### Navigation & Layout
- **TypusNavbar**: Responsive navigation with smooth animations
- **FooterSection**: Comprehensive footer with links and branding
- **StickyBottomSheet**: Floating CTA for mobile users

## 🎯 Performance Optimizations

### Code Splitting
- Dynamic imports for heavy components
- Lazy loading for below-the-fold content
- Optimized bundle sizes

### Image Optimization
- Next.js Image component with WebP/AVIF support
- Responsive image sizing
- Preloading for critical images

### Animation Performance
- GPU-accelerated animations
- Reduced motion support for accessibility
- Intersection Observer for scroll triggers

## 🔧 Development Guidelines

### Component Architecture
- **Atomic Design**: Atoms → Molecules → Organisms
- **Server Components** by default
- **Client Components** only when needed
- **TypeScript strict mode** enabled

### Styling Standards
- **Tailwind CSS** utility classes
- **Mobile-first** responsive design
- **CSS Variables** for theme consistency
- **Consistent spacing** using Tailwind scale

### Code Quality
- **ESLint** configuration
- **Prettier** formatting
- **TypeScript** strict typing
- **Performance monitoring**

## 📱 Responsive Design

### Mobile (< 640px)
- Single column layouts
- Touch-friendly interactions
- Optimized navigation menu
- Compressed content spacing

### Tablet (640px - 1024px)
- Two-column layouts where appropriate
- Adjusted typography scales
- Optimized image sizes
- Enhanced touch targets

### Desktop (> 1024px)
- Multi-column layouts
- Full parallax effects
- Hover interactions
- Expanded content areas

## 🔍 SEO Features

### Technical SEO
- **Structured Data** (JSON-LD)
- **Open Graph** meta tags
- **Twitter Cards** integration
- **Canonical URLs**
- **XML Sitemap**

### Performance SEO
- **Core Web Vitals** optimization
- **Image optimization**
- **Code splitting**
- **Lazy loading**

### Content SEO
- **Semantic HTML**
- **Proper heading hierarchy**
- **Alt text for images**
- **Meta descriptions**

## 🧪 Testing & Quality Assurance

### Performance Testing
- Lighthouse audits
- Core Web Vitals monitoring
- Bundle size analysis
- Load time optimization

### Cross-browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design validation

### Accessibility Testing
- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod
```

### Manual Deployment
```bash
# Build for production
bun build

# Deploy the .next folder to your hosting provider
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=https://app.typus.ai
NEXT_PUBLIC_SITE_URL=https://typus.ai
```

## 📊 Analytics & Monitoring

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error tracking integration
- Performance budgets

### SEO Monitoring
- Search Console integration
- Keyword ranking tracking
- Organic traffic analysis
- Technical SEO audits

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Follow coding standards and guidelines
3. Test thoroughly across devices
4. Submit pull request with detailed description

### Commit Convention
```
feat: add new hero animation
fix: resolve mobile navigation issue
refactor: optimize image loading
docs: update README with deployment guide
```

### Code Review Checklist
- [ ] TypeScript compilation passes
- [ ] Responsive design tested
- [ ] Performance impact assessed
- [ ] Accessibility standards met
- [ ] SEO implications considered

## 📚 Documentation

### Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [ShadCN UI Documentation](https://ui.shadcn.com/)

### Project-Specific Guides
- `CLIENT-SEO-PERFORMANCE-GUIDE.md` - SEO optimization guide
- `SEO-OPTIMIZATION-GUIDE.md` - Technical SEO details
- `TASKS.md` - Development task tracking

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed with `bun install`
- Check TypeScript errors with `bun run type-check`
- Verify Next.js configuration

**Performance Issues**
- Check bundle size with `bun run analyze`
- Optimize images and lazy loading
- Review animation performance

**Styling Issues**
- Verify Tailwind CSS configuration
- Check responsive breakpoints
- Validate CSS custom properties

## 📄 License

This project is proprietary software developed for Typus AI. All rights reserved.

## 👥 Team

- **Frontend Development**: Modern Next.js architecture
- **UI/UX Design**: Inspired by leading AI platforms
- **Performance Optimization**: Core Web Vitals focused
- **SEO Strategy**: Technical and content optimization

## 📞 Support

For technical support or questions about this project:
- Create an issue in the repository
- Contact the development team
- Review the documentation guides

---

**Built with ❤️ for Typus AI - Transforming Architecture with AI**