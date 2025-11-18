"use client";

import { Heart } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
            {eligibilityCriteria.map((item, index) => (
                <Feature key={index} text={item} index={index} icon={<Heart />} />
            ))}
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


const Feature = ({
  text,
  icon,
  index,
}: {
  text: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3 || index === 6) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, {
            className: "h-8 w-8",
        })}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <p className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground text-left">
          {text}
        </p>
      </div>
    </div>
  );
};