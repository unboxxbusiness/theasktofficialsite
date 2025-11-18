import { GraduationCap, Heart, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ScholarshipsContent() {
  const whoCanApply = [
    "Women with a long career break",
    "Learners from low-income households",
    "Students with high academic potential but limited means",
    "Women facing social or economic disadvantages",
    "Individuals nominated by our NGO partners",
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
            <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
             <p className="mt-4 text-lg font-semibold text-primary flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Financial need should never stop a woman from learning.
            </p>
            <p className="text-lg text-muted-foreground">
             Theaskt Scholarships are our promise that every deserving woman gets a chance to build her future. We offer need-based and merit-based financial aid, supported by our trust and generous donors.
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
            <div className="relative z-10 max-w-xl space-y-6">
                <div className="flex items-center gap-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Who Can Apply?</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                    We invite applications from:
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                <div>
                    <ul className="space-y-3">
                        {whoCanApply.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="text-lg">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <blockquote className="border-l-4 border-primary pl-4">
                        <p className="text-muted-foreground">"The scholarship gave me the opportunity to learn when I couldn't afford it. I am forever grateful to Theaskt for believing in me."</p>
                        <div className="mt-6 space-y-3">
                            <cite className="block font-medium not-italic">- Priya S., Scholarship Recipient</cite>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
