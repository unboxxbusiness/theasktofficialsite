import { Users } from "lucide-react";
import Image from "next/image";

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
            <h2 className="text-3xl md:text-4xl font-bold">A Safe Space to Learn, Connect & Grow Together</h2>
            <p className="text-lg text-muted-foreground">
              At Theaskt.org, we believe women rise higher when they rise together. Our community is a supportive, respectful, and inspiring space where women from different parts of India learn digital & AI skills, share progress, ask questions, and encourage one another.
            </p>
            <p className="text-lg text-muted-foreground">
              This is not just another online group. It is a sisterhood of learning, confidence, and financial independence.
            </p>
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
