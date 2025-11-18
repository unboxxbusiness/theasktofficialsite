'use client'

import Link from 'next/link'
import { ArrowRight, Star, GraduationCap, Clock } from 'lucide-react'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function CtaSection() {
    return (
        <section className="py-16">
            <div className={cn(
                "relative mx-auto max-w-5xl rounded-3xl border overflow-hidden",
                "px-6 py-12 md:py-20 lg:py-24"
            )}>
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
                    )}
                />
                <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                    <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                </div>
                <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                    <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
                </div>

                <div className="text-center relative z-10 max-w-3xl mx-auto">
                    <p className="text-lg text-muted-foreground">
                        Your learning journey doesn’t end with one skill. This is your space to grow in every part of life.
                    </p>
                    <p className="mt-4 text-xl font-semibold text-foreground">
                        Choose where you want to start:
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/digital-ai-school" className="gap-2">
                                <GraduationCap className="h-5 w-5" />
                                Enroll in Digital & AI School
                            </Link>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="#" className="gap-2">
                                <Clock className="h-5 w-5" />
                                Join Waitlist for Upcoming Schools
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 border-t border-dashed pt-8">
                        <blockquote className="text-lg italic text-muted-foreground">
                            Your future has many chapters. Let’s learn, rise, and transform them together. 💛
                        </blockquote>
                    </div>

                </div>
            </div>
        </section>
    )
}
