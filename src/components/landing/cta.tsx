"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
            Ready to Cultivate Your Curiosity?
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join TheAskt today and start your journey of knowledge growth. Sign up now and get access to a world of curated content.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Link href="#">
              <Button size="lg" className="w-full" variant="secondary">
                Sign Up Now
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
