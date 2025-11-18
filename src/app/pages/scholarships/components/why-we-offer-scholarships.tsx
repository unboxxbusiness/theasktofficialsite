"use client";

import { AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function WhyWeOfferScholarships() {
  const challenges = [
    "Financial limitations",
    "Family responsibilities",
    "Lack of access to safe learning spaces",
    "Fear of online scams and wasted money",
    "Career breaks and low confidence",
  ];

  return (
    <section className="py-16 md:py-24 bg-muted w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                Why We Offer Scholarships
              </h2>
              <p className="mt-6 text-muted-foreground">
                Millions of Indian women want to learn and earn, but struggle
                due to:
              </p>
            </div>
            <ul className="mt-8 divide-y border-y">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-center gap-4 py-3">
                  <AlertTriangle className="size-5 text-primary" />
                  <span className="font-medium">{challenge}</span>
                </li>
              ))}
            </ul>
             <p className="mt-8 font-semibold text-lg text-primary">
              No woman should be denied education because she cannot afford it. Our scholarships are created to support her first step toward independence.
            </p>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="aspect-[4/3] relative rounded-2xl">
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1762931872/must_need_for_the_askt_wxzaed.png"
                className="rounded-[15px] object-cover"
                alt="Woman overcoming challenges"
                fill
                data-ai-hint="woman hope challenge"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
