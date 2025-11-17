import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container grid place-items-center gap-8 py-20 md:py-32">
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-4xl font-headline sm:text-5xl md:text-6xl lg:text-7xl text-primary">
          Cultivate Your Curiosity. Grow Your Knowledge.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          TheAskt is your personal ecosystem for learning and development. Plant
          the seeds of inquiry and watch your understanding flourish.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Start Exploring
        </Button>
      </div>
    </section>
  );
}
