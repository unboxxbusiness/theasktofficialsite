"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";

export default function Supporters() {
  const supportersList = [
    "Individual donors & sponsors",
    "Corporate CSR funds",
    "Learning grants & philanthropic contributions",
    "Community organizations and NGOs",
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
                <Handshake className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">
                Our Supporters
                </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Our scholarships are made possible by the generosity of individuals and organizations committed to empowering women.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supportersList.map((supporter, index) => (
                    <div
                    key={index}
                    className="flex items-center p-3 rounded-lg bg-background border"
                    >
                    <Sparkles className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-semibold text-foreground text-sm">{supporter}</span>
                    </div>
                ))}
            </div>
          </div>
          <div className="relative flex flex-col justify-center">
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="text-lg font-semibold text-muted-foreground">
                Your contribution, big or small, can change a life. Help us empower more women to learn, earn, and achieve their dreams.
              </p>
              <div className="mt-6">
                 <Button asChild size="lg">
                    <Link href="/contact">
                    Become a Sponsor / Donor
                    <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
