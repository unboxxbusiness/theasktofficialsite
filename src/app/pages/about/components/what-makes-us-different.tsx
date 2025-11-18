"use client";

import {
  ShieldCheck,
  Smartphone,
  Users,
  Target,
  Heart,
} from "lucide-react";
import React from "react";

const differentiators = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "A Trust-Based Educational Model",
    description:
      "We operate with transparency, purpose, and impact — not profit-first priorities.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Learn From Your Phone",
    description:
      "We use a mobile-first learning system so women can learn easily, anytime.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Women-Only Supportive Community",
    description:
      "No judgment, no comparison — a safe space to learn and rise together.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Practical, Outcome-Based Learning",
    description:
      "Not theory for exams — skills for income, confidence, and independence.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Scholarships & Donor Support",
    description: "We believe money should never stop a woman from learning.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Makes Us Different
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 rounded-lg bg-card/50">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
