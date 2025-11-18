"use client";

import { Heart, GraduationCap, Store, Briefcase } from "lucide-react";
import React from "react";

const audiences = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    text: "For Homemakers restarting career",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    text: "For Students launching their future",
  },
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    text: "For Small business/home-business owners",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    text: "For Working professionals upskilling or shifting careers",
  },
];

export default function SchoolsIntro() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            A Growing Learning Universe for Women & Girls Across India
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Welcome to the Theaskt Schools Hub — the learning ecosystem designed
            to help women build skills, confidence, and financial
            independence.
          </p>
          <p className="text-lg md:text-xl font-semibold text-primary">
            Start with our Digital & AI School or join the waitlists for
            upcoming schools. Your journey can begin from anywhere, even from
            your phone.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <p className="font-semibold text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
