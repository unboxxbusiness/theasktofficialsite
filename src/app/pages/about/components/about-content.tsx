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
            <h2 className="text-3xl md:text-4xl font-bold">Our Belief</h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
              When a woman learns, she grows. When she grows, her family rises. When families rise, our nation thrives.
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Theaskt.org exists to make learning, skills, and financial independence possible for every woman and girl in India — regardless of background, language, location, age, or previous education.
            </p>
            <p className="text-lg text-muted-foreground">
              We are building a future where no woman is left behind in the digital and AI-driven world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
