"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for small teams getting started",
      features: [
        "Up to 3 active job postings",
        "Basic candidate tracking",
        "Email notifications",
        "Standard job templates",
      ],
    },
    {
      name: "Pro",
      price: { monthly: 49, annual: 39 },
      description: "Ideal for growing companies",
      features: [
        "Up to 10 active job postings",
        "Advanced candidate tracking",
        "Custom workflows",
        "Team collaboration tools",
        "API access",
        "Priority support",
      ],
    },
    {
      name: "UltiPro",
      price: { monthly: 99, annual: 79 },
      description: "For enterprises with complex needs",
      features: [
        "Unlimited job postings",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom branding",
        "Advanced security features",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4">
        <Button
          variant={isAnnual ? "ghost" : "default"}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </Button>
        <Button
          variant={isAnnual ? "default" : "ghost"}
          onClick={() => setIsAnnual(true)}
        >
          Annual (20% off)
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-6">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">
                ${isAnnual ? plan.price.annual : plan.price.monthly}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {plan.description}
            </p>
            <Button className="w-full mt-6">Get Started</Button>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}