"use client";

import { AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function WhyCommunityIsSafe() {
  const safetyFeatures = [
    "Women-only platform to ensure comfort and openness",
    "Strict moderation and code of conduct",
    "Zero tolerance for bullying, spam, or harassment",
    "Focus on support, respect, and positive encouragement",
    "Private, members-only access",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                A Safe Space to Learn & Grow
              </h2>
              <p className="mt-6 text-muted-foreground">
                We know that for many women, a safe and supportive environment is non-negotiable. We built our community with this as our top priority.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y">
              {safetyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 py-3">
                  <AlertTriangle className="size-5 text-primary" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="aspect-[4/3] relative rounded-2xl">
              <Image
                src="https://picsum.photos/seed/community-safe/1200/900"
                className="rounded-[15px] object-cover"
                alt="Women feeling safe and supported"
                fill
                data-ai-hint="women support safe space"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}