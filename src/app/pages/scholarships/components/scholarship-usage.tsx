"use client";

import {
  GraduationCap,
  Smartphone,
  Users,
  Video,
  FileText,
  Award,
} from "lucide-react";
import React from "react";

const usageItems = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Digital & AI School courses",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile-first learning access",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Mentorship & doubt support",
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: "Workshops & learning circles",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Assignments & portfolio development",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Certificates upon completion",
  },
];

export default function ScholarshipUsage() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Scholarships Can Be Used For?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Scholarships may be applied to:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {usageItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-6 p-6 rounded-lg bg-background">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
