/**
 * Privy Configuration
 * ETH mainnet + Base L2 support for web3 payments
 */

import { mainnet, base } from 'wagmi/chains';

export const privyAppId = 'clzexample123'; // Demo app ID - replace with actual Privy App ID from dashboard

export const privyClientConfig = {
  appearance: {
    theme: 'dark' as const,
    accentColor: '#00d9ff' as `#${string}`,
    logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663336128011/logo.png',
  },
  loginMethods: ['email' as const, 'wallet' as const, 'google' as const],
  embeddedWallets: {
    createOnLogin: 'users-without-wallets' as const,
    requireUserPasswordOnCreate: false,
  } as any,
  defaultChain: base,
  supportedChains: [mainnet, base],
};

export const wagmiChains = [mainnet, base];
