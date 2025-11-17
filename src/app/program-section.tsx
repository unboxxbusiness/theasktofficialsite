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
  LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

export function ProgramSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-20">
          <p className="font-bold text-primary uppercase tracking-wider">
            Flagship Program
          </p>
          <h2 className="text-4xl font-bold mt-2">Digital & AI School</h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Learn Digital + AI Skills to Earn From Home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center md:text-left">
              Perfect For
            </h3>
            <div className="space-y-4">
              <InfoCard
                icon={Home}
                title="Homemakers"
                description="Restarting careers after a break."
              />
              <InfoCard
                icon={GraduationCap}
                title="Students"
                description="Preparing for internships & the modern workplace."
              />
              <InfoCard
                icon={Briefcase}
                title="Small Business Owners"
                description="Growing their home-business online."
              />
              <InfoCard
                icon={Users}
                title="Working Women"
                description="Upskilling for career growth and promotions."
              />
            </div>
          </div>

          <div className="space-y-8 sticky top-24">
            <FeatureListCard
              title="What You Will Learn"
              features={[
                { icon: ShieldCheck, text: 'Digital Confidence & Online Safety' },
                { icon: Sparkles, text: 'AI Tools for Business & Productivity' },
                {
                  icon: Users,
                  text: 'Social Media Marketing (Insta, FB, WA)',
                },
                { icon: PenTool, text: 'Content Creation & Canva Design' },
                {
                  icon: Layers,
                  text: 'Freelancing & Getting Client Projects',
                },
              ]}
            />

            <FeatureListCard
              title="What You Get"
              features={[
                {
                  icon: Film,
                  text: 'Pre-recorded video lessons (learn anytime)',
                },
                { icon: Smartphone, text: 'Mobile-friendly learning' },
                {
                  icon: HeartHandshake,
                  text: 'Women-only community & mentor support',
                },
                {
                  icon: CheckCircle,
                  text: 'Certificates for completed courses',
                },
                {
                  icon: GraduationCap,
                  text: 'Internship & job/freelance support',
                },
              ]}
            />
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

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => (
  <div className="flex items-start gap-4 p-4 bg-card rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="bg-primary/10 text-primary p-3 rounded-full">
      <Icon className="w-6 h-6 flex-shrink-0" />
    </div>
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-muted-foreground text-base mt-1">{description}</p>
    </div>
  </div>
);

interface FeatureListCardProps {
  title: string;
  features: { icon: LucideIcon; text: string }[];
}

const FeatureListCard = ({ title, features }: FeatureListCardProps) => (
  <div className="p-6 bg-card rounded-2xl border">
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-base">
          <feature.icon className="h-5 w-5 text-accent flex-shrink-0" />
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  </div>
);
