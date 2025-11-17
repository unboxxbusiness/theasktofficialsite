'use client';

export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Welcome
        </h1>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Your application is ready. Start building something amazing!
        </p>
      </div>
    </main>
  );
}
