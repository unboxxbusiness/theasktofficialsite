"use client";

import { cn } from "@/lib/utils";
import {
  BookOpen,
  GraduationCap,
  LifeBuoy,
  Users,
  Handshake,
  Megaphone,
  Sparkles,
  Heart,
} from "lucide-react";
import React from "react";

const features = [
  {
    title: "Course & Enrollment Support",
    icon: <BookOpen />,
  },
  {
    title: "Scholarship Application Queries",
    icon: <GraduationCap />,
  },
  {
    title: "Help with Your Learning Account (LMS)",
    icon: <LifeBuoy />,
  },
  {
    title: "Community & Mentorship Information",
    icon: <Users />,
  },
  {
    title: "Partnership / CSR / NGO Collaborations",
    icon: <Handshake />,
  },
  {
    title: "Press & Media Inquiries",
    icon: <Megaphone />,
  },
  {
    title: "Guidance Before You Start",
    icon: <Sparkles />,
  },
  {
    title: "Any Other Questions",
    icon: <Heart />,
  },
];

export default function ContactOptions() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How Can We Help You?</h2>
          <p className="text-lg text-muted-foreground">
            You can contact us for:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
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
  icon,
  index,
}: {
  title: string;
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
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />

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
    </div>
  );
};
