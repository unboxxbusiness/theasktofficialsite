"use client";
import { AlertTriangle } from "lucide-react";

export default function WhyTheasktExists() {
  const challenges = [
    "Career gaps and lost confidence",
    "Limited access to quality, affordable education",
    "Fear of technology, English, and complex learning platforms",
    "Family expectations and time limitations",
    "Online scams and high-cost courses that fail to deliver",
    "Lack of safe, supportive learning communities",
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Theaskt Exists
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Millions of women in India have dreams, talent, and the desire to
            contribute — but face real challenges:
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-6 text-left">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-lg text-muted-foreground">
                  {challenge}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-lg font-semibold italic text-foreground max-w-3xl mx-auto">
            Theaskt.org was created to remove these barriers and open new paths
            for women to grow, earn, and redefine what is possible in their
            lives.
          </p>
        </div>
      </div>
    </section>
  );
}
