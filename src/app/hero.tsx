'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Smartphone,
  Video,
  HeartHandshake,
  Award,
} from 'lucide-react';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import Image from 'next/image';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function Hero() {
  return (
    <div className="overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24 md:pt-36">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,hsl(var(--background))_75%)]"
          />

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-bold font-headline md:text-7xl lg:mt-16 xl:text-[5.25rem] text-primary">
                Restart Your Career &amp; Earn From Home With Digital &amp; AI
                Skills
              </h1>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground"
              >
                A trusted online learning platform for Indian women who want to
                become financially independent — even if you have a career
                break or are starting from zero.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 mx-auto grid max-w-4xl gap-4 text-left md:grid-cols-3"
              >
                <div className="bg-muted/50 rounded-lg p-6">
                  <BookOpen className="h-8 w-8 text-accent" />
                  <p className="mt-4 text-muted-foreground">
                    Learn from your phone, step-by-step, in simple language
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <GraduationCap className="h-8 w-8 text-accent" />
                  <p className="mt-4 text-muted-foreground">
                    Free, Low-Cost &amp; Scholarship Seats Available
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <Users className="h-8 w-8 text-accent" />
                  <p className="mt-4 text-muted-foreground">
                    For Homemakers, Students, Working Women &amp; Small
                    Business Owners
                  </p>
                </div>
              </AnimatedGroup>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 1,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <div key={1}>
                  <Button asChild size="lg">
                    <Link href="#link">
                      <span className="text-nowrap">
                        Enroll in Digital &amp; AI School
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedGroup>
              
              <div className="mt-12 mx-auto max-w-5xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <Smartphone className="h-5 w-5 text-accent"/>
                        <span className="text-sm text-muted-foreground">Mobile Friendly</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Video className="h-5 w-5 text-accent"/>
                        <span className="text-sm text-muted-foreground">Video Lessons</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <HeartHandshake className="h-5 w-5 text-accent"/>
                        <span className="text-sm text-muted-foreground">Women-Only Community</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Award className="h-5 w-5 text-accent"/>
                        <span className="text-sm text-muted-foreground">Certificates</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mt-8 sm:mt-12 md:mt-20">
              <div className="relative mx-auto max-w-6xl">
                <Image
                  src="https://picsum.photos/seed/heroimage/1200/600"
                  alt="Woman learning on a laptop"
                  data-ai-hint="woman learning laptop"
                  width="1200"
                  height="600"
                  className="rounded-2xl mx-auto"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </div>
  );
}
