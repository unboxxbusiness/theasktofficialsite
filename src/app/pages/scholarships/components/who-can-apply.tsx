"use client";

import { Heart } from "lucide-react";
import React from "react";

const eligibilityCriteria = [
  "You want to restart your career after a gap",
  "You want to earn from home to support your family",
  "You are a single mother, widow, or caregiver",
  "Household income is limited or unstable",
  "You are a student with financial constraints",
  "You belong to rural/semi-urban/lower-income communities",
  "You want to learn but cannot afford course fees",
];

export default function WhoCanApply() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Who Can Apply?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You are encouraged to apply if any of these describe you:
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border">
            <ul className="space-y-4">
            {eligibilityCriteria.map((item, index) => (
                <li key={index} className="flex items-start">
                    <Heart className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                </li>
            ))}
            </ul>
        </div>
        <div className="text-center mt-12">
            <p className="text-lg font-semibold italic text-foreground max-w-3xl mx-auto">
                No judgment. No shame. Your courage deserves support.
            </p>
        </div>
      </div>
    </section>
  );
}
