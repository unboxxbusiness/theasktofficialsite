"use client";
import {
  BrainCircuit,
  Briefcase,
  Scale,
  HeartPulse,
  Baby,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schools = [
  {
    title: "Digital & AI School",
    description:
      "Learn skills to earn from home, freelance, or grow your small business.",
    icon: <BrainCircuit />,
    href: "/digital-ai-school",
    cta: "Enroll Now",
    badge: "Available Now",
  },
  {
    title: "Business & Entrepreneurship",
    description: "Start, grow, or scale an online or local business.",
    icon: <Briefcase />,
    href: "/schools#",
    cta: "Join Waitlist",
    badge: "Coming Soon",
  },
  {
    title: "Legal & Women’s Rights",
    description:
      "Understand and protect your legal, financial, and social rights.",
    icon: <Scale />,
    href: "/schools#",
    cta: "Join Waitlist",
    badge: "Coming Soon",
  },
  {
    title: "Health & Wellness",
    description: "Because a woman’s well-being matters as much as her skills.",
    icon: <HeartPulse />,
    href: "/schools#",
    cta: "Join Waitlist",
    badge: "Coming Soon",
  },
  {
    title: "Personal Growth",
    description:
      "Build the mindset and emotional strength for your next chapter.",
    icon: <Sparkles />,
    href: "/schools#",
    cta: "Join Waitlist",
    badge: "Coming Soon",
  },
  {
    title: "Parenting & Child Development",
    description:
      "Support mothers, caregivers, and educators with empowering knowledge.",
    icon: <Baby />,
    href: "/schools#",
    cta: "Join Waitlist",
    badge: "Coming Soon",
  },
];

export default function SchoolsList() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Schools</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our available programs and get early access to upcoming
            schools designed to empower women at every stage of their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {schools.map((school, index) => (
            <Feature key={school.title} {...school} index={index} />
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
  badge,
  href,
  cta
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  badge: string;
  href: string;
  cta: string;
}) => {
  return (
    <Link href={href} className="block group/feature">
      <div
        className={cn(
          "flex flex-col h-full lg:border-r py-10 relative dark:border-neutral-800",
          (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
          index < 3 && "lg:border-b dark:border-neutral-800",
          "bg-background"
        )}
      >
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        <div className="mb-4 relative z-10 px-10">
            <Badge variant={badge === "Available Now" ? "default" : "secondary"} className="mb-4">{badge}</Badge>
            <div className="text-primary">
                {React.cloneElement(icon as React.ReactElement, {
                className: "h-8 w-8",
                })}
            </div>
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
         <div className="flex justify-start mt-4 px-10">
            <span className="text-sm font-semibold text-primary group-hover/feature:underline">
                {cta} <ArrowRight className="inline h-4 w-4" />
            </span>
        </div>
      </div>
    </Link>
  );
};
