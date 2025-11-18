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

const availableSchool = {
  title: "Digital & AI School",
  icon: <BrainCircuit className="h-8 w-8 text-primary" />,
  description:
    "Learn skills to earn from home, freelance, or grow your small business. Perfect for complete beginners and women restarting their careers.",
  features: [
    "Digital marketing basics",
    "AI tools for content, design & productivity",
    "Video & social media skills",
    "Freelancing & remote work guidance",
    "Mobile-friendly lessons",
    "Women-only community & mentorship",
    "Certificates + earning pathway support",
  ],
  href: "/digital-ai-school",
  cta: "Enroll in Digital & AI School",
  ctaNote: "(Free, low-cost, and scholarship seats available)",
};

const comingSoonSchools = [
  {
    title: "Business & Entrepreneurship School",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    description:
      "For women who want to start, grow, or scale an online or local business.",
    features: [
      "Business fundamentals for beginners",
      "WhatsApp & Instagram selling",
      "Women-focused startup support",
      "Pricing, branding, customer growth strategies",
    ],
    cta: "Join Waitlist",
  },
  {
    title: "Legal & Women’s Rights School",
    icon: <Scale className="h-6 w-6 text-primary" />,
    description:
      "To help women understand and protect their legal, financial, and social rights.",
    features: [
      "Legal rights for women in India",
      "Digital safety, cybercrime & online protection",
      "Employment, business & property rights basics",
      "Support resources & legal awareness",
    ],
    cta: "Join Waitlist",
  },
  {
    title: "Health, Fitness & Wellness School",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    description: "Because a woman’s well-being matters as much as her skills.",
    features: [
      "Women’s physical & mental health",
      "Hormonal balance, nutrition, self-care",
      "Fitness from home routines",
      "Stress management for modern women",
    ],
    cta: "Join Waitlist",
  },
  {
    title: "Personal Growth & Confidence School",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    description: "Build the mindset and emotional strength for your next chapter.",
    features: [
        "Confidence-building for career restarters",
        "Communication & self-expression",
        "Leadership & decision-making",
        "Healing self-worth & identity",
    ],
    cta: "Join Waitlist",
    },
  {
    title: "Parenting & Child Development School",
    icon: <Baby className="h-6 w-6 text-primary" />,
    description:
      "Support mothers, caregivers, and educators with empowering knowledge.",
    features: [
        "Early childhood learning",
        "Parenting communication",
        "Education in digital age",
        "Family emotional well-being",
    ],
    cta: "Join Waitlist",
  },
];

export default function SchoolsList() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        {/* Available School */}
        <div className="text-center">
            <Badge>AVAILABLE SCHOOL (Open for Enrollment)</Badge>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-background border rounded-lg p-8 lg:p-12 shadow-lg">
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    {availableSchool.icon}
                    <h2 className="text-3xl font-bold">{availableSchool.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg">{availableSchool.description}</p>
                <ul className="space-y-3">
                    {availableSchool.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-muted p-8 rounded-lg text-center flex flex-col justify-center items-center">
                <p className="text-lg font-semibold text-foreground mb-4">Start your journey today.</p>
                <Button size="lg" asChild>
                    <Link href={availableSchool.href}>
                        {availableSchool.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">{availableSchool.ctaNote}</p>
            </div>
        </div>

        {/* Coming Soon Schools */}
        <div className="text-center pt-12">
            <Badge variant="secondary">COMING SOON SCHOOLS</Badge>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Join the waitlist for early access and founding learner benefits. These schools are in development to expand learning opportunities across many areas of a woman's life.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonSchools.map((school) => (
                <div key={school.title} className="bg-background border rounded-lg p-6 flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                        {school.icon}
                        <h3 className="text-lg font-bold">{school.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm flex-grow">{school.description}</p>
                    <ul className="space-y-2 pt-2">
                        {school.features.map((feature, index) => (
                             <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span>🔸</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 mt-auto">
                        <Button variant="outline" className="w-full">
                           {school.cta}
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
