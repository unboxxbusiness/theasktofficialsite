"use client";

import {
  Heart,
  GraduationCap,
  Store,
  Briefcase,
  Users,
  Handshake,
} from "lucide-react";
import React from "react";

const audience = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Homemakers restarting their careers",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Students preparing for future opportunities",
  },
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    title: "Small business & home business owners",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Working women upskilling for better roles",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Women from rural and urban communities",
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "NGO and grassroots community learners",
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Who We Serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We welcome learners from all backgrounds:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audience.map((item, index) => (
            <div key={index} className="flex items-center space-x-6 p-6 rounded-lg bg-background">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-lg font-semibold italic text-foreground max-w-3xl mx-auto">
                If a woman wants to learn and grow — Theaskt is her platform.
            </p>
        </div>
      </div>
    </section>
  );
}
