import { GraduationCap, Heart } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight, Users, Store, Briefcase, Handshake } from 'lucide-react';
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";


const scholarshipFor = [
    {
        title: "Homemakers Restarting Careers",
        icon: <Heart />,
    },
    {
        title: "Low-Income & Single Mothers",
        icon: <Users />,
    },
    {
        title: "Students & First-Gen Learners",
        icon: <GraduationCap />,
    },
    {
        title: "Survivors of Difficult Circumstances",
        icon: <Handshake />,
    },
    {
        title: "Women with Disabilities",
        icon: <Briefcase />,
    },
];

export default function ScholarshipsContent() {

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <Image
                src="https://picsum.photos/seed/scholarships/800/600"
                alt="Hopeful student receiving support"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint="student support education"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Scholarships for Women & Girls</h2>
            <p className="mt-4 text-lg font-semibold text-primary">
              Because Every Woman Deserves the Chance to Learn, Grow & Earn
            </p>
            <p className="text-lg text-muted-foreground">
              At Theaskt.org, we believe money should never stop a woman from building her future. Our scholarship programs ensure that women and girls across India — regardless of income, location, or background — can access transformative digital and AI skills to earn from home, restart careers, or grow small businesses.
            </p>
             <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="https://edu.theaskt.org/scholarship-application" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Apply for a Scholarship
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Who We Support</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
                {scholarshipFor.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
             <blockquote className="border-l-4 border-primary pl-4 text-center max-w-3xl mx-auto pt-8">
                <p className="text-lg font-semibold text-muted-foreground">"The scholarship gave me the opportunity to learn when I couldn't afford it. I am forever grateful to Theaskt for believing in me."</p>
                <div className="mt-6 space-y-3">
                    <cite className="block font-medium not-italic">- Priya S., Scholarship Recipient</cite>
                </div>
            </blockquote>
        </div>
      </div>
    </section>
  );
}


const Feature = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, {
            className: "h-8 w-8",
        })}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground text-left">
          {title}
        </span>
      </div>
    </div>
  );
};
