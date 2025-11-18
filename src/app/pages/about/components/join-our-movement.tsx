"use client";

import { ArrowRight, GraduationCap, Handshake, School } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

const actions = [
  {
    title: "Explore Our Digital & AI School",
    description: "Start learning practical skills for today's world.",
    href: "#",
    icon: <School />,
  },
  {
    title: "Apply for Scholarship",
    description: "Financial need should not be a barrier to education.",
    href: "#",
    icon: <GraduationCap />,
  },
  {
    title: "Partner, Sponsor or Support",
    description: "Help us empower more women across India.",
    href: "#",
    icon: <Handshake />,
  },
];

export default function JoinOurMovement() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join Our Movement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Theaskt.org is more than a platform — it is a sisterhood of
            learning and transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {actions.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        <div className="text-center mt-8">
            <p className="text-lg font-semibold italic text-foreground max-w-3xl mx-auto">
                Whether you want to restart your career, earn from home, or build new skills — your journey starts here.
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
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  href: string;
}) => {
  return (
    <Link href={href} className="block group/feature">
        <div
        className={cn(
            "flex flex-col h-full lg:border-r py-10 relative dark:border-neutral-800",
            (index === 0) && "lg:border-l dark:border-neutral-800",
             "lg:border-b dark:border-neutral-800",
             "bg-background"
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
        <div className="flex justify-end mt-auto pr-10">
            <ArrowRight className="h-6 w-6 text-muted-foreground group-hover/feature:text-primary transition-colors" />
        </div>
        </div>
    </Link>
  );
};
