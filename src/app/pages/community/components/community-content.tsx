import { GraduationCap, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowRight, Store, Briefcase, Handshake } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CommunityContent() {

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
            <h2 className="text-3xl md:text-4xl font-bold">You Are Not Alone on This Journey</h2>
             <p className="mt-4 text-lg font-semibold text-primary">
                Learning is better, together.
            </p>
            <p className="text-lg text-muted-foreground">
              Theaskt Community is a private, women-only space where you can connect with fellow learners, share experiences, ask questions, and grow with the support of a sisterhood. It’s where learning transforms into confidence, and connections turn into lifelong friendships.
            </p>
             <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="#" className="inline-flex items-center gap-2">
                        Join the Community
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
             </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">What is Theaskt Community for?</h2>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Support</h3>
                    <p className="text-muted-foreground">Get help with lessons, clear doubts, and stay motivated.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Networking</h3>
                    <p className="text-muted-foreground">Connect with women from diverse backgrounds and industries.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Collaboration</h3>
                    <p className="text-muted-foreground">Find partners for projects and celebrate each other’s success.</p>
                </div>
            </div>
             <blockquote className="border-l-4 border-primary pl-4 text-center max-w-3xl mx-auto pt-8">
                <p className="text-lg font-semibold text-muted-foreground">"The community was the best part of my learning experience. I made friends, found a project partner, and never felt lost."</p>
                <div className="mt-6 space-y-3">
                    <cite className="block font-medium not-italic">- Anjali R., Theaskt Learner</cite>
                </div>
            </blockquote>
        </div>
      </div>
    </section>
  );
}