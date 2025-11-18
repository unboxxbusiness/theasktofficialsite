"use client";

import { Heart, GraduationCap, Store, Briefcase } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: <Heart />,
    title: "For Homemakers",
    description: "Restart your career with confidence and new skills.",
  },
  {
    icon: <GraduationCap />,
    title: "For Students",
    description: "Launch your future and get ahead in your career.",
  },
  {
    icon: <Store />,
    title: "For Business Owners",
    description: "Grow your small or home-based business.",
  },
  {
    icon: <Briefcase />,
    title: "For Professionals",
    description: "Upskill or shift careers with in-demand knowledge.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
          {audiences.map((feature, index) => (
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
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, {
            className: "h-8 w-8",
        })}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
