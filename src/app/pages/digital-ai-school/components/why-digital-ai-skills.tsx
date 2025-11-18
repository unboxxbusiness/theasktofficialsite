"use client";

import {
  PenSquare,
  LayoutTemplate,
  Users,
  Film,
  Bot,
  Sparkles,
  Check,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <PenSquare />,
    title: "Write Content Instantly",
    description: "Create captions, articles, and emails in minutes, not hours.",
  },
  {
    icon: <LayoutTemplate />,
    title: "Design with AI",
    description: "Generate social media posts without prior design experience.",
  },
  {
    icon: <Users />,
    title: "Manage Social Media",
    description: "Handle business clients' social presence like a pro.",
  },
  {
    icon: <Film />,
    title: "Create Marketing Materials",
    description: "Produce videos, ads, and more with powerful AI tools.",
  },
  {
    icon: <Bot />,
    title: "Automate Repetitive Work",
    description: "Save hours daily by letting AI handle routine tasks.",
  },
  {
    icon: <Sparkles />,
    title: "Unlock Your Potential",
    description: "Curiosity and dedication are all you need to start learning.",
  },
];

export default function WhyDigitalAiSkills() {
  return (
    <section className="py-16 md:py-24 bg-muted w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Digital + AI Skills?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Because the world is changing — and women deserve every opportunity
            that technology creates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        <div className="text-center mt-8 space-y-4 max-w-3xl mx-auto">
            <p className="text-lg font-semibold italic text-foreground">
                You don't need perfect English. You don't need a laptop to start.
            </p>
            <p className="text-lg font-bold text-primary">
                You just need curiosity, dedication, and a safe place to learn.
            </p>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        index === 0 || index === 3 ? "lg:border-l dark:border-neutral-800" : "",
        index < 3 ? "lg:border-b dark:border-neutral-800" : ""
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-8 w-8",
        })}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground text-left">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 text-left">
        {description}
      </p>
    </div>
  );
};
