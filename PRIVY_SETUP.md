# Privy Wallet Integration Setup

This project is configured to use **Privy** for wallet authentication with support for:
- **ETH Mainnet** for main token operations
- **Base L2** for low-cost in-game transactions
- Email, wallet, and Google login methods
- Embedded wallet creation for users without wallets

## Setup Instructions

### 1. Get Your Privy App ID

1. Visit [https://dashboard.privy.io](https://dashboard.privy.io)
2. Create a new app or select an existing one
3. Copy your **App ID** (starts with `clz...`)

### 2. Configure the Project

1. Open `client/src/lib/privy-config.ts`
2. Replace `'clzexample123'` with your actual Privy App ID:

```typescript
export const privyAppId = 'YOUR_ACTUAL_APP_ID_HERE';
```

### 3. Enable Privy Provider

1. Open `client/src/App.tsx`
2. Uncomment the Privy imports at the top:

```typescript
import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider } from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { privyAppId, privyClientConfig } from './lib/privy-config';
import { http } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { createConfig } from '@privy-io/wagmi';

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [mainnet, base],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
```

3. Wrap the app with Privy providers:

```typescript
function App() {
  return (
    <ErrorBoundary>
      <PrivyProvider appId={privyAppId} config={privyClientConfig}>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>
            <ThemeProvider defaultTheme="dark">
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </ThemeProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </ErrorBoundary>
  );
}
```

### 4. Update Home Page

1. Open `client/src/pages/Home.tsx`
2. Replace `WalletButton` import with Privy hook:

```typescript
import { usePrivy } from '@privy-io/react-auth';

export default function Home() {
  const { ready, authenticated, login, logout, user } = usePrivy();
  
  // ... rest of component
  
  // Replace <WalletButton /> with:
  <Button 
    className="btn-arcade"
    onClick={() => authenticated ? logout() : login()}
    disabled={!ready}
  >
    {authenticated 
      ? `${user?.wallet?.address?.slice(0, 6)}...${user?.wallet?.address?.slice(-4)}` 
      : 'CONNECT WALLET'
    }
  </Button>
}
```

### 5. Test the Integration

1. Restart the dev server: `pnpm dev`
2. Click "CONNECT WALLET" button
3. Choose login method (email, wallet, or Google)
4. Verify wallet connection displays address

## Tech Stack

- **Privy**: Authentication & wallet management
- **Wagmi**: Ethereum interactions
- **Viem**: Ethereum utilities
- **Base L2**: Low-cost transactions for in-game purchases
- **ETH Mainnet**: Main token operations

## Payment Flow

1. User connects wallet via Privy
2. In-game purchases trigger checkout
3. Backend verifies payment on Base L2
4. Items granted via PlayFab
5. Game reads PlayFabID and unlocks content

## Resources

- [Privy Documentation](https://docs.privy.io)
- [Base Network](https://base.org)
- [Wagmi Documentation](https://wagmi.sh)
