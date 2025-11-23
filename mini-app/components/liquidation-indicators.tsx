"use client";

import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";

export default function LiquidationIndicators() {
  // Placeholder data
  const indicators = [
    { id: 1, name: "Liquidation Threshold", value: "75%" },
    { id: 2, name: "Current Price", value: "$1200" },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h3 className="text-lg font-semibold">Liquidation Indicators</h3>
      </CardHeader>
      <CardContent>
        {indicators.map((i) => (
          <div key={i.id} className="flex justify-between py-1">
            <span>{i.name}</span>
            <span>{i.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
