"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Web3Helper() {
  const [connected, setConnected] = useState(false);

  const connectWallet = () => {
    // Placeholder for wallet connection logic
    setConnected(true);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button onClick={connectWallet} disabled={connected}>
        {connected ? "Wallet Connected" : "Connect Wallet"}
      </Button>
    </div>
  );
}
