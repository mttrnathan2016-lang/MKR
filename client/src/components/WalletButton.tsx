/**
 * Wallet Connection Button
 * Placeholder for Privy integration - requires valid Privy App ID
 */

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function WalletButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = async () => {
    // Placeholder for Privy wallet connection
    // To activate: Replace 'clzexample123' in lib/privy-config.ts with your actual Privy App ID from https://dashboard.privy.io
    toast.info("Wallet connection requires Privy App ID configuration", {
      description: "Visit dashboard.privy.io to get your App ID and update lib/privy-config.ts"
    });
    
    // Demo connection for UI testing
    setIsConnected(true);
    setAddress("0x1234...5678");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress("");
    toast.success("Wallet disconnected");
  };

  return (
    <Button 
      className="btn-arcade"
      onClick={isConnected ? handleDisconnect : handleConnect}
    >
      {isConnected ? `${address}` : 'CONNECT WALLET'}
    </Button>
  );
}
