"use client";

import { CheckCircle } from "lucide-react";

export default function WhyMultipleSchools() {
  const points = [
    "Skills for income",
    "Understanding legal & financial rights",
    "Confidence, mental & emotional empowerment",
    "Health & well-being",
    "Family & parenting",
    "Business & leadership",
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Multiple Schools?
          </h2>
          <p className="text-lg text-muted-foreground">
            Because a woman’s growth is not one-dimensional.
          </p>
          <p className="text-lg font-semibold text-foreground">
            She deserves support in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 max-w-2xl mx-auto">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-background border"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground text-left text-sm font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-primary pt-6">
            Theaskt Schools are built to support the whole woman — not just her
            career.
          </p>
        </div>
      </div>
    </section>
  );
}
