"use client";

import {
  Zap,
  MessageCircle,
  BookOpen,
  Bot,
  PenSquare,
  Award,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CommunityActivities() {
  const activities = [
    { text: "Weekly learning challenges", icon: <Zap /> },
    { text: "Live Q&A & doubt-solving sessions", icon: <MessageCircle /> },
    { text: "Study circles & accountability groups", icon: <BookOpen /> },
    { text: "AI tool practice activities", icon: <Bot /> },
    { text: "Content creation and digital skill practice rooms", icon: <PenSquare /> },
    { text: "Monthly achievement celebrations", icon: <Award /> },
    { text: "Collaboration & project opportunities", icon: <Users /> },
    { text: "Emotional support for confidence-building", icon: <Heart /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">
                What Happens Inside the Community?
              </h2>
              <p className="mt-6 text-muted-foreground">
                Our community is active, positive, and purpose-driven. You will find:
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {activities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 py-2">
                    <div className="text-primary">
                        {item.icon &&
                            (React.cloneElement(item.icon, {
                            className: "size-5",
                            }))}
                    </div>
                    <span className="font-medium text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
             <p className="mt-8 font-semibold text-lg text-primary">
              You never have to learn alone again.
            </p>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="aspect-[4/3] relative rounded-2xl">
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1762930874/enroll_digital_and_ai_school_fy8mux.png"
                className="rounded-[15px] object-cover"
                alt="Women participating in community activities"
                fill
                data-ai-hint="women collaboration community"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
