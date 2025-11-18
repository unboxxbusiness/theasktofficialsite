import { Users, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CommunityContent() {
  
  const whyJoin = [
    { text: "Motivation when you feel stuck" },
    { text: "Safe space for questions, no judgment" },
    { text: "Friendship and support from women like you" },
    { text: "Success stories that inspire you" },
    { text: "Tips, tools, and earning opportunities" },
    { text: "A place where your dreams are respected" },
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1762927984/connected_india_nvmz0g.png"
                alt="Diverse group of women collaborating"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint="women community collaboration"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">A Safe Space to Learn, Connect & Grow Together</h2>
            <p className="text-lg text-muted-foreground">
              At Theaskt.org, we believe women rise higher when they rise together. Our community is a supportive, respectful, and inspiring space where women from different parts of India learn digital & AI skills, share progress, ask questions, and encourage one another.
            </p>
            <p className="text-lg text-muted-foreground">
              This is not just another online group. It is a sisterhood of learning, confidence, and financial independence.
            </p>
            <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="/digital-ai-school" className="inline-flex items-center gap-2">
                        Join Our Community
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 text-center space-y-4">
                <h2 className="text-3xl font-bold">Why Join the Community?</h2>
                <p className="text-lg text-muted-foreground">
                    Because learning alone is difficult. Learning together is powerful.
                </p>
            </div>
            <div className="relative border-t border-dashed pt-8">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex flex-col justify-center space-y-4">
                        <p className="text-lg font-medium">Inside the community, you get:</p>
                        <ul className="space-y-3">
                            {whyJoin.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <Sparkles className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span className="text-lg">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="relative">
                        <blockquote className="border-l-4 border-primary pl-4">
                            <p className="text-muted-foreground">"The community was the best part of my learning experience. I made friends, found a project partner, and never felt lost."</p>
                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium not-italic">- Anjali R., Theaskt Learner</cite>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
