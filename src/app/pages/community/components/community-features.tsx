"use client";

import {
  MessageSquare,
  Calendar,
  Users,
  Briefcase,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <MessageSquare />,
    title: "Discussion Forums",
    description: "Ask questions, share ideas, and discuss topics by course and interest.",
  },
  {
    icon: <Calendar />,
    title: "Exclusive Events & Workshops",
    description: "Join expert Q&As, skill-building workshops, and member meetups.",
  },
  {
    icon: <Users />,
    title: "Mentorship Circles",
    description: "Get guidance from experienced mentors and senior learners.",
  },
  {
    icon: <Briefcase />,
    title: "Job & Freelance Boards",
    description: "Find and share opportunities for remote work, projects, and jobs.",
  },
  {
    icon: <Lightbulb />,
    title: "Project Showcases",
    description: "Share your work, get feedback, and build your portfolio.",
  },
  {
    icon: <BookOpen />,
    title: "Resource Library",
    description: "Access a curated library of tools, articles, and templates.",
  },
];

export default function CommunityFeatures() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Community Features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
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
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
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