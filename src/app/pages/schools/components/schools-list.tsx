"use client";
import {
  BrainCircuit,
  Briefcase,
  Scale,
  HeartPulse,
  Baby,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const availableSchool = {
  name: "Digital & AI School",
  Icon: BrainCircuit,
  description:
    "Learn skills to earn from home, freelance, or grow your small business.",
  href: "/digital-ai-school",
  cta: "Enroll Now",
  background: <div />,
  className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3",
  badge: "Available Now"
};

const comingSoonSchools = [
  {
    name: "Business & Entrepreneurship",
    Icon: Briefcase,
    description:
      "Start, grow, or scale an online or local business.",
    href: "#",
    cta: "Join Waitlist",
    background: <div />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Legal & Women’s Rights",
    Icon: Scale,
    description:
      "Understand and protect your legal, financial, and social rights.",
    href: "#",
    cta: "Join Waitlist",
    background: <div />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    name: "Health & Wellness",
    Icon: HeartPulse,
    description: "Because a woman’s well-being matters as much as her skills.",
    href: "#",
    cta: "Join Waitlist",
    background: <div />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "Personal Growth",
    Icon: HeartPulse,
    description: "Build the mindset and emotional strength for your next chapter.",
    href: "#",
    cta: "Join Waitlist",
    background: <div />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
  },
  {
    name: "Parenting & Child Development",
    Icon: Baby,
    description:
      "Support mothers, caregivers, and educators with empowering knowledge.",
    href: "#",
    cta: "Join Waitlist",
    background: <div />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5",
  },
];

export default function SchoolsList() {
  const features = [availableSchool, ...comingSoonSchools];

  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold">Our Schools</h2>
             <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Explore our available programs and get early access to upcoming schools designed to empower women at every stage of their lives.
            </p>
        </div>
        <BentoGrid className="lg:grid-rows-3 lg:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}