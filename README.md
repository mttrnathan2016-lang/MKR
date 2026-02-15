# Meme Kart Racing - Retro GameFi Website

**Classic arcade chaos re-engineered for the modern internet.**

A cyberpunk arcade-themed website for Meme Kart Racing, a Web3 gaming platform that combines retro meme games with blockchain technology. Built with React 19, Tailwind CSS 4, and modern web standards.

![Meme Kart Racing](https://www.memekartracing.com)

## Overview

Meme Kart Racing is a Web2/Web3 hybrid racing game featuring iconic meme characters (Doge, Pepe, PNUT) in competitive kart racing. This website serves as the primary marketing and community hub, showcasing gameplay, tokenomics, NFT marketplace, and roadmap.

### Design Philosophy

The website embraces a **Cyberpunk Arcade Noir** aesthetic that merges 1980s arcade culture with modern UX principles. The design features deep void blacks, neon accents (green, cyan, magenta), pixel fonts, CRT scanline effects, and smooth animations to create an immersive retro-futuristic experience.

**Key Design Principles:**
- **Retro visuals, modern UX**: Looks like 1992, feels like 2026
- **High contrast neon-on-black**: Electric cyan, hot magenta, toxic green on void black
- **Pixel perfect typography**: Press Start 2P for headlines, VT323 for mono, Space Grotesk for body
- **Arcade interactions**: Button press animations, 3D card tilts, glitch effects
- **Smooth motion**: GSAP-quality easing, parallax layers, animated sprites

## Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript 5.6** - Type-safe development
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS with custom design tokens
- **Wouter 3** - Lightweight client-side routing

### UI Components
- **shadcn/ui** - Accessible, customizable component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Advanced animation library

### Web3 Integration (Ready)
- **Privy** - Wallet authentication and user onboarding
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript Ethereum library
- **Supported Networks**: Ethereum Mainnet, Base L2

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Project Structure

```
retro-meme-gaming/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── PixelParticles.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── SoundToggle.tsx
│   │   │   └── WalletButton.tsx
│   │   ├── contexts/         # React contexts
│   │   │   ├── SoundContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/             # Utility functions
│   │   │   ├── privy-config.ts
│   │   │   └── utils.ts
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Landing.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx          # Root component with routing
│   │   ├── main.tsx         # Application entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── server/                   # Server configuration (static hosting)
│   └── index.ts
├── shared/                   # Shared types and constants
│   └── const.ts
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── tailwind.config.ts       # Tailwind configuration
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (22.13.0 recommended)
- **pnpm** 10+ (package manager)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mttrnathan2016-lang/MKR.git
   cd MKR
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

   The site will be available at `http://localhost:3000`

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

## Features

### 🎮 Core Features

**Landing Page with Video Intro**
- Full-screen marketing video background
- Animated MK logo with neon glow
- Auto-skip countdown (10 seconds)
- First-visit detection with localStorage

**Hero Section**
- Animated pixel particle effect (50+ floating shapes)
- CRT scanline overlay
- Neon typography with glow effects
- Social share buttons (X, Facebook)

**Interactive Roadmap**
- 7-week launch timeline
- Expandable phase cards
- Animated progress indicators
- Detailed deliverables per phase

**Character Showcase**
- Animated sprite characters (Doge, Pepe, PNUT)
- Stat cards with neon borders
- Hover effects and animations

**Tokenomics Section**
- $RMG token distribution breakdown
- Visual allocation cards
- Staking and rewards information

**NFT Marketplace Preview**
- Benefit cards with animated icons
- Rarity tiers and utilities
- "Coming Soon" placeholders

**Community Hub**
- Embedded YouTube latest video
- Social media links (X, Facebook, YouTube, Telegram)
- Hover effects with neon glow

**Whitepaper Download**
- Animated document icon
- Direct PDF download link
- Arcade-style card design

### 🎨 Design Features

**Sound System**
- Web Audio API-generated retro sounds
- Toggle button in header (volume icon)
- Sound effects: click, hover, coin, powerup
- localStorage preference persistence

**Mobile Navigation**
- Slide-in drawer from right
- Animated hamburger → X icon
- Dark backdrop overlay
- All navigation links + wallet button

**Scroll-to-Top Button**
- Floating button (bottom-right)
- Appears after 300px scroll
- Neon glow with arcade press animation
- Smooth scroll behavior

**Loading Screen**
- Retro arcade startup animation
- MK logo with spinning ring
- Pixel art loading bar (0-100%)
- "INSERT COIN" bouncing text
- CRT scanlines overlay

**Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Optimized for all screen sizes

## Design System

### Color Palette

The website uses a cyberpunk-inspired color scheme defined in CSS variables:

| Color | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Neon Green | `--color-neon-green` | `#00FF9F` | Primary accent, CTAs |
| Cyber Cyan | `--color-cyber-cyan` | `#00F2FE` | Secondary accent, links |
| Hot Magenta | `--color-hot-magenta` | `#FF007F` | Tertiary accent, highlights |
| Electric Yellow | `--color-electric-yellow` | `#FFD700` | Quaternary accent, warnings |
| Void Black | `--color-void-black` | `#0A0A0F` | Background |
| Deep Space | `--color-deep-space` | `#13131A` | Card backgrounds |

### Typography

**Pixel Fonts (Headers)**
- **Press Start 2P** - Main headlines, arcade text
- **VT323** - Monospace pixel font for technical text

**Modern Fonts (Body)**
- **Space Grotesk** - Body text, readable paragraphs
- **System Fonts** - Fallback for performance

### Spacing System

Tailwind's default spacing scale (0.25rem increments):
- `p-2` = 0.5rem (8px)
- `p-4` = 1rem (16px)
- `p-6` = 1.5rem (24px)
- `p-8` = 2rem (32px)

### Animation Classes

Custom animation utilities defined in `index.css`:

| Class | Effect | Duration |
|-------|--------|----------|
| `animate-float` | Vertical floating | 3s |
| `animate-pulse-slow` | Slow pulsing | 4s |
| `animate-bounce-slow` | Slow bouncing | 2s |
| `animate-spin-slow` | Slow rotation | 8s |
| `animate-glow` | Neon glow pulse | 2s |
| `animate-fade-in-up` | Fade in + slide up | 0.6s |

### Neon Glow Effects

```css
.neon-glow-green { /* Green neon text shadow */ }
.neon-glow-cyan { /* Cyan neon text shadow */ }
.neon-glow-magenta { /* Magenta neon text shadow */ }
.neon-glow-yellow { /* Yellow neon text shadow */ }
```

## Component Documentation

### Core Components

#### `<LoadingScreen />`
Retro arcade loading screen with animated logo and progress bar.

**Props:** None

**Features:**
- Auto-advances from 0-100%
- Animated MK logo with spinning ring
- Pixel art loading bar with gradient
- Bouncing "INSERT COIN" text
- CRT scanlines overlay

#### `<PixelParticles />`
Canvas-based animated particle effect for hero section.

**Props:** None

**Features:**
- 50 floating geometric shapes (square, circle, triangle)
- Neon colors (green, cyan, magenta, yellow)
- Rotation animations
- Connecting lines between nearby particles
- 60fps performance

#### `<MobileNav />`
Responsive mobile navigation drawer.

**Props:** None

**Features:**
- Slide-in animation from right
- Animated hamburger → X toggle
- Dark backdrop with click-to-close
- All navigation links
- Integrated wallet button

#### `<ScrollToTop />`
Floating scroll-to-top button.

**Props:** None

**Features:**
- Appears after 300px scroll
- Neon green glow
- Arcade press animation
- Smooth scroll to top

#### `<SoundToggle />`
Sound effects toggle button.

**Props:** None

**Features:**
- Volume/mute icon switch
- Plays coin sound when unmuting
- localStorage persistence
- Integrates with SoundContext

#### `<Roadmap />`
Interactive 7-week launch timeline.

**Props:** None

**Features:**
- Expandable phase cards
- Animated progress indicators
- Detailed deliverables per phase
- Responsive layout

#### `<WalletButton />`
Wallet connection button (Privy integration ready).

**Props:** None

**Features:**
- "CONNECT WALLET" CTA
- Neon green styling
- Hover effects
- Ready for Privy integration

### Context Providers

#### `SoundContext`
Manages arcade sound effects throughout the app.

**Exports:**
- `SoundProvider` - Wrap app to enable sounds
- `useSound()` - Hook to access sound functions

**API:**
```typescript
const { playSound, isMuted, toggleMute } = useSound();

// Play a sound
playSound("click"); // "click" | "hover" | "coin" | "powerup"

// Check mute state
if (!isMuted) { /* ... */ }

// Toggle mute
toggleMute();
```

#### `ThemeContext`
Manages dark/light theme (currently dark only).

**Exports:**
- `ThemeProvider` - Wrap app to enable theming
- `useTheme()` - Hook to access theme functions

## Web3 Integration

### Wallet Authentication (Privy)

The website is configured for Privy wallet authentication but requires a valid App ID to activate.

**Setup Instructions:**

1. **Get Privy App ID**
   - Visit [dashboard.privy.io](https://dashboard.privy.io)
   - Create a new app
   - Copy your App ID

2. **Configure Environment**
   Create `.env` file:
   ```
   VITE_PRIVY_APP_ID=your_app_id_here
   ```

3. **Enable Privy Provider**
   Uncomment lines in `client/src/App.tsx`:
   ```typescript
   import { PrivyProvider } from '@privy-io/react-auth';
   import { WagmiProvider } from 'wagmi';
   import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
   import { privyConfig, wagmiConfig } from './lib/privy-config';
   ```

4. **Supported Features**
   - Email login
   - Google OAuth
   - MetaMask, Coinbase Wallet, WalletConnect
   - Embedded wallets
   - Multi-chain support (ETH Mainnet, Base L2)

### Blockchain Networks

| Network | Chain ID | Purpose |
|---------|----------|---------|
| Ethereum Mainnet | 1 | Primary token ($RMG) |
| Base L2 | 8453 | In-game transactions, low gas |

### Payment Flow (Planned)

1. User connects wallet via Privy
2. Selects item to purchase (character, upgrade, NFT)
3. Checkout modal with Sequence integration
4. Cross-chain swap (any token → ETH/Base)
5. Transaction confirmation
6. Backend verifies payment
7. Item granted in PlayFab
8. Game reads PlayFabID and unlocks item

## Deployment

### Manus Hosting (Current)

The website is deployed on Manus with automatic CI/CD:

1. **Create Checkpoint**
   - Make changes in Manus
   - Save checkpoint with description

2. **Publish**
   - Click "Publish" button in Management UI
   - Site deploys to CDN automatically

3. **Custom Domain**
   - Settings → Domains
   - Add `memekartracing.com`
   - Update DNS records at registrar
   - SSL auto-provisioned

**Live URLs:**
- Production: https://www.memekartracing.com
- Dev Preview: https://3000-i9f7fcl9gsvcgq735lene-38095cbd.sg1.manus.computer

### Alternative Hosting

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify

```bash
# Build
pnpm build

# Deploy dist/ folder via Netlify UI or CLI
netlify deploy --prod --dir=dist/public
```

#### Docker

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_PRIVY_APP_ID` | Privy App ID for wallet auth | Optional |
| `VITE_ANALYTICS_ENDPOINT` | Analytics endpoint | Auto-injected |
| `VITE_ANALYTICS_WEBSITE_ID` | Analytics site ID | Auto-injected |

### Vite Configuration

Key settings in `vite.config.ts`:
- React plugin with SWC
- Path aliases (`@/` → `client/src/`)
- Development server on port 3000
- Build output to `dist/public`

### Tailwind Configuration

Custom configuration in `client/src/index.css`:
- Dark theme by default
- Custom color palette (OKLCH format)
- Custom animations
- Custom container utility
- CRT scanline effects

## Performance Optimization

### Current Optimizations

**Code Splitting**
- Route-based code splitting with React.lazy
- Component-level lazy loading for heavy components

**Asset Optimization**
- Images served via CDN with WebP format
- Video hosted on CDN with compression
- Font subsetting for pixel fonts

**Bundle Size**
- Tree-shaking enabled
- Production builds minified
- Gzip compression

**Runtime Performance**
- Canvas animations use requestAnimationFrame
- Sound effects use Web Audio API (no file loading)
- Particle count optimized for 60fps
- Debounced scroll listeners

### Recommended Improvements

1. **Image Optimization**
   - Add `loading="lazy"` to below-fold images
   - Use `<picture>` with multiple formats
   - Implement blur-up placeholders

2. **Code Splitting**
   - Lazy load Roadmap component
   - Lazy load Privy provider until wallet needed

3. **Caching**
   - Add service worker for offline support
   - Cache static assets aggressively

4. **Monitoring**
   - Add Web Vitals tracking
   - Implement error boundary logging
   - Set up uptime monitoring

## Browser Support

### Supported Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

### Required Features

- ES2020 JavaScript
- CSS Grid & Flexbox
- CSS Custom Properties
- Web Audio API
- Canvas API
- LocalStorage

## Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Check TypeScript
pnpm check
```

**Development Server Not Starting**

```bash
# Kill existing process on port 3000
lsof -ti:3000 | xargs kill -9

# Restart
pnpm dev
```

**Wallet Connection Fails**

1. Check Privy App ID is set in `.env`
2. Verify network configuration in `privy-config.ts`
3. Check browser console for errors
4. Ensure wallet extension is installed

**Sound Effects Not Playing**

1. Check browser autoplay policy
2. Verify sound toggle is not muted
3. Check browser console for Web Audio errors
4. Try user interaction before playing sound

## Contributing

### Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow existing code style
   - Add TypeScript types
   - Update documentation

3. **Test Locally**
   ```bash
   pnpm dev
   pnpm check
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- Use TypeScript for all new files
- Follow Prettier formatting (auto-format on save)
- Use functional components with hooks
- Prefer named exports over default exports
- Add JSDoc comments for complex functions

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Build process or auxiliary tool changes

## Roadmap

### Completed ✅

- [x] Cyberpunk arcade design system
- [x] Landing page with video intro
- [x] Animated hero section with particles
- [x] Interactive roadmap timeline
- [x] Character showcase with sprites
- [x] Tokenomics breakdown
- [x] NFT marketplace preview
- [x] Community hub with social links
- [x] Whitepaper download
- [x] Sound effects system
- [x] Mobile navigation
- [x] Scroll-to-top button
- [x] Loading screen animation
- [x] Privy wallet integration (ready)
- [x] Custom domain setup
- [x] GitHub repository

### In Progress 🚧

- [ ] FAQ accordion section
- [ ] Email newsletter signup
- [ ] Uptime monitoring setup

### Planned 📋

- [ ] Team/About section
- [ ] Blog/News section
- [ ] Tournament registration system
- [ ] Leaderboard integration
- [ ] Web3 payment checkout
- [ ] NFT minting interface
- [ ] Staking dashboard
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Accessibility audit (WCAG 2.1 AA)

## License

MIT License - See LICENSE file for details

## Support

For issues, questions, or feature requests:

- **GitHub Issues**: https://github.com/mttrnathan2016-lang/MKR/issues
- **Manus Support**: https://help.manus.im
- **Email**: support@memekartracing.com

## Credits

**Design & Development**: Manus AI  
**Marketing Video**: Retro Meme Gaming Team  
**Fonts**: Google Fonts (Press Start 2P, VT323, Space Grotesk)  
**Icons**: Lucide React  
**UI Components**: shadcn/ui, Radix UI  

---

**Built with ❤️ for the arcade generation**

*Classic arcade chaos re-engineered for the modern internet.*
