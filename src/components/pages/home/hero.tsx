'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full pt-24 md:pt-36 lg:pt-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none text-primary">
                Restart Your Career &amp; Earn From Home With Digital &amp; AI
                Skills
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                A trusted online learning platform for Indian women who want to
                become financially independent — even if you have a career
                break or are starting from zero.
              </p>
            </div>
            <ul className="grid gap-4 text-left">
              <li className="flex items-start gap-3">
                <BookOpen className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">
                  Learn from your phone, step-by-step, in simple language
                </span>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">
                  Free, Low-Cost &amp; Scholarship Seats Available
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">
                  For Homemakers, Students, Working Women &amp; Small Business
                  Owners
                </span>
              </li>
            </ul>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="#">
                  Enroll in Digital &amp; AI School
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">Apply for Scholarship</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/hero/600/600"
              alt="Hero"
              data-ai-hint="woman learning on laptop"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
