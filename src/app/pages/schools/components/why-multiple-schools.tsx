"use client";

import {
  CheckCircle,
  PiggyBank,
  HeartHandshake,
  BookUser,
  HeartPulse,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WhyMultipleSchools() {
  const points = [
    { text: "Skills for income", icon: <PiggyBank className="size-5" /> },
    {
      text: "Understanding legal & financial rights",
      icon: <BookUser className="size-5" />,
    },
    {
      text: "Confidence, mental & emotional empowerment",
      icon: <Sparkles className="size-5" />
    },
    { text: "Health & well-being", icon: <HeartPulse className="size-5" /> },
    { text: "Family & parenting", icon: <Users className="size-5" /> },
    { text: "Business & leadership", icon: <Briefcase className="size-5" /> },
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                Why Multiple Schools?
              </h2>
              <p className="mt-6 text-muted-foreground">
                Because a woman’s growth is not one-dimensional. She deserves
                support in every area of her life.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y">
              {points.map((point) => (
                <li
                  key={point.text}
                  className="flex items-center gap-4 py-3"
                >
                  <div className="text-primary">{point.icon}</div>
                  <span className="font-medium">{point.text}</span>
                </li>
              ))}
            </ul>
             <p className="mt-8 text-lg font-bold text-primary">
                Theaskt Schools are built to support the whole woman — not just
                her career.
            </p>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="aspect-[4/3] relative rounded-2xl">
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1762927728/our_impact_tkn2ly.png"
                className="rounded-[15px] object-cover"
                alt="Holistic growth illustration"
                fill
                data-ai-hint="holistic growth empowerment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
