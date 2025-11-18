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
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="flex justify-center items-center gap-3 mb-6">
            <Handshake className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
            Supporters, Donors & CSR Partners
            </h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Scholarships are made possible through:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {supportersList.map((supporter, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-background border"
            >
              <Sparkles className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
              <span className="font-semibold text-foreground">{supporter}</span>
            </div>
          ))}
        </div>
        <div className="bg-muted p-8 rounded-lg border">
          <p className="text-lg font-semibold mb-4">
            If you want to support more women:
          </p>
          <Button asChild size="lg">
            <Link href="#">
              Become a Sponsor / Donor
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
