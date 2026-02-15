# Component Documentation

This document provides detailed documentation for all custom components in the Meme Kart Racing website.

## Table of Contents

- [Layout Components](#layout-components)
- [Feature Components](#feature-components)
- [UI Components](#ui-components)
- [Context Providers](#context-providers)

---

## Layout Components

### `<Landing />`

**Location:** `client/src/pages/Landing.tsx`

The landing page component that displays before entering the main website. Features a full-screen marketing video background with animated branding.

#### Features

The Landing component provides an immersive first impression with several key features. It displays a full-screen looping video background showcasing the game's marketing content. The animated MK logo appears with a spinning checkered ring and neon glow effect, creating visual interest. A countdown timer automatically redirects users to the main site after 10 seconds, though users can skip immediately via a button in the top-right corner. The component uses localStorage to detect first-time visitors, ensuring returning users bypass the landing page and go directly to the main content.

#### Props

None - This is a standalone page component.

#### Usage

```typescript
import Landing from "@/pages/Landing";

// Rendered via routing in App.tsx
<Route path="/" component={Landing} />
```

#### State Management

```typescript
const [countdown, setCountdown] = useState(10); // Countdown timer
```

The component checks localStorage for the `hasVisitedBefore` flag. If not set, it displays the landing page and starts the countdown. When users click "Press Start" or the skip button, the flag is set and they're redirected to `/home`.

---

### `<Home />`

**Location:** `client/src/pages/Home.tsx`

The main website page containing all sections: hero, about, gameplay, tokenomics, NFT marketplace, roadmap, whitepaper, and community.

#### Features

The Home component serves as the primary content hub, orchestrating multiple sections into a cohesive experience. It includes a fixed navigation bar with desktop and mobile variants, a hero section with animated particles and CRT effects, character showcase with animated sprites, interactive roadmap timeline, tokenomics breakdown, NFT marketplace preview, embedded YouTube content, social media links, and a floating scroll-to-top button. The component manages loading state with a retro arcade loading screen and integrates sound effects throughout user interactions.

#### Props

None - This is a standalone page component.

#### State Management

```typescript
const [mounted, setMounted] = useState(false); // Hydration check
const [isLoading, setIsLoading] = useState(true); // Loading screen
const { playSound } = useSound(); // Sound effects
```

#### Sections

The page is divided into semantic sections with IDs for anchor navigation:

| Section ID | Description |
|------------|-------------|
| `#about` | Game overview and value proposition |
| `#gameplay` | Character showcase with stats |
| `#tokenomics` | $RMG token distribution |
| `#nft` | NFT marketplace benefits |
| `#roadmap` | 7-week launch timeline |
| `#whitepaper` | PDF download section |
| `#community` | YouTube embed and social links |

---

## Feature Components

### `<LoadingScreen />`

**Location:** `client/src/components/LoadingScreen.tsx`

A retro arcade-style loading screen with animated logo and progress bar.

#### Features

The LoadingScreen component creates an authentic arcade startup experience. It displays the MK logo inside a pulsing cyan ring with a spinning magenta border, creating visual depth. An animated pixel art loading bar progresses from 0-100% with a rainbow gradient transitioning through green, cyan, and magenta. Real-time percentage display updates as the bar fills. The "LOADING..." text appears in neon green with glow effects, while "INSERT COIN" text bounces vertically in electric yellow. A blinking cursor adds to the retro terminal aesthetic. CRT scanlines overlay the entire screen for authentic arcade feel. Once loading completes, the component smoothly fades out to reveal the main content.

#### Props

None

#### Usage

```typescript
import { LoadingScreen } from "@/components/LoadingScreen";

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 3000);
  return () => clearTimeout(timer);
}, []);

return (
  <>
    {isLoading && <LoadingScreen />}
    {/* Main content */}
  </>
);
```

#### Animation Timing

The loading screen uses a 3-second duration with the following phases:

- **0-2.5s**: Progress bar animates from 0-100%
- **2.5-3s**: Fade out transition
- **3s**: Component unmounts

---

### `<PixelParticles />`

**Location:** `client/src/components/PixelParticles.tsx`

Canvas-based animated particle effect for the hero section background.

#### Features

The PixelParticles component creates a dynamic cyberpunk atmosphere through animated geometric shapes. It renders 50 floating particles in three shapes: squares, circles, and triangles. Each particle is colored in neon hues matching the theme: green, cyan, magenta, and yellow. Particles drift slowly across the screen with independent velocities and rotate continuously at varying speeds. When particles come within 150 pixels of each other, thin green lines connect them, creating a network effect. All particles wrap around screen edges for seamless infinite motion. The animation runs at 60fps using requestAnimationFrame for smooth performance. Canvas automatically resizes to match viewport dimensions, and the entire effect runs at 40% opacity to avoid overwhelming foreground content.

#### Props

None

#### Technical Implementation

```typescript
interface Particle {
  x: number;              // X position
  y: number;              // Y position
  size: number;           // Particle size (2-6px)
  speedX: number;         // Horizontal velocity
  speedY: number;         // Vertical velocity
  color: string;          // RGBA color
  shape: "square" | "circle" | "triangle";
  rotation: number;       // Current rotation angle
  rotationSpeed: number;  // Rotation velocity
}
```

#### Performance Considerations

The component is optimized for performance through several techniques. It uses a single canvas element instead of multiple DOM nodes, reducing overhead. The particle count is limited to 50 to maintain 60fps on most devices. Connection lines are only drawn between nearby particles (within 150px) to minimize calculations. The animation loop uses requestAnimationFrame for browser-optimized rendering. Canvas resizing is debounced via window resize events to prevent excessive redraws.

---

### `<Roadmap />`

**Location:** `client/src/components/Roadmap.tsx`

Interactive timeline displaying the 7-week launch roadmap with expandable phase cards.

#### Features

The Roadmap component presents the launch timeline in an engaging, interactive format. It displays seven phases in a vertical timeline layout, each representing one week of the launch schedule. Phase cards are expandable, revealing detailed deliverables and target outcomes when clicked. Each phase has a distinct color theme matching its focus area: green for Android, cyan for iOS, magenta for Multiplayer, yellow for Web3, etc. Animated progress indicators show completion status for each phase. The timeline includes connecting lines between phases to visualize progression. Cards feature hover effects with 3D transforms and neon glow. The layout is fully responsive, adapting from vertical timeline on desktop to stacked cards on mobile.

#### Props

None

#### Data Structure

```typescript
interface RoadmapPhase {
  week: number;
  title: string;
  description: string;
  deliverables: string[];
  targetOutcome: string;
  color: string; // Neon color for theme
}
```

#### Roadmap Phases

| Week | Phase | Focus | Color |
|------|-------|-------|-------|
| 1 | Android Launch | Mobile deployment | Green |
| 2 | iOS Launch | Apple App Store | Cyan |
| 3 | Multiplayer | Real-time racing | Magenta |
| 4 | Web3 Integration | Wallet & payments | Yellow |
| 5 | NFT Launch | Character NFTs | Green |
| 6 | Tournaments | Competitive events | Cyan |
| 7 | Full Launch | Marketing push | Magenta |

#### State Management

```typescript
const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

const togglePhase = (week: number) => {
  setExpandedPhase(expandedPhase === week ? null : week);
};
```

---

### `<MobileNav />`

**Location:** `client/src/components/MobileNav.tsx`

Responsive mobile navigation drawer with animated hamburger menu toggle.

#### Features

The MobileNav component provides seamless mobile navigation through a slide-in drawer interface. The hamburger menu icon animates smoothly into an X icon when opened, providing clear visual feedback. The drawer slides in from the right side with a smooth transition effect. A dark backdrop overlay (80% opacity) appears behind the drawer, with click-to-close functionality. All navigation links are displayed in a vertical stack with proper spacing. The wallet connection button is integrated at the bottom of the drawer. Links automatically close the drawer when clicked for better UX. The component is hidden on large screens (1024px+) where desktop navigation is used. Touch-friendly tap targets ensure easy mobile interaction.

#### Props

None

#### Usage

```typescript
import { MobileNav } from "@/components/MobileNav";

// Automatically shown on mobile, hidden on desktop
<MobileNav />
```

#### State Management

```typescript
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);
const closeMenu = () => setIsOpen(false);
```

#### Responsive Behavior

The component uses Tailwind's responsive utilities:

```typescript
// Hamburger button: visible on mobile, hidden on desktop
className="lg:hidden"

// Drawer: slides in on mobile
className={`fixed top-0 right-0 h-full w-80 bg-card transform transition-transform duration-300 ${
  isOpen ? 'translate-x-0' : 'translate-x-full'
}`}
```

---

### `<ScrollToTop />`

**Location:** `client/src/components/ScrollToTop.tsx`

Floating button that appears after scrolling and smoothly returns user to top of page.

#### Features

The ScrollToTop component enhances navigation on long pages with a convenient return-to-top mechanism. The button appears only after scrolling 300 pixels down the page, keeping the UI clean when not needed. It features a neon green border with glow effect matching the site's aesthetic. A chevron up icon bounces gently to draw attention. On click, the button triggers smooth scrolling back to the top of the page with an arcade press animation (scale down effect). The button is positioned in the bottom-right corner with fixed positioning. It fades in with animation when appearing and includes proper ARIA labels for accessibility.

#### Props

None

#### Usage

```typescript
import { ScrollToTop } from "@/components/ScrollToTop";

// Place at root level of page
<ScrollToTop />
```

#### State Management

```typescript
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  window.addEventListener('scroll', toggleVisibility);
  return () => window.removeEventListener('scroll', toggleVisibility);
}, []);
```

#### Scroll Behavior

```typescript
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll animation
  });
};
```

---

### `<SoundToggle />`

**Location:** `client/src/components/SoundToggle.tsx`

Toggle button for enabling/disabling arcade sound effects throughout the site.

#### Features

The SoundToggle component provides user control over the sound effects system. It displays a volume icon when sounds are enabled and a muted icon when disabled. The button features a neon green border with hover effects consistent with the arcade theme. When unmuting, it plays a coin sound as feedback to confirm sound is working. The mute state persists across page reloads via localStorage. The button includes proper ARIA labels for screen readers. It's positioned in the header navigation on both desktop and mobile layouts. The active state scales down slightly on click for tactile feedback.

#### Props

None

#### Usage

```typescript
import { SoundToggle } from "@/components/SoundToggle";

// Place in header navigation
<SoundToggle />
```

#### Integration with Sound Context

```typescript
const { isMuted, toggleMute, playSound } = useSound();

const handleToggle = () => {
  if (isMuted) {
    toggleMute();
    setTimeout(() => playSound("coin"), 100);
  } else {
    toggleMute();
  }
};
```

---

### `<WalletButton />`

**Location:** `client/src/components/WalletButton.tsx`

Wallet connection button with Privy integration (ready for activation).

#### Features

The WalletButton component provides the entry point for Web3 wallet authentication. It displays "CONNECT WALLET" text in neon green with arcade styling. The button includes hover effects with background color transitions and scale animations. It's currently configured as a placeholder that shows a toast notification indicating Privy setup is required. Once Privy App ID is configured, it will trigger the Privy login modal supporting multiple authentication methods: email, Google OAuth, MetaMask, Coinbase Wallet, WalletConnect, and embedded wallets. The button automatically updates to show connected wallet address once authenticated. It's responsive and appears in both desktop header and mobile drawer navigation.

#### Props

None

#### Current Implementation (Placeholder)

```typescript
import { toast } from "sonner";

const handleConnect = () => {
  toast.info("Wallet connection coming soon! Configure Privy App ID to enable.");
};
```

#### Future Implementation (With Privy)

```typescript
import { usePrivy } from '@privy-io/react-auth';

const { login, authenticated, user } = usePrivy();

const handleConnect = () => {
  if (!authenticated) {
    login();
  }
};

return (
  <Button onClick={handleConnect}>
    {authenticated ? `${user.wallet.address.slice(0,6)}...` : "CONNECT WALLET"}
  </Button>
);
```

---

## UI Components

### shadcn/ui Components

The website uses shadcn/ui components from `client/src/components/ui/`. These are pre-built, accessible components based on Radix UI primitives.

#### Available Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `Button` | Interactive buttons with variants | `ui/button.tsx` |
| `Card` | Content containers | `ui/card.tsx` |
| `Dialog` | Modal dialogs | `ui/dialog.tsx` |
| `Separator` | Visual dividers | `ui/separator.tsx` |
| `Tooltip` | Hover information | `ui/tooltip.tsx` |
| `Toaster` | Toast notifications | `ui/sonner.tsx` |

#### Button Variants

The Button component supports multiple variants:

```typescript
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
```

#### Custom Arcade Button

A custom `.btn-arcade` class is defined in `index.css` for arcade-style buttons:

```css
.btn-arcade {
  @apply px-8 py-6 font-pixel text-sm;
  @apply bg-[var(--color-neon-green)] text-black;
  @apply hover:bg-[var(--color-cyber-cyan)];
  @apply active:scale-95 transition-all;
  @apply shadow-[0_0_20px_rgba(0,255,159,0.5)];
}
```

---

## Context Providers

### `<SoundProvider />`

**Location:** `client/src/contexts/SoundContext.tsx`

Context provider that manages arcade sound effects throughout the application.

#### Features

The SoundProvider creates a centralized sound management system using Web Audio API. It generates retro arcade sounds procedurally without requiring audio files, reducing bundle size. Four distinct sound types are available: click (short beep), hover (subtle tone), coin (arcade coin insert), and powerup (ascending tones). The mute state persists across sessions via localStorage. All sounds respect the global mute setting. The Web Audio context is created on first user interaction to comply with browser autoplay policies. Sounds are generated using oscillators with carefully tuned frequencies and envelopes for authentic arcade feel.

#### API

```typescript
interface SoundContextType {
  playSound: (type: 'click' | 'hover' | 'coin' | 'powerup') => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const { playSound, isMuted, toggleMute } = useSound();
```

#### Usage

```typescript
import { SoundProvider, useSound } from "@/contexts/SoundContext";

// Wrap app with provider
<SoundProvider>
  <App />
</SoundProvider>

// Use in components
const { playSound } = useSound();

<Button onClick={() => playSound("click")}>
  Click Me
</Button>
```

#### Sound Specifications

| Sound Type | Frequency | Duration | Envelope |
|------------|-----------|----------|----------|
| `click` | 800 Hz | 50ms | Sharp attack/release |
| `hover` | 600 Hz | 30ms | Soft attack/release |
| `coin` | 1000→1200 Hz | 150ms | Quick sweep |
| `powerup` | 400→800 Hz | 300ms | Ascending scale |

#### Implementation Details

```typescript
const playSound = (type: SoundType) => {
  if (isMuted) return;
  
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Configure based on sound type
  switch (type) {
    case 'click':
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      break;
    // ... other cases
  }
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
};
```

---

### `<ThemeProvider />`

**Location:** `client/src/contexts/ThemeContext.tsx`

Context provider for managing dark/light theme (currently dark theme only).

#### Features

The ThemeProvider manages the application's color theme through CSS class toggling. It currently defaults to dark theme to match the cyberpunk aesthetic. The theme preference persists via localStorage for consistency across sessions. The provider applies the theme class to the document root element, enabling CSS variable switching. It includes support for theme switching if enabled via the `switchable` prop. The system respects user's system theme preference when no stored preference exists. Theme changes trigger smooth transitions for a polished experience.

#### API

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const { theme, toggleTheme } = useTheme();
```

#### Usage

```typescript
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

// Wrap app with provider
<ThemeProvider defaultTheme="dark" switchable>
  <App />
</ThemeProvider>

// Use in components (if switchable enabled)
const { theme, toggleTheme } = useTheme();

<Button onClick={toggleTheme}>
  Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `'light' \| 'dark'` | `'light'` | Initial theme |
| `switchable` | `boolean` | `false` | Enable theme switching |
| `children` | `ReactNode` | - | Child components |

#### Theme Implementation

The theme is applied via CSS classes:

```typescript
useEffect(() => {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
}, [theme]);
```

CSS variables are defined for each theme in `index.css`:

```css
:root {
  --background: oklch(1 0 0); /* Light background */
  --foreground: oklch(0.235 0.015 65); /* Dark text */
}

.dark {
  --background: oklch(0.141 0.005 285.823); /* Dark background */
  --foreground: oklch(0.85 0.005 65); /* Light text */
}
```

---

## Component Best Practices

### Performance Optimization

When building or modifying components, follow these performance guidelines:

**Memoization**: Use `React.memo()` for components that receive the same props frequently. Use `useMemo()` for expensive calculations. Use `useCallback()` for functions passed as props.

**Lazy Loading**: Import heavy components lazily with `React.lazy()` and `Suspense`. Defer loading of below-fold content until needed.

**Event Handlers**: Debounce scroll and resize event handlers. Use passive event listeners for better scrolling performance.

**Animations**: Prefer CSS animations over JavaScript for simple transitions. Use `requestAnimationFrame` for JavaScript animations. Limit the number of simultaneously animated elements.

### Accessibility

Ensure all components meet WCAG 2.1 AA standards:

**Keyboard Navigation**: All interactive elements must be keyboard accessible. Maintain logical tab order. Provide visible focus indicators.

**ARIA Labels**: Add `aria-label` for icon-only buttons. Use `aria-expanded` for expandable sections. Include `aria-live` for dynamic content updates.

**Color Contrast**: Ensure text meets 4.5:1 contrast ratio. Don't rely solely on color to convey information.

**Screen Readers**: Test with screen readers (NVDA, JAWS, VoiceOver). Provide descriptive alt text for images. Use semantic HTML elements.

### Code Organization

Maintain consistent code structure:

**File Naming**: Use PascalCase for component files (`LoadingScreen.tsx`). Use camelCase for utility files (`utils.ts`). Use kebab-case for CSS files (`index.css`).

**Component Structure**: Props interface at top. State declarations. Effects and handlers. Render logic. Export at bottom.

**Imports**: Group imports: React, third-party, local components, utilities, types. Sort alphabetically within groups.

---

## Testing Components

### Manual Testing Checklist

When testing components, verify:

- [ ] Component renders without errors
- [ ] All props work as expected
- [ ] Responsive behavior on mobile/tablet/desktop
- [ ] Keyboard navigation functions correctly
- [ ] Screen reader announces content properly
- [ ] Animations perform smoothly (60fps)
- [ ] No console errors or warnings
- [ ] State updates work correctly
- [ ] Event handlers fire as expected
- [ ] Loading and error states display properly

### Browser Testing

Test components in:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Future Component Additions

### Planned Components

**FAQ Accordion**
- Expandable question/answer cards
- Smooth height transitions
- Keyboard navigation support

**Newsletter Signup**
- Email input with validation
- Arcade-style submit button
- Success/error toast notifications
- Integration with email service

**Team Section**
- Pixel art avatars
- Role badges
- Social media links
- Hover effects with bios

**Tournament Registration**
- Multi-step form
- Wallet connection check
- Entry fee payment
- Confirmation modal

---

## Component Dependencies

### Dependency Graph

```
App
├── ThemeProvider
│   └── SoundProvider
│       ├── Landing
│       │   └── (video, countdown, skip button)
│       └── Home
│           ├── LoadingScreen
│           ├── MobileNav
│           │   ├── SoundToggle
│           │   └── WalletButton
│           ├── PixelParticles
│           ├── SoundToggle
│           ├── WalletButton
│           ├── Roadmap
│           └── ScrollToTop
```

### Shared Dependencies

All components depend on:

- React 19
- TypeScript 5.6
- Tailwind CSS 4
- Lucide React (icons)

Feature components additionally use:

- shadcn/ui components
- Framer Motion (some animations)
- Custom hooks (useSound, useTheme)

---

**For questions or contributions, see the main README.md**
