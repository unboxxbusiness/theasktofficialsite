'use client';

export function Stats() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl font-headline text-primary">
            TheAskt in Numbers
          </h2>
          <p className="text-muted-foreground">
            We are proud to have empowered so many women to start their
            journeys towards financial independence.
          </p>
        </div>

        <div className="grid gap-0.5 text-center md:grid-cols-3">
          <div className="bg-muted rounded-lg space-y-4 py-12">
            <div className="text-5xl font-bold text-primary">1,200+</div>
            <p className="text-muted-foreground">Successful Graduates</p>
          </div>
          <div className="bg-muted rounded-lg space-y-4 py-12">
            <div className="text-5xl font-bold text-primary">95%</div>
            <p className="text-muted-foreground">Placement Rate</p>
          </div>
          <div className="bg-muted rounded-lg space-y-4 py-12">
            <div className="text-5xl font-bold text-primary">50+</div>
            <p className="text-muted-foreground">Courses Offered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
