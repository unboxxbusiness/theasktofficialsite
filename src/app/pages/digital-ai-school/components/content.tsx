import { CheckCircle, Globe, Users, Target } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function DigitalAiSchoolContent() {
  const whoIsItFor = [
    "Restart career after marriage/motherhood",
    "Earn from home using digital & AI skills",
    "Grow a home-business on Instagram/WhatsApp",
    "Get internships or remote work opportunities",
    "Upskill for better salaries or job promotions",
    "Work with clients across India & globally",
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <Image
                src="https://picsum.photos/seed/digital-school/800/600"
                alt="Women learning on laptops"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint="women learning digital skills"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Flagship Program</h2>
             <p className="mt-4 text-lg font-semibold text-primary flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Learn Digital + AI Skills to Earn From Home
            </p>
            <p className="text-lg text-muted-foreground">
             The Digital & AI School is designed to give you the most in-demand skills for today's world. Whether you have a career gap, are a student, or want to upskill — this program is your launchpad to financial independence.
            </p>
             <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="https://edu.theaskt.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Enroll Now and Start Learning
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 max-w-xl space-y-6">
                <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Who This School Is For</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                    Perfect for women who want to:
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                <div>
                    <ul className="space-y-3">
                        {whoIsItFor.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="text-lg">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <blockquote className="border-l-4 border-primary pl-4">
                        <p className="text-muted-foreground">"I never thought I could learn these skills, but Theaskt made it so simple. I am now earning from home and feel so confident."</p>
                        <div className="mt-6 space-y-3">
                            <cite className="block font-medium not-italic">- Sunita K., Homemaker & Learner</cite>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
