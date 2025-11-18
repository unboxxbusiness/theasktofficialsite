"use client";
import { cn } from "@/lib/utils";
import { UserPlus, BookCheck, Clock, Award, Briefcase } from "lucide-react";
import React from "react";

const features = [
  {
    title: "1. Create your account",
    description: "Sign up in seconds to start your journey with us.",
    icon: <UserPlus />,
  },
  {
    title: "2. Choose your course",
    description: "Select from Free, Low-Cost, or Scholarship options.",
    icon: <BookCheck />,
  },
  {
    title: "3. Learn at your own pace",
    description: "Engage with short, mobile-friendly video lessons.",
    icon: <Clock />,
  },
  {
    title: "4. Get certificate & join community",
    description: "Receive your certificate and connect with peers.",
    icon: <Award />,
  },
  {
    title: "5. Get earning support",
    description: "Access freelance, remote work, or business guidance.",
    icon: <Briefcase />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative z-10 text-center space-y-6 mb-12">
          <h2 className="text-4xl font-medium lg:text-5xl">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300">
                👉 Start Your Learning Journey
            </a>
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
    <div className="flex flex-col border rounded-lg p-6 relative group/feature bg-card">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8"})}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 -ml-6 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
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
