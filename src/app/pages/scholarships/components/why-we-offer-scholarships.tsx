"use client";

import { AlertTriangle } from "lucide-react";

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
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why We Offer Scholarships
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Millions of Indian women want to learn and earn, but struggle due to:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start bg-background p-4 rounded-lg">
                        <AlertTriangle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-lg">{challenge}</span>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col items-center justify-center bg-background p-8 rounded-lg">
                <p className="text-xl font-semibold text-center text-foreground">
                    No woman should be denied education because she cannot afford it.
                </p>
                <p className="text-lg italic text-center text-primary mt-4">
                    Our scholarships are created to support her first step toward independence.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
