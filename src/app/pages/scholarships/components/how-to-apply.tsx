"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  MailCheck,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const steps = [
  { text: "Fill out the Scholarship Application Form" },
  { text: "Share your motivation and background" },
  { text: "Submit basic income/need information" },
  { text: "Our team reviews your application" },
  { text: "Eligible learners receive scholarship confirmation" },
];

const afterApply = [
  { text: "Email/WhatsApp confirmation", icon: <MailCheck /> },
  {
    text: "If selected: scholarship instructions + onboarding",
    icon: <Award />,
  },
  { text: "Access to LMS, community, and support", icon: <Users /> },
];

export default function HowToApply() {
  return (
    <section className="py-16 md:py-24 w-full bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How to Apply (A Simple Process)
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-background p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ClipboardList className="h-6 w-6 text-primary" />
              Application Steps
            </h3>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-bold text-sm mr-4 mt-1">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-muted-foreground">
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>
            <Button asChild className="mt-8 w-full" size="lg">
              <Link href="https://edu.theaskt.org/scholarship-application" target="_blank" rel="noopener noreferrer">
                Apply for Scholarship
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="bg-background p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-6">After You Apply</h3>
            <p className="text-muted-foreground mb-4">You will receive:</p>
            <ul className="space-y-4">
              {afterApply.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">
                    {React.cloneElement(item.icon, { className: "h-5 w-5" })}
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-muted-foreground italic">
                We aim to process most applications within 7–14 working days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
