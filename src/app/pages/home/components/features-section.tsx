"use client";
import { cn } from "@/lib/utils";
import { Lightbulb, Sparkles, Shield, BookOpen } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Skills to Earn",
      description:
        "We provide practical skills that directly help you earn and support your family.",
      icon: <Lightbulb />,
    },
    {
      title: "Confidence & Respect",
      description:
        "Gain the confidence and respect that comes with mastering new abilities.",
      icon: <Sparkles />,
    },
    {
      title: "A Safe Place to Learn",
      description:
        "We offer a supportive and safe environment for learning, free from judgment.",
      icon: <Shield />,
    },
    {
      title: "Flexible Learning",
      description:
        "Our courses are designed to fit your life and accommodate your responsibilities.",
      icon: <BookOpen />,
    },
  ];
  return (
    <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl font-medium lg:text-5xl">A Learning Trust Created For Women, With Women, By Women</h2>
                <p>
                Theaskt.org is a public learning trust dedicated to empowering women across India with practical, income-focused education. We believe every woman deserves:
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
