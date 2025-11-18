import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutContent() {
  const whoWeArePoints = [
    "Restart careers after a break",
    "Earn from home or remotely",
    "Build freelancing and small business opportunities",
    "Learn digital, AI, business, legal, health, and personal growth skills",
    "Become confident and independent contributors to society",
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <Image
                src="https://picsum.photos/seed/about/800/600"
                alt="Diverse group of women learning"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint="women community learning"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Belief</h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
              When a woman learns, she grows. When she grows, her family rises.
              When families rise, our nation thrives.
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Theaskt.org exists to make learning, skills, and financial
              independence possible for every woman and girl in India —
              regardless of background, language, location, age, or previous
              education.
            </p>
            <p className="text-lg text-muted-foreground">
              We are building a future where no woman is left behind in the
              digital and AI-driven world.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 max-w-xl space-y-6">
                <h2 className="text-4xl font-medium lg:text-5xl">Who We Are</h2>
                <p>
                    Theaskt.org is a public learning trust committed to providing accessible, practical, and life-changing education for women. We are not a typical ed-tech company. We are a mission-led learning movement.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                <div className="flex flex-col justify-center space-y-4">
                     <p className="text-lg font-medium">Our programs are crafted to help learners:</p>
                </div>
                <div className="relative">
                    <blockquote className="border-l-4 border-primary pl-4">
                        <ul className="space-y-3">
                            {whoWeArePoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <Sparkles className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span className="text-lg text-muted-foreground">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </blockquote>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}