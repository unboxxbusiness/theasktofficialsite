"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Scale,
  HeartPulse,
  BrainCircuit,
  Baby,
  MoreHorizontal,
} from "lucide-react";
import React from "react";

const features = [
  {
    title: "Business School",
    description: "Learn to launch, manage, and grow your own enterprise.",
    icon: <Briefcase />,
  },
  {
    title: "Legal School",
    description: "Understand your rights and the basics of Indian law.",
    icon: <Scale />,
  },
  {
    title: "Health & Fitness School",
    description: "Take control of your physical and mental well-being.",
    icon: <HeartPulse />,
  },
  {
    title: "Personal Growth School",
    description: "Develop confidence, communication, and leadership skills.",
    icon: <BrainCircuit />,
  },
  {
    title: "Parenting & Child Development",
    description: "Nurture the next generation with knowledge and care.",
    icon: <Baby />,
  },
  {
    title: "...and more",
    description: "Our curriculum is always expanding to meet your needs.",
    icon: <MoreHorizontal />,
  },
];

export default function FutureSchoolsSection() {
  return (
    <section className="py-16 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative z-10 text-center space-y-6 mb-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            FUTURE SCHOOLS COMING SOON
          </h2>
          <p className="max-w-3xl mx-auto">
            Theaskt.org will grow into a complete women’s learning universe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg font-semibold">Join now as a Founding Learner.</p>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border border-border/50 p-8 rounded-lg relative group/feature bg-background"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, {
          className: "h-8 w-8",
        })}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 -ml-8 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10">
        {description}
      </p>
    </div>
  );
};
