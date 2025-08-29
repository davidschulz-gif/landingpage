# Task 1: Splash Screen Enhancement

## 🎯 Objective
Transform the splash screen with red theme matching the Typus AI logo, implement advanced text animations, and ensure dark/light theme compatibility.

## 🔴 Priority: High
**Estimated Time**: 4-6 hours  
**Dependencies**: None  
**Status**: 📝 Pending

## 📋 Detailed Tasks

### 1.1 Theme Color Update
- [ ] **Update background to Typus AI red theme**
  - [ ] Change primary background to `#DC2626` (red-600) or brand-specific red
  - [ ] Implement gradient background: `from-red-600 to-red-800`
  - [ ] Add subtle red variations for depth
  - [ ] Ensure contrast meets accessibility standards

- [ ] **Logo color adjustments**
  - [ ] Update logo colors to complement red theme
  - [ ] Add white/light accents for contrast
  - [ ] Implement logo glow effects if applicable

### 1.2 Text Animation Sequence
- [ ] **"Imagine" fade effect**
  - [ ] Implement smooth fade-in animation
  - [ ] Use `opacity: 0 → 1` with `ease-in-out` timing
  - [ ] Duration: 800ms with slight delay
  - [ ] Add subtle scale effect: `scale: 0.95 → 1`

- [ ] **"Discover" fade-in effect**
  - [ ] Trigger after "Imagine" completes
  - [ ] Implement crossfade transition
  - [ ] Add slight upward movement: `translateY: 10px → 0`
  - [ ] Duration: 600ms with smooth easing

- [ ] **Strike-through animation**
  - [ ] Animate line drawing from left to right
  - [ ] Use `stroke-dasharray` and `stroke-dashoffset` for SVG line
  - [ ] Duration: 400ms with `ease-out` timing
  - [ ] Add slight bounce effect at completion

- [ ] **Hide "Discover" with strike-through**
  - [ ] Fade out "Discover" text
  - [ ] Maintain strike-through visibility
  - [ ] Smooth transition to next phase
  - [ ] Duration: 500ms

- [ ] **"Amaze" keyword reveal**
  - [ ] Implement dramatic entrance animation
  - [ ] Use `scale: 0.5 → 1.1 → 1` with bounce
  - [ ] Add rotation effect: `rotate: -5deg → 0deg`
  - [ ] Include particle/sparkle effects around text
  - [ ] Duration: 1000ms with `ease-out-bounce`

### 1.3 AI for Architect Text Updates
- [ ] **Text color changes**
  - [ ] Update all text to white (`text-white`)
  - [ ] Ensure proper contrast against red background
  - [ ] Add subtle text shadows for readability
  - [ ] Implement text glow effects if needed

- [ ] **Animation enhancements**
  - [ ] Add staggered text reveal for each word
  - [ ] Implement typewriter effect for "AI for Architect"
  - [ ] Add cursor blink animation
  - [ ] Smooth transitions between text states

### 1.4 Theme Compatibility
- [ ] **Dark theme support**
  - [ ] Ensure red theme works in dark mode
  - [ ] Adjust red shades for dark theme
  - [ ] Maintain accessibility contrast ratios
  - [ ] Test with system dark mode toggle

- [ ] **Light theme support**
  - [ ] Adapt red theme for light backgrounds
  - [ ] Adjust text colors for light theme
  - [ ] Maintain brand consistency
  - [ ] Ensure smooth theme transitions

### 1.5 Animation Performance
- [ ] **Performance optimization**
  - [ ] Use CSS transforms instead of layout properties
  - [ ] Implement `will-change` for animated elements
  - [ ] Add `transform3d` for GPU acceleration
  - [ ] Optimize animation frame rates

- [ ] **Reduced motion support**
  - [ ] Respect `prefers-reduced-motion` setting
  - [ ] Provide alternative animations for accessibility
  - [ ] Test with screen readers
  - [ ] Ensure keyboard navigation works

## 🛠️ Technical Implementation

### Required Dependencies
```bash
bun add framer-motion
bun add @types/react-transition-group
```

### Animation Timing
```typescript
const animationSequence = {
  imagine: { duration: 800, delay: 0 },
  discover: { duration: 600, delay: 1000 },
  strikeThrough: { duration: 400, delay: 1800 },
  hideDiscover: { duration: 500, delay: 2400 },
  amaze: { duration: 1000, delay: 3000 }
};
```

### CSS Variables for Theme
```css
:root {
  --typus-red: #DC2626;
  --typus-red-dark: #B91C1C;
  --typus-red-light: #EF4444;
  --text-primary: #FFFFFF;
  --text-secondary: #F3F4F6;
}

[data-theme="dark"] {
  --typus-red: #B91C1C;
  --typus-red-dark: #991B1B;
  --typus-red-light: #DC2626;
}
```

## 🎨 Design Specifications

### Color Palette
- **Primary Red**: `#DC2626` (Typus AI brand red)
- **Secondary Red**: `#B91C1C` (darker shade)
- **Accent Red**: `#EF4444` (lighter shade)
- **Text White**: `#FFFFFF` (primary text)
- **Text Gray**: `#F3F4F6` (secondary text)

### Typography
- **Primary Font**: System font stack with fallbacks
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)
- **Text Sizes**: Responsive scaling from mobile to desktop

### Animation Easing
- **Primary**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- **Smooth**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

## ✅ Testing Checklist
- [ ] Animation sequence works correctly
- [ ] Theme switching works smoothly
- [ ] Performance is optimal (60fps)
- [ ] Accessibility requirements met
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility tested
- [ ] Reduced motion preference respected

## 🚀 Next Steps
1. Review current splash screen implementation
2. Set up animation framework and dependencies
3. Implement red theme color scheme
4. Create text animation sequence
5. Add theme compatibility
6. Test and optimize performance
7. Update documentation

---
*File: 01-splash-screen-tasks.md*  
*Last Updated: $(date)*  
*Status: Pending Implementation*
