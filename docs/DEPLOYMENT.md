# Deployment Guide

This guide covers deploying the Meme Kart Racing website to various hosting platforms and configuring production environments.

## Table of Contents

- [Manus Hosting](#manus-hosting)
- [Alternative Hosting Platforms](#alternative-hosting-platforms)
- [Custom Domain Configuration](#custom-domain-configuration)
- [Environment Variables](#environment-variables)
- [Web3 Configuration](#web3-configuration)
- [Performance Optimization](#performance-optimization)
- [Monitoring and Maintenance](#monitoring-and-maintenance)

---

## Manus Hosting

Manus provides integrated hosting with automatic CI/CD, custom domains, and global CDN distribution.

### Initial Deployment

The website is already deployed on Manus. To deploy updates, follow the checkpoint and publish workflow.

#### Creating a Checkpoint

Checkpoints are snapshots of your project at specific points in time. They serve as deployment candidates and rollback points.

**Via Manus UI:**

1. Make changes to your website in the Manus editor
2. Test changes in the preview panel
3. Click "Save Checkpoint" in the Management UI
4. Enter a descriptive message explaining the changes
5. Wait for the checkpoint to be created (usually 10-30 seconds)

**What gets saved:**
- All source code files
- Dependencies and lock files
- Configuration files
- Build artifacts
- Git commit hash

**Checkpoint metadata:**
- Version ID (unique identifier)
- Timestamp
- Description
- Screenshot of the preview
- Git commit reference

#### Publishing to Production

Once you have a checkpoint, you can publish it to make it live.

**Steps:**

1. Navigate to the checkpoint list in Management UI
2. Find the checkpoint you want to publish
3. Click the "Publish" button
4. Confirm the deployment
5. Wait for deployment to complete (usually 1-2 minutes)

**What happens during publish:**
- Code is built for production (`pnpm build`)
- Assets are optimized and minified
- Files are uploaded to CDN
- DNS records are updated
- SSL certificates are provisioned/renewed
- Cache is invalidated

**Post-deployment:**
- Your site is live at the custom domain
- Previous version remains accessible via checkpoint history
- Analytics start tracking visitors
- Uptime monitoring begins

### Rolling Back

If a deployment introduces issues, you can quickly roll back to a previous checkpoint.

**Steps:**

1. Go to checkpoint history in Management UI
2. Find the last known good checkpoint
3. Click "Rollback" button
4. Confirm the rollback
5. Wait for redeployment (1-2 minutes)

**Important notes:**
- Rollback creates a new checkpoint
- Original checkpoints are preserved
- Database changes are NOT rolled back
- User data remains intact

### Continuous Deployment

For automated deployments, you can enable GitHub sync to deploy on every push.

**Setup:**

1. Go to Settings → GitHub in Management UI
2. Connect your GitHub repository
3. Enable "Auto-deploy on push"
4. Select branch to deploy from (usually `main`)
5. Save settings

**Workflow:**

```bash
# Make changes locally
git add .
git commit -m "feat: add new feature"
git push origin main

# Manus automatically:
# 1. Detects the push
# 2. Creates a checkpoint
# 3. Runs build
# 4. Publishes if build succeeds
```

---

## Alternative Hosting Platforms

While Manus is recommended, you can deploy to other platforms if needed.

### Vercel

Vercel provides excellent performance for React applications with automatic deployments from Git.

#### Setup

**Install Vercel CLI:**

```bash
npm i -g vercel
```

**Login:**

```bash
vercel login
```

#### Deployment

**First deployment:**

```bash
# Navigate to project directory
cd retro-meme-gaming

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? meme-kart-racing
# - Directory? ./
# - Override settings? No
```

**Subsequent deployments:**

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Configuration

Create `vercel.json` in project root:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

#### Environment Variables

Add environment variables in Vercel dashboard:

1. Go to project settings
2. Navigate to Environment Variables
3. Add variables (see [Environment Variables](#environment-variables) section)
4. Redeploy for changes to take effect

### Netlify

Netlify offers similar features to Vercel with a generous free tier.

#### Setup

**Install Netlify CLI:**

```bash
npm i -g netlify-cli
```

**Login:**

```bash
netlify login
```

#### Deployment

**First deployment:**

```bash
# Navigate to project directory
cd retro-meme-gaming

# Build the project
pnpm build

# Deploy
netlify deploy

# Follow prompts:
# - Create new site
# - Team: Your team
# - Site name: meme-kart-racing
# - Publish directory: dist/public
```

**Deploy to production:**

```bash
netlify deploy --prod
```

#### Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "22"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Docker Deployment

For self-hosted or cloud deployments, use Docker for consistent environments.

#### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build for production
RUN pnpm build

# Production stage
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm and production dependencies only
RUN npm install -g pnpm && \
    pnpm install --prod --frozen-lockfile

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start server
CMD ["pnpm", "start"]
```

#### Docker Compose

Create `docker-compose.yml` for local development:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - VITE_PRIVY_APP_ID=${VITE_PRIVY_APP_ID}
    restart: unless-stopped
```

#### Build and Run

```bash
# Build image
docker build -t meme-kart-racing .

# Run container
docker run -p 3000:3000 meme-kart-racing

# Or use docker-compose
docker-compose up -d
```

---

## Custom Domain Configuration

### Manus Custom Domain

Configure your custom domain to point to your Manus-hosted site.

#### Steps

**1. Add Domain in Manus**

1. Go to Settings → Domains in Management UI
2. Click "Add Custom Domain"
3. Enter your domain: `memekartracing.com`
4. Optionally add `www.memekartracing.com`
5. Click "Add Domain"

**2. Get DNS Records**

Manus will provide DNS records to add at your registrar:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `123.45.67.89` | 3600 |
| CNAME | www | `your-site.manus.space` | 3600 |

**3. Update DNS at Registrar**

The process varies by registrar, but generally:

**GoDaddy:**
1. Log in to GoDaddy
2. Go to My Products → Domains
3. Click DNS next to your domain
4. Add/edit records as provided by Manus
5. Save changes

**Namecheap:**
1. Log in to Namecheap
2. Go to Domain List
3. Click Manage next to your domain
4. Go to Advanced DNS tab
5. Add/edit records as provided by Manus
6. Save changes

**Cloudflare:**
1. Log in to Cloudflare
2. Select your domain
3. Go to DNS settings
4. Add/edit records as provided by Manus
5. Ensure proxy status is correct (usually DNS only for A records)
6. Save changes

**4. Wait for Propagation**

DNS changes can take 24-48 hours to propagate globally, though often it's much faster (1-2 hours).

**Check propagation status:**
- Visit https://whatsmydns.net
- Enter your domain
- Select A or CNAME record type
- Check if new values appear globally

**5. Verify SSL Certificate**

Manus automatically provisions SSL certificates via Let's Encrypt. Once DNS propagates:

1. Visit `https://yourdomain.com`
2. Check for padlock icon in browser
3. Click padlock to view certificate details
4. Verify it's issued by Let's Encrypt

**Troubleshooting SSL:**
- If certificate doesn't provision, check DNS records
- Ensure domain points to correct Manus servers
- Wait 24 hours for automatic retry
- Contact Manus support if issues persist

### Domain Best Practices

**Use HTTPS Only**
- Always use `https://` in links
- Enable HSTS (HTTP Strict Transport Security)
- Redirect HTTP to HTTPS automatically

**Configure WWW Redirect**
- Choose primary version: `example.com` or `www.example.com`
- Redirect other version to primary (301 redirect)
- Update all marketing materials with primary version

**Set Up Email**
- Configure MX records for email
- Use separate email hosting (Google Workspace, Microsoft 365)
- Don't rely on domain registrar email

---

## Environment Variables

Environment variables configure the application for different environments.

### Required Variables

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Environment mode | `production` | Yes |
| `VITE_PRIVY_APP_ID` | Privy App ID for wallet auth | `clp...` | Optional |

### Manus Environment Variables

Manus automatically injects these variables:

| Variable | Description | Auto-injected |
|----------|-------------|---------------|
| `VITE_ANALYTICS_ENDPOINT` | Analytics server URL | Yes |
| `VITE_ANALYTICS_WEBSITE_ID` | Site ID for analytics | Yes |
| `VITE_APP_ID` | Manus app identifier | Yes |
| `VITE_APP_TITLE` | Site title | Yes |
| `VITE_APP_LOGO` | Logo URL | Yes |

### Setting Environment Variables

**Local Development:**

Create `.env` file in project root:

```env
NODE_ENV=development
VITE_PRIVY_APP_ID=your_privy_app_id_here
```

**Manus Production:**

1. Go to Settings → Secrets in Management UI
2. Click "Add Secret"
3. Enter key: `VITE_PRIVY_APP_ID`
4. Enter value: Your Privy App ID
5. Save
6. Redeploy for changes to take effect

**Vercel:**

```bash
vercel env add VITE_PRIVY_APP_ID
# Enter value when prompted
# Select environments: Production, Preview, Development
```

**Netlify:**

```bash
netlify env:set VITE_PRIVY_APP_ID "your_value_here"
```

### Accessing Environment Variables

In Vite, environment variables are accessed via `import.meta.env`:

```typescript
const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;
const isProduction = import.meta.env.PROD;
const isDevelopment = import.meta.env.DEV;
```

**Important notes:**
- Only variables prefixed with `VITE_` are exposed to client code
- Never commit `.env` files to Git
- Use different values for development and production
- Rebuild after changing environment variables

---

## Web3 Configuration

### Privy Setup

Privy provides wallet authentication and user onboarding for Web3 applications.

#### Creating a Privy App

1. Visit [dashboard.privy.io](https://dashboard.privy.io)
2. Sign up or log in
3. Click "Create App"
4. Enter app details:
   - Name: Meme Kart Racing
   - Description: Retro GameFi racing platform
   - URL: https://www.memekartracing.com
5. Click "Create"
6. Copy your App ID (starts with `clp`)

#### Configuring Privy

**1. Add App ID to Environment**

```env
VITE_PRIVY_APP_ID=clpXXXXXXXXXXXXXXXXXX
```

**2. Enable Privy Provider**

Edit `client/src/App.tsx`:

```typescript
import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { privyConfig, wagmiConfig } from './lib/privy-config';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <PrivyProvider
        appId={import.meta.env.VITE_PRIVY_APP_ID}
        config={privyConfig}
      >
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>
            <ThemeProvider defaultTheme="dark">
              <SoundProvider>
                <TooltipProvider>
                  <Toaster />
                  <Router />
                </TooltipProvider>
              </SoundProvider>
            </ThemeProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </ErrorBoundary>
  );
}
```

**3. Update Wallet Button**

Edit `client/src/components/WalletButton.tsx`:

```typescript
import { usePrivy } from '@privy-io/react-auth';

export default function WalletButton() {
  const { login, logout, authenticated, user } = usePrivy();

  const handleClick = () => {
    if (authenticated) {
      logout();
    } else {
      login();
    }
  };

  return (
    <Button onClick={handleClick} className="btn-arcade">
      {authenticated 
        ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}`
        : "CONNECT WALLET"
      }
    </Button>
  );
}
```

#### Privy Configuration Options

The Privy configuration in `client/src/lib/privy-config.ts` supports:

**Login Methods:**
- Email (passwordless)
- Google OAuth
- Twitter OAuth
- Discord OAuth
- MetaMask
- Coinbase Wallet
- WalletConnect
- Embedded wallets

**Appearance:**
- Logo customization
- Color scheme (matches site theme)
- Custom branding

**Embedded Wallets:**
- Automatic wallet creation for email/social users
- No browser extension required
- Secure key management

**Network Configuration:**
- Ethereum Mainnet (Chain ID: 1)
- Base L2 (Chain ID: 8453)
- Automatic network switching

### Blockchain Network Setup

The website supports two blockchain networks for different purposes.

#### Ethereum Mainnet

**Purpose:** Primary token ($RMG) and high-value NFTs

**Configuration:**

```typescript
{
  id: 1,
  name: 'Ethereum',
  network: 'homestead',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY']
    }
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://etherscan.io'
    }
  }
}
```

**RPC Providers:**
- Alchemy (recommended): https://www.alchemy.com
- Infura: https://infura.io
- QuickNode: https://www.quicknode.com

#### Base L2

**Purpose:** In-game transactions, low gas fees

**Configuration:**

```typescript
{
  id: 8453,
  name: 'Base',
  network: 'base',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.base.org']
    }
  },
  blockExplorers: {
    default: {
      name: 'BaseScan',
      url: 'https://basescan.org'
    }
  }
}
```

**Why Base:**
- Low transaction fees (< $0.01)
- Fast block times (2 seconds)
- Ethereum-compatible
- Growing ecosystem
- Coinbase backing

### Smart Contract Integration

When smart contracts are deployed, integrate them into the website.

#### Contract Configuration

Create `client/src/lib/contracts.ts`:

```typescript
export const contracts = {
  rmgToken: {
    address: '0x...' as `0x${string}`,
    abi: [...] as const,
    chainId: 1 // Ethereum Mainnet
  },
  nftMarketplace: {
    address: '0x...' as `0x${string}`,
    abi: [...] as const,
    chainId: 8453 // Base L2
  }
};
```

#### Reading Contract Data

```typescript
import { useReadContract } from 'wagmi';
import { contracts } from '@/lib/contracts';

function TokenBalance() {
  const { data: balance } = useReadContract({
    ...contracts.rmgToken,
    functionName: 'balanceOf',
    args: [userAddress]
  });

  return <div>Balance: {balance?.toString()}</div>;
}
```

#### Writing to Contracts

```typescript
import { useWriteContract } from 'wagmi';
import { contracts } from '@/lib/contracts';

function BuyNFT() {
  const { writeContract } = useWriteContract();

  const handleBuy = async () => {
    writeContract({
      ...contracts.nftMarketplace,
      functionName: 'buyNFT',
      args: [tokenId],
      value: parseEther('0.1')
    });
  };

  return <Button onClick={handleBuy}>Buy NFT</Button>;
}
```

---

## Performance Optimization

### Build Optimization

Optimize the production build for faster loading and better performance.

#### Vite Configuration

Edit `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'web3-vendor': ['@privy-io/react-auth', 'wagmi', 'viem']
        }
      }
    },
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  }
});
```

#### Asset Optimization

**Images:**
- Use WebP format for better compression
- Serve multiple sizes for responsive images
- Lazy load below-fold images
- Use CDN for image delivery

**Fonts:**
- Subset fonts to include only used characters
- Use `font-display: swap` for faster rendering
- Preload critical fonts

**Videos:**
- Compress videos with H.264 codec
- Provide multiple quality levels
- Use poster images for thumbnails
- Lazy load videos

### Runtime Optimization

Optimize the application's runtime performance.

#### Code Splitting

Split code into smaller chunks for faster initial load:

```typescript
// Lazy load heavy components
const Roadmap = lazy(() => import('@/components/Roadmap'));
const PixelParticles = lazy(() => import('@/components/PixelParticles'));

// Use with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Roadmap />
</Suspense>
```

#### Memoization

Prevent unnecessary re-renders:

```typescript
// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);

// Memoize callbacks
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);

// Memoize components
const MemoizedComponent = memo(Component);
```

#### Debouncing

Debounce frequent events:

```typescript
const debouncedSearch = useMemo(
  () => debounce((query: string) => {
    performSearch(query);
  }, 300),
  []
);
```

### Caching Strategy

Implement aggressive caching for static assets.

#### Service Worker

Create `client/public/sw.js`:

```javascript
const CACHE_NAME = 'meme-kart-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index.css',
  '/assets/index.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

Register in `client/src/main.tsx`:

```typescript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
```

---

## Monitoring and Maintenance

### Uptime Monitoring

Set up monitoring to detect downtime immediately.

#### UptimeRobot Setup

1. Visit [uptimerobot.com](https://uptimerobot.com)
2. Create free account
3. Click "Add New Monitor"
4. Configure monitor:
   - Monitor Type: HTTP(s)
   - Friendly Name: Meme Kart Racing
   - URL: https://www.memekartracing.com
   - Monitoring Interval: 5 minutes
5. Add alert contacts (email, SMS)
6. Save monitor

**What it monitors:**
- HTTP status codes (200 = OK)
- Response time
- SSL certificate validity
- DNS resolution

**Alerts sent for:**
- Site down (non-200 status)
- Slow response (> 5 seconds)
- SSL expiring soon
- DNS issues

#### Alternative Monitoring Services

**Pingdom:**
- Free tier: 1 monitor
- 1-minute checks
- Detailed reports
- https://www.pingdom.com

**Better Uptime:**
- Free tier: 10 monitors
- 3-minute checks
- Incident management
- https://betteruptime.com

**StatusCake:**
- Free tier: 10 monitors
- 5-minute checks
- Page speed monitoring
- https://www.statuscake.com

### Analytics

Track visitor behavior and site performance.

#### Built-in Analytics

Manus provides built-in analytics automatically:

1. Go to Dashboard in Management UI
2. View metrics:
   - Unique visitors (UV)
   - Page views (PV)
   - Bounce rate
   - Average session duration
   - Top pages
   - Traffic sources

#### Google Analytics 4

For more detailed analytics, add Google Analytics:

**1. Create GA4 Property**

1. Visit [analytics.google.com](https://analytics.google.com)
2. Create account and property
3. Copy Measurement ID (G-XXXXXXXXXX)

**2. Add to Website**

Edit `client/index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

**3. Track Custom Events**

```typescript
// Track button clicks
const handleClick = () => {
  gtag('event', 'button_click', {
    button_name: 'connect_wallet'
  });
};

// Track page views
useEffect(() => {
  gtag('event', 'page_view', {
    page_path: location.pathname
  });
}, [location]);
```

### Error Tracking

Monitor and fix errors in production.

#### Sentry Setup

1. Visit [sentry.io](https://sentry.io)
2. Create account and project
3. Copy DSN

**Install Sentry:**

```bash
pnpm add @sentry/react
```

**Configure in `client/src/main.tsx`:**

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://xxxxx@sentry.io/xxxxx",
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay()
  ]
});
```

**Wrap App with ErrorBoundary:**

```typescript
import { ErrorBoundary } from "@sentry/react";

<ErrorBoundary fallback={<ErrorFallback />}>
  <App />
</ErrorBoundary>
```

### Performance Monitoring

Track Core Web Vitals and performance metrics.

#### Web Vitals

Install web-vitals:

```bash
pnpm add web-vitals
```

Track metrics in `client/src/main.tsx`:

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to Google Analytics
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_category: 'Web Vitals',
    non_interaction: true
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

**Target metrics:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Backup and Recovery

Implement backup strategies to prevent data loss.

#### Manus Checkpoints

Checkpoints serve as automatic backups:

- Created manually or automatically
- Stored indefinitely
- Instant rollback capability
- Includes all code and configuration

**Best practices:**
- Create checkpoint before major changes
- Use descriptive checkpoint messages
- Test rollback procedure periodically
- Keep at least 3 recent checkpoints

#### GitHub Backup

GitHub serves as an additional backup:

- Push code regularly
- Tag releases (v1.0.0, v1.1.0)
- Use branches for features
- Enable branch protection

```bash
# Tag a release
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0

# Create backup branch
git checkout -b backup/2026-02-15
git push origin backup/2026-02-15
```

---

## Deployment Checklist

Before deploying to production, verify:

### Pre-Deployment

- [ ] All tests pass
- [ ] No TypeScript errors (`pnpm check`)
- [ ] Code formatted (`pnpm format`)
- [ ] Environment variables configured
- [ ] Assets optimized (images, videos)
- [ ] Dependencies up to date
- [ ] Security vulnerabilities fixed
- [ ] Performance tested (Lighthouse score > 90)
- [ ] Accessibility tested (WCAG 2.1 AA)
- [ ] Cross-browser tested
- [ ] Mobile responsive verified
- [ ] SEO metadata complete

### Deployment

- [ ] Create checkpoint with descriptive message
- [ ] Review changes in preview
- [ ] Publish to production
- [ ] Verify deployment succeeded
- [ ] Test live site functionality
- [ ] Check custom domain works
- [ ] Verify SSL certificate valid
- [ ] Test wallet connection (if enabled)
- [ ] Check analytics tracking

### Post-Deployment

- [ ] Monitor error rates (Sentry)
- [ ] Check uptime status (UptimeRobot)
- [ ] Review performance metrics (Web Vitals)
- [ ] Test critical user flows
- [ ] Announce deployment to team
- [ ] Update documentation if needed
- [ ] Create backup checkpoint
- [ ] Monitor user feedback

---

## Troubleshooting

### Common Deployment Issues

**Build Fails**

```bash
# Clear cache and rebuild
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

**Environment Variables Not Working**

- Ensure variables are prefixed with `VITE_`
- Rebuild after changing variables
- Check variable is set in correct environment
- Verify no typos in variable names

**Custom Domain Not Working**

- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Check domain isn't expired
- Ensure no DNSSEC issues
- Try flushing DNS cache locally

**SSL Certificate Issues**

- Verify domain points to correct servers
- Wait 24 hours for auto-provisioning
- Check for CAA records blocking Let's Encrypt
- Contact hosting support if persists

**Wallet Connection Fails**

- Check Privy App ID is correct
- Verify network configuration
- Ensure user has wallet installed
- Check browser console for errors
- Test with different wallet providers

---

**For additional support, contact Manus support at https://help.manus.im**
