"use client";

import {
  BookOpen,
  Users,
  Handshake,
  FileText,
  GraduationCap,
  Briefcase,
  Smartphone,
} from "lucide-react";
import React from "react";

const includedItems = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Pre-recorded lessons",
    description: "Learn anytime, at your pace",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Women-only community",
    description: "Safe space, respectful peer circle",
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Mentors & doubt support",
    description: "Ask questions, get guidance",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Assignments & Projects",
    description: "Build portfolio work",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Certificates",
    description: "For completed learning paths",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Internship/job/freelance support",
    description: "Where applicable",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile-friendly learning",
    description: "No laptop needed to start",
  },
];

export default function WhatIsIncludedSection() {
  return (
    <section className="py-16 md:py-24 bg-card w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What's Included
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 rounded-lg bg-background">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
            <div className="flex items-center justify-center space-x-6 p-6 rounded-lg bg-primary/10 md:col-span-2 lg:col-span-1">
                 <p className="text-lg font-semibold text-primary text-center">... and a lifetime of confidence!</p>
            </div>
        </div>
      </div>
    </section>
  );
}
