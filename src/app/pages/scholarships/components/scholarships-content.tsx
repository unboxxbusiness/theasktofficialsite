import { GraduationCap, Heart } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ScholarshipsContent() {
  const scholarshipFor = [
    "Scholarships for homemakers restarting careers",
    "Scholarships for low-income and single mothers",
    "Scholarships for students and first-generation learners",
    "Scholarships for survivors of domestic violence or difficult circumstances",
    "Scholarships for women with disabilities or special needs",
  ];

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
                    <Link href="#" className="inline-flex items-center gap-2">
                        Apply for a Scholarship
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Who We Support</h2>
                </div>
            </div>
            <div>
                <ul className="space-y-4 grid md:grid-cols-2 gap-4">
                    {scholarshipFor.map((item, index) => (
                    <li key={index} className="flex items-start text-lg bg-muted/50 p-4 rounded-lg">
                        <Heart className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
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
