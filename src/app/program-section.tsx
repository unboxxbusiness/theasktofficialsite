'use client';

import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Film,
  GraduationCap,
  HeartHandshake,
  Home,
  Layers,
  Smartphone,
  Sparkles,
  Users,
  Briefcase,
  PenTool,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export function ProgramSection() {
  return (
    <section className="py-16 md:py-32 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="font-bold text-primary uppercase tracking-wider">
            Flagship Program
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Digital & AI School
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Learn Digital + AI Skills to Earn From Home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Perfect For</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <Home className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Homemakers</h4>
                  <p className="text-muted-foreground text-sm">
                    Restarting careers after a break.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <GraduationCap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Students</h4>
                  <p className="text-muted-foreground text-sm">
                    Preparing for internships & the modern workplace.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <Briefcase className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Small Business Owners</h4>
                  <p className="text-muted-foreground text-sm">
                    Growing their home-business online.
                  </p>
                </div>
              </div>
               <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <Users className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Working Women</h4>
                  <p className="text-muted-foreground text-sm">
                    Upskilling for career growth and promotions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">What You Will Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span>Digital Confidence & Online Safety</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span>AI Tools for Business & Productivity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Social Media Marketing (Insta, FB, WA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <PenTool className="h-5 w-5 text-accent" />
                  <span>Content Creation & Canva Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-accent" />
                  <span>Freelancing & Getting Client Projects</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">What You Get</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Film className="h-5 w-5 text-accent" />
                  <span>Pre-recorded video lessons (learn anytime)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-accent" />
                  <span>Mobile-friendly learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <HeartHandshake className="h-5 w-5 text-accent" />
                  <span>Women-only community & mentor support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Certificates for completed courses</span>
                </li>
                 <li className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span>Internship & job/freelance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link href="#cta">Create Your Learning Account</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
