"use client";

import Image from "next/image";
import { Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 w-full">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 max-w-xl space-y-6">
                <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    <h2 className="text-4xl font-medium lg:text-5xl">Our Mission</h2>
                </div>
                <p>
                    <span className="font-medium">To make world-class skills, guidance, and personal growth</span> available and accessible to every woman and girl in India.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                <div>
                    <p>We are building multiple schools that support a woman’s life, career, rights, well-being, and dreams.</p>
                    <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                        <div className="space-y-4">
                            <div className="text-5xl font-bold text-primary dark:text-primary-foreground">+10M</div>
                            <p className="text-muted-foreground">Lives to Empower</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl font-bold text-primary dark:text-primary-foreground">+5</div>
                            <p className="text-muted-foreground">Schools Planned</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <blockquote className="border-l-4 border-primary pl-4">
                        <p className="text-muted-foreground">"Theaskt's mission isn't just about education; it's about igniting hope and building futures. It’s a privilege to be part of this movement."</p>
                         <div className="mt-6 space-y-3">
                            <cite className="block font-medium not-italic">- Anjali D., Supporter</cite>
                            <Image className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/seed/supporter/100/100" alt="Supporter photo" height={40} width={40} data-ai-hint="person portrait" />
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
  );
}
