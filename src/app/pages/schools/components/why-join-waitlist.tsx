"use client";

import { Sparkles } from "lucide-react";

export default function WhyJoinWaitlist() {
  const benefits = [
    "Early access before public launch",
    "Founding learner badge & recognition",
    "Special discounts / scholarships (limited)",
    "Priority seats in women-only cohorts",
    "Invitations to pre-launch workshops or webinars",
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Join a Waitlist?
          </h2>
          <p className="text-lg text-muted-foreground">
            When you join a waitlist, you get:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-background border">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-left">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
