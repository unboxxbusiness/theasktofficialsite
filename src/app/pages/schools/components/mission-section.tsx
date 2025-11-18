"use client";

import { Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground">
            To make world-class skills, guidance, and personal growth available and accessible to every woman and girl in India.
          </p>
          <p className="text-lg md:text-xl font-semibold text-primary">
            We are building multiple schools that support a woman’s life, career, rights, well-being, and dreams.
          </p>
        </div>
      </div>
    </section>
  );
}
