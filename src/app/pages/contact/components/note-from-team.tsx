"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";

export default function NoteFromTeam() {
  const points = [
    "We are here to support you with respect and patience.",
    "We celebrate women who choose to learn and grow.",
    "Your message will be received with care.",
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div
        className={cn(
          "relative mx-auto max-w-5xl rounded-3xl border overflow-hidden",
          "px-6 py-12 md:py-20"
        )}
      >
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            A Note from Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            We know reaching out for help or information can feel overwhelming —
            especially if you are restarting your learning journey after a
            break.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Please know this:
          </p>
          <div className="inline-flex flex-col items-start gap-4 mx-auto border-l-4 border-primary pl-6 py-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-lg italic text-muted-foreground pt-4">
            Whether you are a homemaker, student, working woman, or small
            business owner… your journey matters.
          </p>
        </div>
      </div>
    </section>
  );
}
