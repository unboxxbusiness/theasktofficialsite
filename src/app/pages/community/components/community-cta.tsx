"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CommunityCta() {
  return (
    <section className="py-16">
      <div
        className={cn(
          "relative mx-auto max-w-5xl rounded-3xl border overflow-hidden",
          "px-6 py-12 md:py-20 lg:py-24"
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
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>

        <div className="text-center relative z-10 max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-muted-foreground">
            You do not have to learn alone.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            You deserve support, connection, and a community that believes in
            your dreams.
          </p>
          <p className="text-lg text-muted-foreground">
            If you want to learn digital & AI skills, earn from home, or
            rebuild your confidence…
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            This is your space. This is your sisterhood. This is your time.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
                <Link href="/digital-ai-school">
                    Join Theaskt Women’s Learning Community
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
          </div>
            <p className="text-sm text-muted-foreground pt-4">
              (Enrollment-based community access)
            </p>

          <div className="mt-12 border-t border-dashed pt-8">
            <blockquote className="text-lg italic text-muted-foreground">
              We can’t wait to welcome you. 💛
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
