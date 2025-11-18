"use client";
import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    title: "MODULE 1: Digital Confidence & Online Work Basics",
    badge: "Foundations",
    points: [
      "Using smartphone for professional tasks",
      "Online safety & scam protection",
      "Digital identity, payments & tools",
      "Women & financial independence",
    ],
  },
  {
    title: "MODULE 2: Social Media + Digital Marketing",
    badge: "Marketing",
    points: [
      "Instagram, Facebook, WhatsApp business",
      "Content strategy & posting plans",
      "Canva design for creatives",
      "Business branding for beginners",
    ],
  },
  {
    title: "MODULE 3: AI Tools to Work Smarter",
    badge: "AI Skills",
    points: [
      "Use AI for: Content writing, Image design, Video creation, Research & planning",
      "Tools: ChatGPT, Canva AI, CapCut, Notion AI, etc.",
    ],
  },
  {
    title: "MODULE 4: Content Creation & Canva for Women",
    badge: "Content",
    points: [
      "Carousel posts, reels, stories, product catalogs",
      "Templates for small/home business owners",
      "Content batching to save time",
    ],
  },
  {
    title: "MODULE 5: Freelancing & Remote Work",
    badge: "Careers",
    points: [
      "How to start freelancing from home",
      "Creating portfolios without experience",
      "Pricing, client communication & proposals",
      "Platforms: Fiverr, Upwork, LinkedIn",
    ],
  },
  {
    title: "MODULE 6: Earn From Home Pathways",
    badge: "Earning",
    points: [
      "Social media management",
      "Content & design services",
      "Virtual assistance & online tutoring",
      "WhatsApp & Instagram selling",
    ],
  },
];

export default function ProgramSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What You Will Learn
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Modules Designed for Real Earning Outcomes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <div key={index} className="bg-card/50 border rounded-lg p-6 flex flex-col">
            <Badge variant="secondary" className="w-fit mb-4">{module.badge}</Badge>
            <h3 className="text-lg font-semibold mb-4">{module.title}</h3>
            <ul className="space-y-3">
              {module.points.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
        >
          Enroll Now and Start Learning
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
