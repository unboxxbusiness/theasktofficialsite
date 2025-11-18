"use client";

import { Sparkles } from "lucide-react";

export default function OurVision() {
  const visionPoints = [
    "Have their own income and identity",
    "Use digital & AI tools confidently",
    "Become leaders, entrepreneurs, educators, and changemakers",
    "Support and uplift other women",
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">Our Vision</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-lg text-muted-foreground">
              To empower 10 million women in India with skills, confidence, and
              opportunities to become financially independent and respected
              contributors to society.
            </p>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="font-semibold">We envision a world where women:</p>
              <ul className="mt-4 space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Sparkles className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
