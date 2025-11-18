import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Theaskt.org is a public learning trust dedicated to empowering women across India with practical, income-focused education. We believe every woman has the right to financial independence, respect, and a life of dignity.
            </p>
            <p className="text-lg text-muted-foreground">
              Our goal is to break the cycle of dependency by providing skills that matter. We focus on digital and AI technologies because they offer a direct path to remote work, freelancing, and entrepreneurship—opportunities that can be pursued from home, on your own terms.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              “When a woman learns, a family rises. When a family rises, a nation grows.”
            </blockquote>
            <p className="text-lg text-muted-foreground">
              We are more than just a platform; we are a community. A safe, supportive space where women can learn, grow, and lift each other up. Join us in our mission to build a stronger India, one empowered woman at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
