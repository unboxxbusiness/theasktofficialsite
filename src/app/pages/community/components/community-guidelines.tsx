"use client";

import { Heart, MessageCircle, Share2, ShieldCheck } from "lucide-react";
import React from "react";

const guidelines = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Be Respectful & Kind",
    description: "Treat every member with respect. No personal attacks, bullying, or harsh criticism.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Communicate Constructively",
    description: "Share feedback in a helpful, supportive way. We are all here to learn.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Share Generously, Not Selfishly",
    description: "Share knowledge and resources. Avoid spam and self-promotion.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Respect Privacy",
    description: "What is shared in the community stays in the community. Do not share personal information.",
  },
];

export default function CommunityGuidelines() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Community Guidelines
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            To keep our community safe, positive, and valuable for everyone, we ask all members to follow these simple rules:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {guidelines.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 rounded-lg bg-background">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}