"use client";
import { cn } from "@/lib/utils";
import { UserPlus, BookCheck, Clock, Award, Briefcase, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/digital-ai-school" className="inline-flex items-center gap-2">
                    Start Your Learning Journey
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex flex-col border rounded-lg p-6 text-center items-center relative group/feature bg-card/50">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8"})}
      </div>
      <h3 className="text-lg font-bold mb-2 relative z-10 text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10">
        {description}
      </p>
    </div>
  );
};
