"use client";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Scale,
  HeartPulse,
  BrainCircuit,
  Baby,
  MoreHorizontal,
  ArrowRight,
  Badge,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Badge as BadgeComponent } from "@/components/ui/badge";

const schools = [
  {
    title: "Digital & AI School",
    description: "Our flagship program to build foundational digital, marketing, and AI skills to earn from home.",
    icon: <BrainCircuit />,
    href: "/digital-ai-school",
    status: "Launched",
  },
  {
    title: "Business & Entrepreneurship School",
    description: "Learn to launch, manage, and grow your own small business, online or offline.",
    icon: <Briefcase />,
    href: "#",
    status: "Coming Soon",
  },
  {
    title: "Legal & Rights Awareness School",
    description: "Understand your legal rights, online safety, and how to protect yourself and your family.",
    icon: <Scale />,
    href: "#",
    status: "Coming Soon",
  },
  {
    title: "Personal Growth & Mindset School",
    description: "Develop confidence, communication, leadership, and emotional resilience.",
    icon: <HeartPulse />,
    href: "#",
    status: "Coming Soon",
  },
  {
    title: "Parenting & Child Development School",
    description: "Nurture the next generation with knowledge, care, and modern parenting skills.",
    icon: <Baby />,
    href: "#",
    status: "Coming Soon",
},
  {
    title: "More Schools on the Way",
    description: "Our curriculum is always expanding to meet the needs of women across India.",
    icon: <MoreHorizontal />,
    href: "#",
    status: "Planned",
  },
];

export default function SchoolsList() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {schools.map((school, index) => (
            <SchoolCard key={school.title} {...school} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SchoolCard = ({
  title,
  description,
  icon,
  href,
  status,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  status: "Launched" | "Coming Soon" | "Planned";
}) => {
  return (
    <Link href={href} className="block group">
        <div className="flex flex-col border border-border/50 p-8 rounded-lg h-full relative group/feature bg-background hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className="relative z-10 text-primary">
                    {React.cloneElement(icon as React.ReactElement, {
                    className: "h-10 w-10",
                    })}
                </div>
                <BadgeComponent variant={status === "Launched" ? "default" : "secondary"}>
                    {status}
                </BadgeComponent>
            </div>
            <h3 className="text-xl font-bold mb-2 relative z-10 text-foreground group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-muted-foreground max-w-xs relative z-10 flex-grow">
                {description}
            </p>
            <div className="mt-6 flex justify-end items-center">
                <span className="text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {status === "Launched" ? "Explore School" : "Learn More"}
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground ml-2 transform group-hover:translate-x-1 group-hover:text-primary transition-transform" />
            </div>
        </div>
    </Link>
  );
};
