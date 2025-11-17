import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="container pb-20 md:pb-32">
      <div className="bg-primary text-primary-foreground p-12 rounded-3xl text-center shadow-lg">
        <h2 className="text-3xl font-headline sm:text-4xl">Ready to Grow?</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto text-primary-foreground/80">
          Join a community of curious minds today. It's free to get started.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}
