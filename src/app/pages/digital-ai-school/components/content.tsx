import { CheckCircle, Globe, Users, Target } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DigitalAiSchoolContent() {
  const whoIsItFor = [
    "Homemakers restarting their careers",
    "Students wanting job-ready skills",
    "Small business owners going digital",
    "Working women seeking promotion",
    "Anyone wanting to earn from home",
  ];

  const programIncludes = [
    "Pre-recorded video lessons in simple language",
    "Mobile-friendly learning platform",
    "Practical projects & assignments",
    "Women-only supportive community",
    "Verifiable certificates",
    "Job, freelance & business support",
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
                <Link href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300">
                    Enroll Now and Start Learning
                    <ArrowRight className="h-4 w-4" />
                </Link>
             </div>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Users className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold">Who Is This For?</h3>
                    </div>
                    <ul className="space-y-3">
                        {whoIsItFor.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                 <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Target className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold">What The Program Includes:</h3>
                    </div>
                    <ul className="space-y-3">
                        {programIncludes.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="text-lg text-muted-foreground">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
