"use client";

import {
  Heart,
  Users,
  Building,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import React from "react";

const scholarshipTypes = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Full Scholarship",
    description:
      "For women with serious financial challenges or special circumstances.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Partial Scholarship",
    description:
      "For women who can contribute a small fee but need reduced pricing.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Community Sponsor/Donor Seats",
    description: "Learners supported by individual/corporate donors.",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "NGO / Self-Help Group Partnerships",
    description: "Group learning for community-based women.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Youth & Student Scholarship",
    description: "For college-age learners and first-generation students.",
  },
];

export default function TypesOfScholarships() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Types of Scholarships Available
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {scholarshipTypes.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 rounded-lg bg-card/50">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
           <div className="flex items-center justify-center space-x-6 p-6 rounded-lg bg-primary/10 md:col-span-2 lg:col-span-1">
                 <p className="text-lg font-semibold text-primary text-center">We review every application with care and respect.</p>
            </div>
        </div>
      </div>
    </section>
  );
}