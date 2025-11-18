"use client";

import { ArrowRight, BookOpen, Layers } from "lucide-react";

export default function LearningPath() {
  const journeySteps = [
    {
      icon: "🌐",
      title: "Start with Digital & AI School",
      description: "begin earning",
    },
    {
      icon: "🏛",
      title: "Then join Business School",
      description: "expand income",
    },
    {
      icon: "⚖",
      title: "Add Legal School",
      description: "protect your rights",
    },
    {
      icon: "🌱",
      title: "Add Personal Growth School",
      description: "build confidence",
    },
  ];

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How the Learning Path Works
          </h2>
          <p className="text-lg text-muted-foreground">
            You can join one school of your choice, or learn across multiple
            schools as your needs grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <div className="bg-card/50 border rounded-lg p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">One School</h3>
            </div>
            <p className="text-muted-foreground">
              Focus on one area to build deep expertise.
            </p>
          </div>
          <div className="bg-card/50 border rounded-lg p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Multiple Schools</h3>
            </div>
            <p className="text-muted-foreground">
              Combine skills for a holistic growth journey.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Example Learning Journey
          </h3>
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-5 h-full w-0.5 bg-border/70 md:top-1/2 md:-translate-y-1/2 md:left-5 md:h-0.5 md:w-full"
              aria-hidden="true"
            />
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {journeySteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-background border-2 border-primary rounded-full h-12 w-12 flex items-center justify-center text-xl mb-3 z-10">
                      {step.icon}
                    </div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <ArrowRight className="hidden md:block text-primary/50" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
