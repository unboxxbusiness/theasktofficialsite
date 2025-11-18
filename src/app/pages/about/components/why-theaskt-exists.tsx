"use client";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  Briefcase,
  BookOpen,
  WifiOff,
  Users,
  Shield,
  Clock,
} from "lucide-react";
import React from "react";

const challenges = [
  {
    title: "Career Gaps & Lost Confidence",
    description: "Restarting after a break can feel overwhelming.",
    icon: <Briefcase />,
  },
  {
    title: "Limited Access to Education",
    description: "Quality learning is often out of reach or too expensive.",
    icon: <BookOpen />,
  },
  {
    title: "Fear of Technology & English",
    description: "Complex platforms and language barriers can be intimidating.",
    icon: <WifiOff />,
  },
  {
    title: "Family Expectations",
    description: "Time limitations make it hard to commit to traditional courses.",
    icon: <Clock />,
  },
  {
    title: "Online Scams",
    description: "High-cost courses that fail to deliver erode trust.",
    icon: <AlertTriangle />,
  },
  {
    title: "Lack of Safe Community",
    description: "A supportive, women-only space is essential for growth.",
    icon: <Users />,
  },
];

export default function WhyTheasktExists() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Theaskt Exists
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Millions of women in India have dreams, talent, and the desire to
            contribute — but face real challenges:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {challenges.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        <div className="text-center mt-8">
            <p className="text-lg font-semibold italic text-foreground max-w-3xl mx-auto">
                Theaskt.org was created to remove these barriers and open new paths
                for women to grow, earn, and redefine what is possible in their
                lives.
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
