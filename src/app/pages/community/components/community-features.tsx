"use client";

import {
  ShieldCheck,
  Smartphone,
  MessageCircle,
  Video,
  Monitor,
  Users,
} from "lucide-react";
import React from "react";

const safetyPoints = [
  "Women-only membership",
  "Zero-tolerance for harassment, judgment, or discrimination",
  "Supportive language and encouragement required",
  "Moderators ensure safety and positive culture",
];

const platforms = [
  { icon: <Smartphone className="h-6 w-6" />, name: "WhatsApp Learning Circles" },
  { icon: <MessageCircle className="h-6 w-6" />, name: "Telegram / app-based groups" },
  { icon: <Video className="h-6 w-6" />, name: "Live sessions on Zoom/Google Meet" },
  { icon: <Monitor className="h-6 w-6" />, name: "LMS discussion rooms & support threads" },
];

export default function CommunityFeatures() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary" />
              A Safe & Respectful Space
            </h2>
            <p className="text-muted-foreground">
              We are committed to maintaining a respectful environment:
            </p>
            <ul className="space-y-3">
              {safetyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-primary italic pt-4">
              Your journey deserves dignity and protection. Our community is
              built with that trust.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Community Platforms
            </h2>
            <p className="text-muted-foreground">
              Depending on your course and learning track, you may join:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                        <div className="text-primary flex-shrink-0">{platform.icon}</div>
                        <span className="font-semibold">{platform.name}</span>
                    </div>
                ))}
            </div>
            <p className="text-muted-foreground italic pt-4">
              Designed for mobile-first access, so every woman can participate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
