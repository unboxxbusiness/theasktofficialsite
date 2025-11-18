"use client";

import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinOurMovement() {
  const goals = [
    "Restart your career",
    "Earn from home",
    "Start a digital business",
    "Build confidence and skills",
    "Change your future",
  ];

  const actions = [
    { text: "Explore Our Digital & AI School", href: "#" },
    { text: "Apply for Scholarship", href: "#" },
    { text: "Partner, Sponsor or Support Our Mission", href: "#" },
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Movement
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Theaskt.org is more than a platform — it is a sisterhood of learning
          and transformation.
        </p>

        <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg border">
          <p className="font-semibold text-lg mb-6">
            Whether you want to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-left">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{goal}</span>
              </div>
            ))}
             <div className="flex items-center space-x-3 font-bold">
                ...we are here to walk this journey with you.
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            {actions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-2 w-full sm:w-auto"
              >
                {action.text}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
