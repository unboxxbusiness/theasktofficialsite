"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export default function ForPartners() {
  const partners = [
    { name: "Women self-help groups", icon: "🌼" },
    { name: "Community centers", icon: "🏫" },
    { name: "Corporate CSR programs", icon: "🏢" },
    { name: "Social impact organizations", icon: "🌍" },
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Handshake className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              For NGOs, CSR Partners & Donors
            </h2>
          </div>

          <p className="text-lg text-muted-foreground">We collaborate with:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-background border space-y-3"
              >
                <span className="text-4xl">{partner.icon}</span>
                <span className="font-semibold text-foreground">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-lg text-muted-foreground pt-6">
            To sponsor scholarships and skill-building programs for women
            across India.
          </p>

          <div className="pt-6">
            <Button size="lg" asChild>
              <Link href="#">
                Partner With Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
