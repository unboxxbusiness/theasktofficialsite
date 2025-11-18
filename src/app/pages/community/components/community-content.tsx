import { Users, ArrowRight, Heart, GraduationCap, Smartphone, Briefcase, Globe, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CommunityContent() {
  const whoIsItFor = [
    { text: "Homemakers restarting careers after a break", icon: <Heart className="h-5 w-5 text-primary" /> },
    { text: "Students preparing for internships & jobs", icon: <GraduationCap className="h-5 w-5 text-primary" /> },
    { text: "Women growing small/home-based businesses", icon: <Smartphone className="h-5 w-5 text-primary" /> },
    { text: "Working professionals upskilling for promotions", icon: <Briefcase className="h-5 w-5 text-primary" /> },
    { text: "Freelancers and remote workers", icon: <Globe className="h-5 w-5 text-primary" /> },
    { text: "Women from rural, semi-urban & urban backgrounds", icon: <Handshake className="h-5 w-5 text-primary" /> },
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <Image
                src="https://picsum.photos/seed/community/800/600"
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
                    <Link href="#" className="inline-flex items-center gap-2">
                        Join Our Community
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Who Is This Community For?</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                    Our learning community is designed for:
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {whoIsItFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0">{item.icon}</div>
                        <span className="font-medium text-lg">{item.text}</span>
                    </div>
                ))}
            </div>
             <blockquote className="border-l-4 border-primary pl-4 text-center max-w-3xl mx-auto pt-8">
                <p className="text-lg font-semibold text-foreground">If you want to learn, earn, and grow — you belong here.</p>
            </blockquote>
        </div>
      </div>
    </section>
  );
}
