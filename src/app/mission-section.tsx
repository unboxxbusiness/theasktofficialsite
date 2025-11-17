'use client';

import { Check, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

export function MissionSection() {
  return (
    <section className="py-16 md:py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-bold">
                A Learning Trust Created For Women
              </h2>
              <p className="mt-6 text-muted-foreground">
                Theaskt.org is a public learning trust dedicated to empowering
                women across India with practical, income-focused education.
              </p>
            </div>
            <p className="mt-8 font-semibold">We believe every woman deserves:</p>
            <ul className="mt-4 divide-y border-y">
              <li className="flex items-center gap-3 py-3">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-foreground/90">Skills to earn & support her family</span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-foreground/90">Confidence & respect for her abilities</span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-foreground/90">A safe place to learn without judgment</span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-foreground/90">Learning that fits her life & responsibilities</span>
              </li>
            </ul>
          </div>
          <div className="relative lg:col-span-3">
             <Image 
                src="https://picsum.photos/seed/mission/1207/929" 
                className="rounded-2xl shadow" 
                alt="Women collaborating and learning"
                data-ai-hint="women learning together"
                width={1207} 
                height={929} 
              />
          </div>
        </div>
      </div>
    </section>
  );
}
